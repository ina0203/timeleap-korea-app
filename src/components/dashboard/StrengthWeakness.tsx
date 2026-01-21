'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';
import { ERAS_DATA } from '@/data/eras';
import { EraId } from '@/types/era';

interface StrengthWeaknessProps {
  userId: string;
}

interface EraStats {
  eraId: string;
  accuracy: number;
  totalQuestions: number;
  correctAnswers: number;
}

export function StrengthWeakness({ userId }: StrengthWeaknessProps) {
  const [stats, setStats] = useState<EraStats[]>([]);

  useEffect(() => {
    // TODO: DB에서 시대별 통계 가져오기
    // 임시 데이터
    const mockStats: EraStats[] = [
      { eraId: 'prehistoric', accuracy: 92, totalQuestions: 25, correctAnswers: 23 },
      { eraId: 'ancient', accuracy: 88, totalQuestions: 20, correctAnswers: 17 },
      { eraId: 'unified', accuracy: 75, totalQuestions: 12, correctAnswers: 9 },
      { eraId: 'goryeo', accuracy: 70, totalQuestions: 10, correctAnswers: 7 },
      { eraId: 'joseon', accuracy: 65, totalQuestions: 15, correctAnswers: 10 }
    ];
    setStats(mockStats.sort((a, b) => b.accuracy - a.accuracy));
  }, [userId]);

  const strengths = stats.slice(0, 3);
  const weaknesses = stats.slice(-3).reverse();

  const Section = ({
    title,
    icon: Icon,
    data,
    type
  }: {
    title: string;
    icon: any;
    data: EraStats[];
    type: 'strength' | 'weakness';
  }) => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${type === 'strength' ? 'text-green-600' : 'text-orange-600'}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.length === 0 ? (
            <p className="text-center text-gray-500 py-4">
              아직 데이터가 충분하지 않아요
            </p>
          ) : (
            data.map((stat, index) => {
              const era = ERAS_DATA[stat.eraId as EraId];
              return (
                <motion.div
                  key={stat.eraId}
                  initial={{ opacity: 0, x: type === 'strength' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl text-2xl">
                    {era.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">
                        {era.nameKr}
                      </span>
                      <span className={`font-bold ${type === 'strength' ? 'text-green-600' : 'text-orange-600'
                        }`}>
                        {stat.accuracy.toFixed(0)}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 rounded-full ${type === 'strength'
                            ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                            : 'bg-gradient-to-r from-orange-400 to-red-500'
                          }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.accuracy}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {stat.correctAnswers}/{stat.totalQuestions} 문제
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

  return (
    <div className="space-y-6">
      {/* 전체 정답률 */}
      <Card className="border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">전체 정답률</p>
              <p className="text-4xl font-bold text-primary-600">
                {stats.length > 0
                  ? (stats.reduce((sum, s) => sum + s.accuracy, 0) / stats.length).toFixed(1)
                  : 0}%
              </p>
            </div>
            <Target className="w-16 h-16 text-primary-400" />
          </div>
          <p className="text-sm text-gray-600 mt-4">
            총 {stats.reduce((sum, s) => sum + s.totalQuestions, 0)}문제 중{' '}
            {stats.reduce((sum, s) => sum + s.correctAnswers, 0)}문제 정답
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 강점 시대 */}
        <Section
          title="🌟 강점 시대"
          icon={TrendingUp}
          data={strengths}
          type="strength"
        />

        {/* 약점 시대 */}
        <Section
          title="💪 복습 필요 시대"
          icon={TrendingDown}
          data={weaknesses}
          type="weakness"
        />
      </div>

      {/* 추천 학습 */}
      {weaknesses.length > 0 && (
        <Card className="border-2 border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
              💡 추천 학습
            </h3>
            <p className="text-amber-800">
              <strong>{ERAS_DATA[weaknesses[0].eraId as EraId].nameKr}</strong> 시대를 집중적으로 복습하면
              전체 점수가 크게 올라갈 거예요! 오답 노트를 확인해보세요.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
