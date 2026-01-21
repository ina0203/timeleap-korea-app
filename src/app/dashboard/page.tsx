'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Calendar, BookOpen, Award, Clock, Flame } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useUserStore } from '@/lib/store/userStore';
import { StatsOverview } from '@/components/dashboard/StatsOverview';
import { ProgressChart } from '@/components/dashboard/ProgressChart';
import { StrengthWeakness } from '@/components/dashboard/StrengthWeakness';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { LearningCalendar } from '@/components/dashboard/LearningCalendar';
import { AchievementsList } from '@/components/dashboard/AchievementsList';
import { WrongAnswersSection } from '@/components/dashboard/WrongAnswersSection';

export default function DashboardPage() {
  const { user, progress } = useUserStore();

  const totalPoints = progress?.totalPoints || 0;
  const streak = progress?.streak || 0;
  const eraProgress = progress?.eraProgress ? Object.values(progress.eraProgress) : [];
  const [activeTab, setActiveTab] = useState<'overview' | 'analysis' | 'achievements' | 'wrong-answers'>('overview');

  // 전체 완료율 계산
  const totalCompletion = eraProgress.reduce((sum, era) => sum + era.completion, 0) / eraProgress.length;

  // 잠금 해제된 시대 수
  const unlockedEras = eraProgress.filter(era => era.unlocked).length;

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 헤더 */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                안녕하세요, {user.name}님! 👋
              </h1>
              <p className="text-gray-600">
                지금까지 {totalPoints.toLocaleString()}점을 획득했어요!
              </p>
            </div>

            {/* 연속 학습일 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-2xl shadow-lg"
            >
              <Flame className="w-8 h-8" />
              <div>
                <p className="text-sm font-medium opacity-90">연속 학습</p>
                <p className="text-3xl font-bold">{streak}일</p>
              </div>
            </motion.div>
          </div>

          {/* 탭 네비게이션 */}
          <div className="flex gap-2 mt-6 border-b">
            {[
              { id: 'overview', label: '전체 현황', icon: BookOpen },
              { id: 'analysis', label: '학습 분석', icon: TrendingUp },
              { id: 'achievements', label: '업적', icon: Award },
              { id: 'wrong-answers', label: '오답 노트', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex items-center gap-2 px-6 py-3 font-semibold transition-all
                  ${activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 전체 현황 탭 */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 상단 통계 카드 */}
            <StatsOverview
              totalPoints={totalPoints}
              streak={streak}
              totalCompletion={totalCompletion}
              unlockedEras={unlockedEras}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 진행률 차트 */}
              <ProgressChart eraProgress={eraProgress} />

              {/* 학습 캘린더 */}
              <LearningCalendar userId={user.id} />
            </div>

            {/* 최근 활동 */}
            <RecentActivity userId={user.id} />
          </div>
        )}

        {/* 학습 분석 탭 */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <StrengthWeakness userId={user.id} />
          </div>
        )}

        {/* 업적 탭 */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <AchievementsList userId={user.id} totalPoints={totalPoints} />
          </div>
        )}

        {/* 오답 노트 탭 */}
        {activeTab === 'wrong-answers' && (
          <div className="space-y-6">
            <WrongAnswersSection userId={user.id} />
          </div>
        )}
      </div>
    </div>
  );
}
