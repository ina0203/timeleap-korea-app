'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizProgressProps {
  total: number;
  current: number;
  correctCount: number;
  wrongCount: number;
}

export function QuizProgress({ 
  total, 
  current, 
  correctCount, 
  wrongCount 
}: QuizProgressProps) {
  const progress = (current / total) * 100;
  const accuracy = current > 0 ? (correctCount / current) * 100 : 0;

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* 상단 통계 */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">진행 상황</p>
            <p className="text-2xl font-bold text-gray-900">
              {current} / {total}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* 정답 수 */}
            <div className="text-center">
              <div className="flex items-center gap-1 mb-1">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-2xl font-bold text-green-600">
                  {correctCount}
                </span>
              </div>
              <p className="text-xs text-gray-600">정답</p>
            </div>
            
            {/* 오답 수 */}
            <div className="text-center">
              <div className="flex items-center gap-1 mb-1">
                <X className="w-4 h-4 text-red-600" />
                <span className="text-2xl font-bold text-red-600">
                  {wrongCount}
                </span>
              </div>
              <p className="text-xs text-gray-600">오답</p>
            </div>
            
            {/* 정답률 */}
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">
                {accuracy.toFixed(0)}%
              </p>
              <p className="text-xs text-gray-600">정답률</p>
            </div>
          </div>
        </div>

        {/* 진행률 바 */}
        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        {/* 문제별 상태 표시 */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          {Array.from({ length: total }, (_, index) => {
            const questionNumber = index + 1;
            const isAnswered = questionNumber <= current;
            const isCorrect = questionNumber <= correctCount;
            const isWrong = isAnswered && !isCorrect && questionNumber <= (correctCount + wrongCount);
            const isCurrent = questionNumber === current + 1;

            return (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all',
                  !isAnswered && 'border-gray-300 bg-gray-50 text-gray-400',
                  isCorrect && 'border-green-500 bg-green-500 text-white',
                  isWrong && 'border-red-500 bg-red-500 text-white',
                  isCurrent && 'border-primary-500 bg-primary-500 text-white ring-4 ring-primary-100'
                )}
              >
                {isCorrect ? <Check className="w-4 h-4" /> :
                 isWrong ? <X className="w-4 h-4" /> :
                 isCurrent ? <Circle className="w-4 h-4" /> :
                 questionNumber}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
