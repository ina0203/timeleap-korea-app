import { supabase, type Profile, type UserProgress, type EraProgress } from './supabase';

// 프로필 가져오기
export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
}

// 프로필 업데이트
export async function updateProfile(
  userId: string,
  updates: Partial<Profile>
): Promise<boolean> {
  const { error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId);

  if (error) {
    console.error('Error updating profile:', error);
    return false;
  }

  return true;
}

// 사용자 진행 상황 가져오기
export async function getUserProgress(userId: string): Promise<UserProgress | null> {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error('Error fetching user progress:', error);
    return null;
  }

  return data;
}

// 포인트 추가
export async function addPoints(userId: string, points: number): Promise<boolean> {
  // 현재 포인트 가져오기
  const progress = await getUserProgress(userId);
  if (!progress) return false;

  const newPoints = progress.total_points + points;

  const { error } = await supabase
    .from('user_progress')
    .update({ total_points: newPoints })
    .eq('user_id', userId);

  if (error) {
    console.error('Error adding points:', error);
    return false;
  }

  return true;
}

// 연속 학습일 업데이트
export async function updateStreak(userId: string): Promise<number> {
  const { data, error } = await supabase.rpc('update_streak', {
    p_user_id: userId
  });

  if (error) {
    console.error('Error updating streak:', error);
    return 0;
  }

  return data;
}

// 시대별 진행 상황 가져오기
export async function getEraProgress(userId: string, eraId?: string): Promise<EraProgress[]> {
  let query = supabase
    .from('era_progress')
    .select('*')
    .eq('user_id', userId);

  if (eraId) {
    query = query.eq('era_id', eraId);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching era progress:', error);
    return [];
  }

  return data || [];
}

// 시대 진행 상황 업데이트
export async function updateEraProgress(
  userId: string,
  eraId: string,
  updates: {
    current_level?: number;
    completion?: number;
    unlocked?: boolean;
  }
): Promise<boolean> {
  const { error } = await supabase
    .from('era_progress')
    .update({
      ...updates,
      last_studied_at: new Date().toISOString()
    })
    .eq('user_id', userId)
    .eq('era_id', eraId);

  if (error) {
    console.error('Error updating era progress:', error);
    return false;
  }

  return true;
}

// 다음 시대 잠금 해제
export async function unlockNextEra(userId: string, currentEraId: string): Promise<boolean> {
  const eraOrder = ['prehistoric', 'ancient', 'unified', 'goryeo', 'joseon', 'modern', 'contemporary'];
  const currentIndex = eraOrder.indexOf(currentEraId);
  
  if (currentIndex === -1 || currentIndex === eraOrder.length - 1) {
    return false; // 마지막 시대거나 잘못된 ID
  }

  const nextEraId = eraOrder[currentIndex + 1];

  const { error } = await supabase
    .from('era_progress')
    .update({ unlocked: true })
    .eq('user_id', userId)
    .eq('era_id', nextEraId);

  if (error) {
    console.error('Error unlocking next era:', error);
    return false;
  }

  return true;
}
