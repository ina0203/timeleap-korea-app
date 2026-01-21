'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { ERAS_DATA } from '@/data/eras';
import Link from 'next/link';

export function WeakAreaCard() {
  // 임시 데이터 (실제로는 DB에서)
  const weakAreas = [
    { eraId: 'contemporary', accuracy: 48, totalQuestions: 12, wrongCount: 6 },
    { eraId: 'modern', accuracy: 55, totalQuestions: 15, wrongCount: 7 },
    { eraId: 'joseon', accuracy: 65, totalQuestions: 18, wrongCount: 6 }
  ];

  return (
    <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-900">
          <AlertCircle className="w-5 h-5" />
          집중 학습 필요
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {weakAreas.map((area, index) => {
            const era = ERAS_DATA[area.eraId as keyof typeof ERAS_DATA];
            
            return (
              <motion.div
                key={area.eraId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 bg-white rounded-lg border border-orange-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{era.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{era.nameKr}</div>
                    <div className="text-sm text-gray-600">
                      {area.wrongCount}개 문제 틀림
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">
                      {area.accuracy}%
                    </div>
                  </div>
                </div>
                
                {/* 진행률 바 */}
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-400 to-red-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${area.accuracy}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>

                <Link href={`/quiz/${area.eraId}`}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-orange-700 border-orange-300 hover:bg-orange-50"
                  >
                    복습하러 가기
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* 추천 메시지 */}
        <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
          <p className="text-sm text-amber-900 font-medium">
            💡 하루 10분씩 복습하면 정답률이 빠르게 올라가요!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
