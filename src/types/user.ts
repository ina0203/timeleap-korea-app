import { EraId, LearningLevel } from './era';

// 사용자 정보
export interface User {
  id: string;
  name: string;
  grade: number; // 학년 (3~12)
  avatar: string;
  joinedAt: Date;
  lastLoginAt: Date;
  preferences: UserPreferences;
}

// 사용자 설정
export interface UserPreferences {
  soundEnabled: boolean;
  musicEnabled: boolean;
  difficulty: 'auto' | 'easy' | 'medium' | 'hard';
  dailyGoal: number; // 하루 목표 퀴즈 수
  reminderTime?: string; // HH:MM 형식
}

// 사용자 진행 상황
export interface UserProgress {
  userId: string;
  currentEra: EraId;
  currentLevel: LearningLevel;
  totalPoints: number;
  totalQuizzes: number;
  correctAnswers: number;
  streak: number; // 연속 학습 일수
  eraProgress: Record<EraId, EraProgress>;
  achievements: Achievement[];
  artifacts: string[]; // 수집한 유물 ID 목록
}

// 시대별 진행 상황
export interface EraProgress {
  era: EraId;
  unlocked: boolean;
  currentLevel: LearningLevel;
  completion: number; // 0-100
  quizzesCompleted: number;
  correctRate: number; // 0-100
  lastStudiedAt?: Date;
  masteredConcepts: string[];
}

// 업적/뱃지
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

// 학습 통계
export interface LearningStats {
  userId: string;
  totalStudyTime: number; // 분
  averageAccuracy: number; // 0-100
  strongEras: EraId[];
  weakEras: EraId[];
  recommendedTopics: string[];
  weeklyProgress: DailyProgress[];
  monthlyProgress: MonthlyProgress[];
}

// 일일 학습 기록
export interface DailyProgress {
  date: Date;
  quizzesCompleted: number;
  correctAnswers: number;
  studyTime: number; // 분
  points: number;
}

// 월별 학습 기록
export interface MonthlyProgress {
  year: number;
  month: number;
  totalQuizzes: number;
  totalCorrect: number;
  studyDays: number;
  totalPoints: number;
}
