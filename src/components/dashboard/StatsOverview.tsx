'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Unlock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

interface StatsOverviewProps {
  totalPoints: number;
  streak: number;
  totalCompletion: number;
  unlockedEras: number;
}

export function StatsOverview({
  totalPoints,
  streak,
  totalCompletion,
  unlockedEras
}: StatsOverviewProps) {
  const stats = [
    {
      icon: Trophy,
      label: '총 포인트',
      value: totalPoints.toLocaleString(),
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Target,
      label: '전체 진행률',
      value: `${totalCompletion.toFixed(1)}%`,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Unlock,
      label: '잠금 해제',
      value: `${unlockedEras}/7 시대`,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      label: '연속 학습',
      value: `${streak}일`,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
