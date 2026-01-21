// 시대 구분
export type EraId = 
  | 'prehistoric' 
  | 'ancient' 
  | 'unified' 
  | 'goryeo' 
  | 'joseon' 
  | 'modern' 
  | 'contemporary';

// 학습 레벨
export type LearningLevel = 1 | 2 | 3 | 4 | 5;

export const LEVEL_NAMES: Record<LearningLevel, string> = {
  1: '이야기꾼',
  2: '탐험가',
  3: '분석가',
  4: '전략가',
  5: '마스터'
};

export const LEVEL_DESCRIPTIONS: Record<LearningLevel, string> = {
  1: '역사 이야기를 재미있게 듣는 단계',
  2: '유물과 유적을 통해 역사를 탐험하는 단계',
  3: '사건의 원인과 결과를 분석하는 단계',
  4: '사료를 해석하고 전략적으로 사고하는 단계',
  5: '수능 실전 문제를 완벽하게 푸는 단계'
};

// 시대 정보
export interface Era {
  id: EraId;
  name: string;
  nameKr: string;
  period: string;
  color: string;
  icon: string;
  description: string;
  keyPoints: string[];
  image: string;
  unlocked: boolean;
  progress: number; // 0-100
}

// 역사 인물
export interface HistoricalCharacter {
  id: string;
  name: string;
  era: EraId;
  role: string;
  description: string;
  avatar: string;
  greeting: string;
}

// 유물/유적
export interface Artifact {
  id: string;
  name: string;
  era: EraId;
  type: 'artifact' | 'architecture' | 'document';
  description: string;
  significance: string;
  image: string;
  collected: boolean;
}
