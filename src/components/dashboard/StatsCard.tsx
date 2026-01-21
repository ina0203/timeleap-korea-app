'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtitle: string;
  color: 'amber' | 'green' | 'blue' | 'purple' | 'red';
  trend?: string;
  delay?: number;
}

const colorMap = {
  amber: {
    bg: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50',
    text: 'text-amber-600'
  },
  green: {
    bg: 'from-green-500 to-emerald-600',
    light: 'bg-green-50',
    text: 'text-green-600'
  },
  blue: {
    bg: 'from-blue-500 to-cyan-600',
    light: 'bg-blue-50',
    text: 'text-blue-600'
  },
  purple: {
    bg: 'from-purple-500 to-pink-600',
    light: 'bg-purple-50',
    text: 'text-purple-600'
  },
  red: {
    bg: 'from-red-500 to-rose-600',
    light: 'bg-red-50',
    text: 'text-red-600'
  }
};

export function StatsCard({
  icon,
  title,
  value,
  subtitle,
  color,
  trend,
  delay = 0
}: StatsCardProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <Card className="border-2 hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${colors.bg}`}>
              <div className="text-white">
                {icon}
              </div>
            </div>
            {trend && (
              <span className={`text-sm font-semibold ${colors.text} bg-${color}-50 px-2 py-1 rounded-full`}>
                {trend}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {value}
            </div>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
