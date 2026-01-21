'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ERAS_DATA } from '@/data/eras';

export function EraRadarChart() {
  // 임시 데이터 (실제로는 DB에서)
  const eraScores = {
    prehistoric: 92,
    ancient: 85,
    unified: 78,
    goryeo: 70,
    joseon: 65,
    modern: 55,
    contemporary: 48
  };

  const eras = Object.entries(eraScores);
  const maxScore = 100;

  // SVG 레이더 차트 좌표 계산
  const centerX = 150;
  const centerY = 150;
  const radius = 120;
  const angleStep = (2 * Math.PI) / eras.length;

  const getPoint = (index: number, value: number) => {
    const angle = index * angleStep - Math.PI / 2; // -90도부터 시작
    const r = (value / maxScore) * radius;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle)
    };
  };

  // 배경 원 (20%, 40%, 60%, 80%, 100%)
  const backgroundCircles = [20, 40, 60, 80, 100];

  // 데이터 포인트들의 경로
  const dataPath = eras.map((_, index) => {
    const point = getPoint(index, eraScores[eras[index][0] as keyof typeof eraScores]);
    return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
  }).join(' ') + ' Z';

  return (
    <div className="relative">
      {/* SVG 차트 */}
      <svg viewBox="0 0 300 300" className="w-full h-auto">
        {/* 배경 원들 */}
        {backgroundCircles.map((percentage) => (
          <circle
            key={percentage}
            cx={centerX}
            cy={centerY}
            r={(percentage / 100) * radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* 축 선들 */}
        {eras.map((_, index) => {
          const point = getPoint(index, maxScore);
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={point.x}
              y2={point.y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          );
        })}

        {/* 데이터 영역 */}
        <motion.path
          d={dataPath}
          fill="url(#radarGradient)"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* 데이터 테두리 */}
        <motion.path
          d={dataPath}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* 데이터 포인트 */}
        {eras.map((era, index) => {
          const point = getPoint(index, era[1]);
          return (
            <motion.circle
              key={era[0]}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#3b82f6"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
            />
          );
        })}

        {/* 그라디언트 정의 */}
        <defs>
          <radialGradient id="radarGradient">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </svg>

      {/* 라벨들 */}
      <div className="absolute inset-0">
        {eras.map((era, index) => {
          const eraData = ERAS_DATA[era[0] as keyof typeof ERAS_DATA];
          const labelPoint = getPoint(index, maxScore + 30);
          
          return (
            <motion.div
              key={era[0]}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(labelPoint.x / 300) * 100}%`,
                top: `${(labelPoint.y / 300) * 100}%`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">{eraData.icon}</div>
                <div className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                  {eraData.nameKr}
                </div>
                <div className="text-xs font-bold text-primary-600">
                  {era[1]}%
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 범례 */}
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>시대별 정답률을 한눈에 확인하세요</p>
      </div>
    </div>
  );
}
