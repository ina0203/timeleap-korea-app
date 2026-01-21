'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Trophy, Star, Target, Flame, BookOpen, Award, Check } from 'lucide-react';

interface AchievementsListProps {
  userId: string;
  totalPoints: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  requirement: number;
  current: number;
  unlocked: boolean;
}

export function AchievementsList({ userId, totalPoints }: AchievementsListProps) {
  // 업적 정의
  const achievements: Achievement[] = [
    {
      id: 'first-quiz',
      title: '첫 걸음',
      description: '첫 퀴즈 완료하기',
      icon: Star,
      color: 'from-yellow-400 to-amber-500',
      requirement: 1,
      current: 1,
      unlocked: true
    },
    {
      id: 'points-100',
      title: '백점돌파',
      description: '100점 달성하기',
      icon: Target,
      color: 'from-blue-400 to-cyan-500',
      requirement: 100,
      current: totalPoints,
      unlocked: totalPoints >= 100
    },
    {
      id: 'points-500',
      title: '지식의 탑',
      description: '500점 달성하기',
      icon: BookOpen,
      color: 'from-purple-400 to-pink-500',
      requirement: 500,
      current: totalPoints,
      unlocked: totalPoints >= 500
    },
    {
      id: 'points-1000',
      title: '역사 마스터',
      description: '1000점 달성하기',
      icon: Trophy,
      color: 'from-amber-400 to-orange-500',
      requirement: 1000,
      current: totalPoints,
      unlocked: totalPoints >= 1000
    },
    {
      id: 'streak-3',
      title: '끈기의 시작',
      description: '3일 연속 학습하기',
      icon: Flame,
      color: 'from-orange-400 to-red-500',
      requirement: 3,
      current: 6, // 임시값
      unlocked: true
    },
    {
      id: 'streak-7',
      title: '일주일 챌린지',
      description: '7일 연속 학습하기',
      icon: Flame,
      color: 'from-red-400 to-rose-500',
      requirement: 7,
      current: 6,
      unlocked: false
    },
    {
      id: 'era-1',
      title: '선사시대 정복',
      description: '선사시대 모든 레벨 완료',
      icon: Award,
      color: 'from-green-400 to-emerald-500',
      requirement: 1,
      current: 1,
      unlocked: true
    },
    {
      id: 'era-3',
      title: '역사 탐험가',
      description: '3개 시대 완료하기',
      icon: Award,
      color: 'from-teal-400 to-cyan-500',
      requirement: 3,
      current: 1,
      unlocked: false
    },
    {
      id: 'era-all',
      title: '시간 여행자',
      description: '모든 시대 완료하기',
      icon: Trophy,
      color: 'from-violet-400 to-purple-500',
      requirement: 7,
      current: 1,
      unlocked: false
    },
    {
      id: 'perfect-quiz',
      title: '완벽주의자',
      description: '퀴즈 100% 정답',
      icon: Star,
      color: 'from-pink-400 to-rose-500',
      requirement: 1,
      current: 0,
      unlocked: false
    }
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                🏆 업적 달성 현황
              </h2>
              <p className="text-gray-600">
                {unlockedCount}/{totalCount} 개 업적 달성
              </p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-amber-600">
                {((unlockedCount / totalCount) * 100).toFixed(0)}%
              </div>
            </div>
          </div>
          
          {/* 진행률 바 */}
          <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
              initial={{ width: 0 }}
              animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </CardContent>
      </Card>

      {/* 업적 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => {
          const progress = Math.min((achievement.current / achievement.requirement) * 100, 100);
          const Icon = achievement.icon;

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className={`
                border-2 transition-all hover:shadow-lg
                ${achievement.unlocked
                  ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-white'
                  : 'border-gray-200 bg-gray-50'
                }
              `}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* 아이콘 */}
                    <div className={`
                      relative p-3 rounded-xl
                      ${achievement.unlocked
                        ? `bg-gradient-to-br ${achievement.color}`
                        : 'bg-gray-300'
                      }
                    `}>
                      <Icon className="w-6 h-6 text-white" />
                      {achievement.unlocked && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <Check className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* 내용 */}
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-1 ${
                        achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {achievement.description}
                      </p>

                      {/* 진행률 */}
                      {!achievement.unlocked && (
                        <>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-gray-600">
                              {achievement.current}/{achievement.requirement}
                            </span>
                            <span className="text-xs font-bold text-gray-700">
                              {progress.toFixed(0)}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-gray-400 to-gray-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.5, delay: index * 0.05 }}
                            />
                          </div>
                        </>
                      )}

                      {achievement.unlocked && (
                        <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                          <Check className="w-4 h-4" />
                          달성 완료!
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
