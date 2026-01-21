'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ERAS_DATA } from '@/data/eras';
import type { EraProgress } from '@/types/user';

interface ProgressChartProps {
  eraProgress: EraProgress[];
}

export function ProgressChart({ eraProgress }: ProgressChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>시대별 학습 진행률</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {eraProgress.map((progress, index) => {
            const era = ERAS_DATA[progress.era];
            const completion = progress.completion || 0;

            return (
              <motion.div
                key={progress.era}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{era.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900">
                        {era.nameKr}
                      </span>
                      <span className="text-sm font-bold text-gray-700">
                        {completion.toFixed(0)}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${era.color}, ${era.color}dd)`
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${completion}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* 레벨 표시 */}
                <div className="flex items-center gap-2 ml-11">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                        ${progress.currentLevel >= level
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-200 text-gray-400'
                        }
                      `}
                    >
                      {level}
                    </div>
                  ))}
                  {!progress.unlocked && (
                    <span className="text-xs text-gray-500 ml-2">🔒 잠금</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
