'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ChevronRight } from 'lucide-react';
import { Era } from '@/types/era';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CurriculumTabs } from './CurriculumTabs';
import { getCurriculumByEra } from '@/data/curriculum';

interface EraCardProps {
  era: Era;
  index: number;
  onSelect: (eraId: string) => void;
}

export function EraCard({ era, index, onSelect }: EraCardProps) {
  const isLocked = !era.unlocked;
  const [showCurriculum, setShowCurriculum] = React.useState(false);

  const curriculumData = getCurriculumByEra(era.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={!isLocked ? { scale: 1.02 } : {}}
      className="w-full"
    >
      <Card
        hover={!isLocked}
        className={cn(
          'relative overflow-hidden border-2 transition-all duration-300',
          isLocked
            ? 'opacity-60 border-gray-300 bg-gray-50'
            : 'border-transparent hover:border-primary-500'
        )}
        onClick={() => !isLocked && onSelect(era.id)}
      >
        {/* 배경 그라디언트 */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${era.color}22 0%, ${era.color}44 100%)`
          }}
        />

        {/* 잠금 오버레이 */}
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10">
            <div className="text-center">
              <Lock className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p className="text-sm font-medium text-gray-600">
                이전 시대를 완료하세요
              </p>
            </div>
          </div>
        )}

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* 아이콘과 시대명 */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl" role="img" aria-label={era.nameKr}>
                  {era.icon}
                </span>
                <div>
                  <CardTitle className={cn(
                    'font-display',
                    isLocked && 'text-gray-500'
                  )}>
                    {era.nameKr}
                  </CardTitle>
                  <CardDescription className="text-xs mt-1">
                    {era.period}
                  </CardDescription>
                </div>
              </div>
            </div>

            {/* 진행률 배지 */}
            {!isLocked && era.progress > 0 && (
              <div className="flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                {era.progress}%
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent>
          {/* 시대 설명 */}
          <p className={cn(
            'text-sm mb-4 line-clamp-2',
            isLocked ? 'text-gray-400' : 'text-gray-700'
          )}>
            {era.description}
          </p>

          {/* 핵심 포인트 */}
          {!isLocked && (
            <div className="space-y-2 mb-4">
              {era.keyPoints.slice(0, 3).map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-gray-600"
                >
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span className="flex-1">{point}</span>
                </div>
              ))}
            </div>
          )}

          {/* 진행률 바 */}
          {!isLocked && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-600">학습 진도</span>
                <span className="font-semibold text-gray-900">{era.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: era.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${era.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </div>
          )}

          {/* 액션 버튼 */}
          {!isLocked && (
            <Button
              variant="outline"
              size="sm"
              className="w-full group"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(era.id);
              }}
            >
              <span>
                {era.progress === 0 ? '시작하기' : '이어서 하기'}
              </span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}

          {/* 학습 내용 보기 버튼 */}
          {!isLocked && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-2 text-gray-500 hover:text-gray-800"
              onClick={(e) => {
                e.stopPropagation();
                setShowCurriculum(!showCurriculum);
              }}
            >
              <span>{showCurriculum ? '학습 내용 접기' : '시대별 학습 내용 보기'}</span>
            </Button>
          )}

          {/* 학습 내용 탭 (확장 영역) */}
          <AnimatePresence>
            {showCurriculum && !isLocked && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <CurriculumTabs contents={curriculumData} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div >
  );
}
