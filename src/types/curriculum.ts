
import { EraId } from './era';

export type SchoolLevel = 'elementary' | 'middle' | 'high';

export interface CurriculumContent {
    level: SchoolLevel;
    eraId: EraId;
    title: string;
    summary: string;
    keyTopics: string[];
    activities: string[];
    learningGoal: string;
    lecture?: string; // 대화형/설명형 강의 텍스트
    videoUrl?: string; // 강의 영상 URL (나중에 추가)
}

export const SCHOOL_LEVELS: Record<SchoolLevel, string> = {
    elementary: '초등학교',
    middle: '중학교',
    high: '고등학교'
};
