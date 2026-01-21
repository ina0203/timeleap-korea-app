import { Quiz } from '@/types/quiz';
import { EraId, LearningLevel } from '@/types/era';
import { prehistoricQuizzes } from './prehistoric';
import { ancientQuizzes } from './ancient';
import { unifiedQuizzes } from './unified';
import { goryeoQuizzes } from './goryeo';
import { joseonQuizzes } from './joseon';
import { modernQuizzes } from './modern';
import { contemporaryQuizzes } from './contemporary';

// 모든 퀴즈를 시대별로 정리
export const QUIZZES_BY_ERA: Record<EraId, Quiz[]> = {
  prehistoric: prehistoricQuizzes,
  ancient: ancientQuizzes,
  unified: unifiedQuizzes,
  goryeo: goryeoQuizzes,
  joseon: joseonQuizzes,
  modern: modernQuizzes,
  contemporary: contemporaryQuizzes
};

// 특정 시대와 레벨의 퀴즈 가져오기
export function getQuizzesByEraAndLevel(
  era: EraId,
  level: LearningLevel
): Quiz[] {
  const eraQuizzes = QUIZZES_BY_ERA[era] || [];
  return eraQuizzes.filter(quiz => quiz.level === level);
}

// 특정 퀴즈 ID로 퀴즈 찾기
export function getQuizById(quizId: string): Quiz | undefined {
  for (const era in QUIZZES_BY_ERA) {
    const quiz = QUIZZES_BY_ERA[era as EraId].find(q => q.id === quizId);
    if (quiz) return quiz;
  }
  return undefined;
}

// 랜덤 퀴즈 가져오기
export function getRandomQuiz(era: EraId, level: LearningLevel): Quiz | null {
  const quizzes = getQuizzesByEraAndLevel(era, level);
  if (quizzes.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * quizzes.length);
  return quizzes[randomIndex];
}

// 특정 시대의 전체 퀴즈 수
export function getTotalQuizCount(era: EraId): number {
  return QUIZZES_BY_ERA[era]?.length || 0;
}

// 레벨별 퀴즈 수
export function getQuizCountByLevel(era: EraId, level: LearningLevel): number {
  return getQuizzesByEraAndLevel(era, level).length;
}
// 특정 시험 유형의 퀴즈 가져오기
export function getExamQuizzes(
  era: EraId,
  examType: 'midterm' | 'final' | 'csat' | 'mock'
): Quiz[] {
  const eraQuizzes = QUIZZES_BY_ERA[era] || [];
  return eraQuizzes.filter(quiz => quiz.examType === examType);
}
