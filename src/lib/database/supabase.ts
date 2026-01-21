import { createClient } from '@supabase/supabase-js';

// Supabase 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 타입 정의
export type Profile = {
  id: string;
  email: string;
  name: string;
  grade: number;
  created_at: string;
  updated_at: string;
};

export type UserProgress = {
  id: string;
  user_id: string;
  total_points: number;
  streak: number;
  last_study_date: string | null;
  created_at: string;
  updated_at: string;
};

export type EraProgress = {
  id: string;
  user_id: string;
  era_id: string;
  current_level: number;
  completion: number;
  unlocked: boolean;
  last_studied_at: string | null;
  created_at: string;
  updated_at: string;
};

export type QuizResult = {
  id: string;
  user_id: string;
  era_id: string;
  level: number;
  quiz_id: string;
  selected_answer: number;
  is_correct: boolean;
  time_spent: number | null;
  created_at: string;
};

export type LearningSession = {
  id: string;
  user_id: string;
  era_id: string;
  level: number;
  total_questions: number;
  correct_answers: number;
  total_points: number;
  duration: number;
  passed: boolean;
  created_at: string;
};

export type CollectedArtifact = {
  id: string;
  user_id: string;
  artifact_id: string;
  era_id: string;
  collected_at: string;
};

export type Achievement = {
  id: string;
  user_id: string;
  achievement_id: string;
  unlocked_at: string;
};

export type WrongAnswer = {
  id: string;
  user_id: string;
  quiz_id: string;
  era_id: string;
  level: number;
  attempt_count: number;
  last_wrong_at: string;
  mastered: boolean;
};
