import { create } from 'zustand';
import { User, UserProgress } from '@/types/user';
import { EraId, LearningLevel } from '@/types/era';

interface UserStore {
  user: User | null;
  progress: UserProgress | null;
  
  // Actions
  setUser: (user: User) => void;
  setProgress: (progress: UserProgress) => void;
  updateEraProgress: (era: EraId, level: LearningLevel, completion: number) => void;
  addPoints: (points: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  collectArtifact: (artifactId: string) => void;
  unlockAchievement: (achievementId: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()((set, get) => ({
  user: null,
  progress: null,

  setUser: (user) => set({ user }),
  
  setProgress: (progress) => set({ progress }),

  updateEraProgress: (era, level, completion) =>
    set((state) => {
      if (!state.progress) return state;
      
      return {
        progress: {
          ...state.progress,
          eraProgress: {
            ...state.progress.eraProgress,
            [era]: {
              ...state.progress.eraProgress[era],
              currentLevel: level,
              completion,
              lastStudiedAt: new Date(),
            },
          },
        },
      };
    }),

  addPoints: (points) =>
    set((state) => {
      if (!state.progress) return state;
      
      return {
        progress: {
          ...state.progress,
          totalPoints: state.progress.totalPoints + points,
        },
      };
    }),

  incrementStreak: () =>
    set((state) => {
      if (!state.progress) return state;
      
      return {
        progress: {
          ...state.progress,
          streak: state.progress.streak + 1,
        },
      };
    }),

  resetStreak: () =>
    set((state) => {
      if (!state.progress) return state;
      
      return {
        progress: {
          ...state.progress,
          streak: 0,
        },
      };
    }),

  collectArtifact: (artifactId) =>
    set((state) => {
      if (!state.progress) return state;
      
      if (state.progress.artifacts.includes(artifactId)) {
        return state;
      }
      
      return {
        progress: {
          ...state.progress,
          artifacts: [...state.progress.artifacts, artifactId],
        },
      };
    }),

  unlockAchievement: (achievementId) =>
    set((state) => {
      if (!state.progress) return state;
      
      // 이미 획득한 업적인지 확인
      if (state.progress.achievements.some(a => a.id === achievementId)) {
        return state;
      }
      
      // 새 업적 추가 (실제로는 서버에서 업적 정보를 가져와야 함)
      const newAchievement = {
        id: achievementId,
        name: '업적 이름',
        description: '업적 설명',
        icon: '🏆',
        unlockedAt: new Date(),
        rarity: 'common' as const,
      };
      
      return {
        progress: {
          ...state.progress,
          achievements: [...state.progress.achievements, newAchievement],
        },
      };
    }),

  logout: () => set({ user: null, progress: null }),
}));
