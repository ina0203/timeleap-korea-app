'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Clock, Star, TrendingUp, RotateCcw, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface QuizResultProps {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalPoints: number;
  timeSpent: number; // 초
  onRetry: () => void;
  onNextLevel: () => void;
  onBackToTimeline: () => void;
  passThreshold?: number; // 통과 기준 점수 (%)
}

export function QuizResult({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  totalPoints,
  timeSpent,
  onRetry,
  onNextLevel,
  onBackToTimeline,
  passThreshold = 80
}: QuizResultProps) {
  const accuracy = (correctAnswers / totalQuestions) * 100;
  const isPassed = accuracy >= passThreshold;
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  const getGrade = (accuracy: number) => {
    if (accuracy >= 95) return { grade: 'S', color: 'text-purple-600', bgColor: 'bg-purple-50' };
    if (accuracy >= 90) return { grade: 'A+', color: 'text-blue-600', bgColor: 'bg-blue-50' };
    if (accuracy >= 85) return { grade: 'A', color: 'text-green-600', bgColor: 'bg-green-50' };
    if (accuracy >= 80) return { grade: 'B+', color: 'text-teal-600', bgColor: 'bg-teal-50' };
    if (accuracy >= 70) return { grade: 'B', color: 'text-yellow-600', bgColor: 'bg-yellow-50' };
    if (accuracy >= 60) return { grade: 'C', color: 'text-orange-600', bgColor: 'bg-orange-50' };
    return { grade: 'D', color: 'text-red-600', bgColor: 'bg-red-50' };
  };

  const gradeInfo = getGrade(accuracy);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        {/* 결과 헤더 */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className={cn(
              'inline-block w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-2xl',
              isPassed ? 'bg-gradient-to-br from-green-400 to-emerald-600' : 'bg-gradient-to-br from-orange-400 to-red-600'
            )}
          >
            <Trophy className="w-16 h-16 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 mb-2"
          >
            {isPassed ? '축하합니다! 🎉' : '아쉬워요! 💪'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600"
          >
            {isPassed ? 
              '레벨을 통과했어요! 다음 단계로 진행할 수 있어요.' : 
              '조금만 더 노력하면 통과할 수 있어요!'}
          </motion.p>
        </div>

        {/* 등급 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <Card className={cn('border-4', isPassed ? 'border-green-500' : 'border-orange-500')}>
            <CardContent className="p-8 text-center">
              <div className={cn(
                'inline-block px-8 py-4 rounded-2xl mb-4',
                gradeInfo.bgColor
              )}>
                <span className={cn('text-6xl font-bold', gradeInfo.color)}>
                  {gradeInfo.grade}
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {accuracy.toFixed(1)}%
              </p>
              <p className="text-gray-600">정답률</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 상세 통계 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {correctAnswers} / {totalQuestions}
              </p>
              <p className="text-sm text-gray-600">정답 / 전체</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {totalPoints}
              </p>
              <p className="text-sm text-gray-600">획득 포인트</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {minutes}:{seconds.toString().padStart(2, '0')}
              </p>
              <p className="text-sm text-gray-600">소요 시간</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 mb-1">
                +{Math.round(accuracy / 10)}
              </p>
              <p className="text-sm text-gray-600">레벨 경험치</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 액션 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-3"
        >
          {isPassed ? (
            <Button
              size="lg"
              className="w-full group"
              onClick={onNextLevel}
            >
              <span>다음 레벨로 이동</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <Button
              size="lg"
              className="w-full group"
              onClick={onRetry}
            >
              <RotateCcw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              <span>다시 도전하기</span>
            </Button>
          )}

          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={onBackToTimeline}
          >
            타임라인으로 돌아가기
          </Button>
        </motion.div>

        {/* 피드백 메시지 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-4 bg-blue-50 rounded-lg text-center"
        >
          <p className="text-sm text-blue-900">
            {accuracy >= 95 && '완벽해요! 역사 마스터에 가까워지고 있어요! 🌟'}
            {accuracy >= 80 && accuracy < 95 && '훌륭해요! 이 조자로만 계속 가면 수능도 문제없어요! 💪'}
            {accuracy >= 60 && accuracy < 80 && '좋아요! 조금만 더 복습하면 완벽해질 거예요! 📚'}
            {accuracy < 60 && '괜찮아요! 천천히 다시 한 번 공부해보면 분명 더 잘할 수 있어요! 🎯'}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
