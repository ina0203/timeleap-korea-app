'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Clock, Trophy, Target, TrendingUp } from 'lucide-react';
import { ERAS_DATA } from '@/data/eras';
import { EraId } from '@/types/era';
import { formatDate } from '@/lib/utils';

interface Activity {
  id: string;
  type: 'quiz_completed' | 'level_up' | 'era_unlocked' | 'achievement';
  eraId?: string;
  level?: number;
  score?: number;
  timestamp: string;
}

interface RecentActivityProps {
  userId: string;
}

export function RecentActivity({ userId }: RecentActivityProps) {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // TODO: DB에서 최근 활동 가져오기
    // 임시 데이터
    const mockActivities: Activity[] = [
      {
        id: '1',
        type: 'quiz_completed',
        eraId: 'prehistoric',
        level: 1,
        score: 90,
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString()
      },
      {
        id: '2',
        type: 'level_up',
        eraId: 'prehistoric',
        level: 2,
        timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString()
      },
      {
        id: '3',
        type: 'era_unlocked',
        eraId: 'ancient',
        timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString()
      },
      {
        id: '4',
        type: 'achievement',
        timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString()
      },
      {
        id: '5',
        type: 'quiz_completed',
        eraId: 'ancient',
        level: 1,
        score: 85,
        timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString()
      }
    ];
    setActivities(mockActivities);
  }, [userId]);

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'quiz_completed': return Target;
      case 'level_up': return TrendingUp;
      case 'era_unlocked': return Trophy;
      case 'achievement': return Trophy;
    }
  };

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'quiz_completed': return 'from-blue-500 to-cyan-600';
      case 'level_up': return 'from-green-500 to-emerald-600';
      case 'era_unlocked': return 'from-purple-500 to-pink-600';
      case 'achievement': return 'from-amber-500 to-orange-600';
    }
  };

  const getActivityText = (activity: Activity) => {
    const era = activity.eraId ? ERAS_DATA[activity.eraId as EraId] : null;

    switch (activity.type) {
      case 'quiz_completed':
        return `${era?.nameKr} Level ${activity.level} 퀴즈 완료 (${activity.score}점)`;
      case 'level_up':
        return `${era?.nameKr} Level ${activity.level}로 레벨업!`;
      case 'era_unlocked':
        return `${era?.nameKr} 잠금 해제!`;
      case 'achievement':
        return '새로운 업적 달성!';
    }
  };

  const getRelativeTime = (timestamp: string) => {
    const now = Date.now();
    const time = new Date(timestamp).getTime();
    const diff = now - time;

    const minutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}일 전`;
    if (hours > 0) return `${hours}시간 전`;
    if (minutes > 0) return `${minutes}분 전`;
    return '방금 전';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          최근 활동
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              아직 활동 내역이 없어요. 퀴즈를 풀어보세요!
            </p>
          ) : (
            activities.map((activity, index) => {
              const Icon = getActivityIcon(activity.type);
              const color = getActivityColor(activity.type);

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {getActivityText(activity)}
                    </p>
                    <p className="text-sm text-gray-600">
                      {getRelativeTime(activity.timestamp)}
                    </p>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
}
