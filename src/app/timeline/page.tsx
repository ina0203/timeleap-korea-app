'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ERAS_DATA, ERAS_ORDERED } from '@/data/eras';
import { EraCard } from '@/components/timeline/EraCard';
import { TimelineHeader } from '@/components/timeline/TimelineHeader';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function TimelinePage() {
  const router = useRouter();
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  
  const handleEraSelect = (eraId: string) => {
    setSelectedEra(eraId);
    // 퀴즈 페이지로 이동
    setTimeout(() => {
      router.push(`/quiz/${eraId}`);
    }, 300);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <TimelineHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 히어로 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>제인이의 역사 대모험</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            역사의 시간을 여행하세요
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            선사시대부터 현대까지, 7개의 시대를 탐험하며 
            <br className="hidden sm:block" />
            한국사의 모든 것을 마스터해보세요!
          </p>
        </motion.div>
        
        {/* 진행 상황 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              학습 진행 상황
            </h3>
            <span className="text-sm text-gray-600">
              {ERAS_ORDERED.filter(id => ERAS_DATA[id].unlocked).length} / {ERAS_ORDERED.length} 시대 잠금 해제
            </span>
          </div>
          
          {/* 전체 진행률 바 */}
          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ 
                width: `${(ERAS_ORDERED.filter(id => ERAS_DATA[id].unlocked).length / ERAS_ORDERED.length) * 100}%` 
              }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </motion.div>
        
        {/* 시대 타임라인 */}
        <div className="relative">
          {/* 세로 연결선 (데스크톱) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-purple-200 to-orange-200 -translate-x-1/2" />
          
          {/* 시대 카드들 */}
          <div className="space-y-8">
            {ERAS_ORDERED.map((eraId, index) => {
              const era = ERAS_DATA[eraId];
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={eraId}
                  className="relative"
                >
                  {/* 데스크톱 레이아웃 */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {/* 왼쪽 카드 */}
                    {isEven && (
                      <div className="justify-self-end w-full max-w-md">
                        <EraCard 
                          era={era} 
                          index={index}
                          onSelect={handleEraSelect}
                        />
                      </div>
                    )}
                    
                    {/* 가운데 점 */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className={`w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                          era.unlocked ? 'bg-primary-500' : 'bg-gray-300'
                        }`}
                      >
                        <span className="text-white text-xs font-bold">
                          {index + 1}
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* 오른쪽 카드 */}
                    {!isEven && (
                      <div className="justify-self-start w-full max-w-md">
                        <EraCard 
                          era={era} 
                          index={index}
                          onSelect={handleEraSelect}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* 모바일/태블릿 레이아웃 */}
                  <div className="lg:hidden">
                    <EraCard 
                      era={era} 
                      index={index}
                      onSelect={handleEraSelect}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* CTA 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              역사 마스터가 되어보세요!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              지금 시작하면 첫 번째 업적을 바로 획득할 수 있어요
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => {
                const firstUnlocked = ERAS_ORDERED.find(id => ERAS_DATA[id].unlocked);
                if (firstUnlocked) {
                  handleEraSelect(firstUnlocked);
                }
              }}
            >
              <span>지금 시작하기</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
