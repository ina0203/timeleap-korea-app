'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, Trophy, Zap, BookOpen, Brain } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  
  const features = [
    {
      icon: BookOpen,
      title: '7개 시대 완벽 커버',
      description: '선사시대부터 현대까지 체계적으로 학습',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Zap,
      title: '5단계 레벨 시스템',
      description: '초등 3학년부터 수능까지 단계별 성장',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Target,
      title: '무한 반복 학습',
      description: '틀린 문제는 자동으로 다시 출제',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Brain,
      title: 'AI 역사 인물 대화',
      description: '세종대왕, 이순신과 직접 대화하며 학습',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Trophy,
      title: '유물 수집 & 업적',
      description: '학습하며 역사 유물을 모으는 재미',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: Clock,
      title: '학습 진도 추적',
      description: '강점과 약점을 한눈에 파악',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 text-white">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 로고 애니메이션 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <Clock className="w-24 h-24 mx-auto" strokeWidth={1.5} />
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute inset-0 border-4 border-white/30 rounded-full"
                />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              타임 리프 코리아
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 opacity-90 font-medium">
              역사의 빈틈을 메우고, 너만의 연표를 완성하라!
            </p>
            
            <p className="text-lg mb-12 opacity-75 max-w-2xl mx-auto">
              초등학교 3학년부터 수능까지, 
              <br className="hidden sm:block" />
              재미있게 배우는 한국사 학습 플랫폼
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="xl"
                variant="secondary"
                onClick={() => router.push('/timeline')}
                className="group"
              >
                <span className="text-lg font-semibold">지금 시작하기</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Button>
              
              <Button 
                size="xl"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                데모 보기
              </Button>
            </div>
            
            {/* 통계 */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { label: '시대', value: '7개' },
                { label: '퀴즈', value: '1000+' },
                { label: '학습자', value: '10K+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-75">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* 웨이브 디바이더 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
              fill="rgb(249, 250, 251)"
            />
          </svg>
        </div>
      </section>
      
      {/* 주요 기능 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              왜 타임 리프 코리아일까요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              단순 암기가 아닌, 이해하고 생각하는 한국사 학습
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
              제인이의 역사 여행을 시작하세요
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              지금 가입하면 무료로 모든 콘텐츠를 이용할 수 있어요
            </p>
            <Button 
              size="xl"
              onClick={() => router.push('/timeline')}
            >
              무료로 시작하기
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
