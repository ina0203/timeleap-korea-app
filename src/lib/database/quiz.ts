import { supabase, type QuizResult, type LearningSession, type WrongAnswer } from './supabase';

// 퀴즈 결과 저장
export async function saveQuizResult(result: Omit<QuizResult, 'id' | 'created_at'>): Promise<boolean> {
  const { error } = await supabase
    .from('quiz_results')
    .insert([result]);

  if (error) {
    console.error('Error saving quiz result:', error);
    return false;
  }

  // 틀린 경우 오답 노트에 추가
  if (!result.is_correct) {
    await addToWrongAnswers(
      result.user_id,
      result.quiz_id,
      result.era_id,
      result.level
    );
  }

  return true;
}

// 학습 세션 저장
export async function saveLearningSession(session: Omit<LearningSession, 'id' | 'created_at'>): Promise<boolean> {
  const { error } = await supabase
    .from('learning_sessions')
    .insert([session]);

  if (error) {
    console.error('Error saving learning session:', error);
    return false;
  }

  return true;
}

// 사용자의 시대별 퀴즈 결과 통계
export async function getQuizStatsByEra(userId: string, eraId: string) {
  const { data, error } = await supabase
    .from('quiz_results')
    .select('*')
    .eq('user_id', userId)
    .eq('era_id', eraId);

  if (error) {
    console.error('Error fetching quiz stats:', error);
    return null;
  }

  const total = data.length;
  const correct = data.filter(r => r.is_correct).length;
  const accuracy = total > 0 ? (correct / total) * 100 : 0;

  return {
    total,
    correct,
    wrong: total - correct,
    accuracy
  };
}

// 사용자의 최근 학습 세션들
export async function getRecentSessions(userId: string, limit: number = 10): Promise<LearningSession[]> {
  const { data, error } = await supabase
    .from('learning_sessions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching recent sessions:', error);
    return [];
  }

  return data || [];
}

// 오답 노트에 추가
async function addToWrongAnswers(
  userId: string,
  quizId: string,
  eraId: string,
  level: number
): Promise<boolean> {
  // 이미 오답 노트에 있는지 확인
  const { data: existing } = await supabase
    .from('wrong_answers')
    .select('*')
    .eq('user_id', userId)
    .eq('quiz_id', quizId)
    .single();

  if (existing) {
    // 시도 횟수 증가
    const { error } = await supabase
      .from('wrong_answers')
      .update({
        attempt_count: existing.attempt_count + 1,
        last_wrong_at: new Date().toISOString()
      })
      .eq('id', existing.id);

    if (error) {
      console.error('Error updating wrong answer:', error);
      return false;
    }
  } else {
    // 새로 추가
    const { error } = await supabase
      .from('wrong_answers')
      .insert([{
        user_id: userId,
        quiz_id: quizId,
        era_id: eraId,
        level: level,
        attempt_count: 1
      }]);

    if (error) {
      console.error('Error adding wrong answer:', error);
      return false;
    }
  }

  return true;
}

// 오답 노트 가져오기
export async function getWrongAnswers(userId: string, eraId?: string): Promise<WrongAnswer[]> {
  let query = supabase
    .from('wrong_answers')
    .select('*')
    .eq('user_id', userId)
    .eq('mastered', false);

  if (eraId) {
    query = query.eq('era_id', eraId);
  }

  const { data, error } = await query.order('last_wrong_at', { ascending: false });

  if (error) {
    console.error('Error fetching wrong answers:', error);
    return [];
  }

  return data || [];
}

// 문제를 마스터했다고 표시
export async function markAsMastered(userId: string, quizId: string): Promise<boolean> {
  const { error } = await supabase
    .from('wrong_answers')
    .update({ mastered: true })
    .eq('user_id', userId)
    .eq('quiz_id', quizId);

  if (error) {
    console.error('Error marking as mastered:', error);
    return false;
  }

  return true;
}

// 레벨별 정답률 통계
export async function getAccuracyByLevel(userId: string, eraId: string) {
  const { data, error } = await supabase
    .from('quiz_results')
    .select('level, is_correct')
    .eq('user_id', userId)
    .eq('era_id', eraId);

  if (error) {
    console.error('Error fetching accuracy by level:', error);
    return null;
  }

  // 레벨별로 그룹화
  const stats: Record<number, { total: number; correct: number; accuracy: number }> = {};
  
  for (let level = 1; level <= 5; level++) {
    const levelResults = data.filter(r => r.level === level);
    const total = levelResults.length;
    const correct = levelResults.filter(r => r.is_correct).length;
    const accuracy = total > 0 ? (correct / total) * 100 : 0;
    
    stats[level] = { total, correct, accuracy };
  }

  return stats;
}

// 강점/약점 시대 분석
export async function getStrengthWeakness(userId: string) {
  const eras = ['prehistoric', 'ancient', 'unified', 'goryeo', 'joseon', 'modern', 'contemporary'];
  const results: Array<{ era: string; accuracy: number }> = [];

  for (const era of eras) {
    const stats = await getQuizStatsByEra(userId, era);
    if (stats && stats.total > 0) {
      results.push({
        era,
        accuracy: stats.accuracy
      });
    }
  }

  results.sort((a, b) => b.accuracy - a.accuracy);

  return {
    strengths: results.slice(0, 3), // 상위 3개
    weaknesses: results.slice(-3).reverse() // 하위 3개
  };
}
