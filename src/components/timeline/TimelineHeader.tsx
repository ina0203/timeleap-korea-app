'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Trophy, Target, User } from 'lucide-react';
import { useUserStore } from '@/lib/store/userStore';
import { Button } from '@/components/ui/Button';

export function TimelineHeader() {
  const { user, progress } = useUserStore();
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Clock className="w-10 h-10 text-primary-600" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-display">
                타임 리프 코리아
              </h1>
              <p className="text-xs text-gray-600">
                한국사 마스터 여정
              </p>
            </div>
          </div>
          
          {/* 사용자 정보 */}
          {user && progress ? (
            <div className="flex items-center gap-4">
              {/* 포인트 */}
              <div className="hidden sm:flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-lg">
                <Trophy className="w-5 h-5 text-amber-600" />
                <div className="text-right">
                  <p className="text-xs text-gray-600">총 포인트</p>
                  <p className="text-lg font-bold text-amber-600">
                    {progress.totalPoints.toLocaleString()}
                  </p>
                </div>
              </div>
              
              {/* 연속 학습 */}
              <div className="hidden md:flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
                <div className="text-right">
                  <p className="text-xs text-gray-600">연속 학습</p>
                  <p className="text-lg font-bold text-green-600">
                    {progress.streak}일
                  </p>
                </div>
              </div>
              
              {/* 프로필 버튼 */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </Button>
            </div>
          ) : (
            <Button variant="default">
              <User className="w-4 h-4 mr-2" />
              로그인
            </Button>
          )}
        </div>
        
        {/* 학습 통계 바 (모바일용) */}
        {user && progress && (
          <div className="flex sm:hidden gap-2 mt-3">
            <div className="flex-1 bg-amber-50 px-3 py-2 rounded-lg text-center">
              <Trophy className="w-4 h-4 text-amber-600 mx-auto mb-1" />
              <p className="text-xs font-bold text-amber-600">
                {progress.totalPoints.toLocaleString()}
              </p>
            </div>
            <div className="flex-1 bg-green-50 px-3 py-2 rounded-lg text-center">
              <Target className="w-4 h-4 text-green-600 mx-auto mb-1" />
              <p className="text-xs font-bold text-green-600">
                {progress.streak}일
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
