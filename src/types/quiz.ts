import { EraId, LearningLevel } from './era';

// 퀴즈 난이도
export type QuizDifficulty = 'easy' | 'medium' | 'hard' | 'expert' | 'suneung';
export type ExamType = 'midterm' | 'final' | 'csat' | 'mock'; // 중간, 기말, 수능, 모의

// 문제 유형
export type QuestionType =
  | 'multiple-choice'    // 객관식
  | 'true-false'         // O/X
  | 'matching'           // 연결하기
  | 'ordering'           // 순서 배열
  | 'fill-blank';        // 빈칸 채우기

// 퀴즈 문제
export interface Quiz {
  id: string;
  era: EraId;
  level: LearningLevel;
  difficulty: QuizDifficulty;
  type: QuestionType;
  question: string;
  options?: string[];      // 선택지 (객관식)
  correctAnswer: string | string[] | number;
  explanation: string;
  hint?: string;
  relatedConcepts: string[];
  points: number;
  imageUrl?: string;
  audioUrl?: string;
  source?: string; // 출처 (예: 2024학년도 수능 한국사 1번)
  material?: string; // 사료/자료 텍스트 (박스 안에 들어갈 내용)
  examType?: ExamType;
}

// 퀴즈 결과
export interface QuizResult {
  quizId: string;
  userId: string;
  isCorrect: boolean;
  selectedAnswer: string | number;
  timeSpent: number; // 초
  attempts: number;
  timestamp: Date;
}

// 학습 세션
export interface LearningSession {
  id: string;
  userId: string;
  era: EraId;
  level: LearningLevel;
  startTime: Date;
  endTime?: Date;
  quizzesCompleted: number;
  correctAnswers: number;
  totalPoints: number;
  achievements: string[];
}

// 오답 노트
export interface WrongAnswer {
  id: string;
  userId: string;
  quiz: Quiz;
  incorrectAnswer: string;
  attemptedAt: Date;
  reviewedAt?: Date;
  mastered: boolean;
}
