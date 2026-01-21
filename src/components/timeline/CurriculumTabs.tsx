'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, School } from 'lucide-react';
import { CurriculumContent, SchoolLevel, SCHOOL_LEVELS } from '@/types/curriculum';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface CurriculumTabsProps {
    contents: CurriculumContent[];
    defaultLevel?: SchoolLevel;
}

const LEVEL_ICONS: Record<SchoolLevel, React.ReactNode> = {
    elementary: <School className="w-4 h-4" />,
    middle: <BookOpen className="w-4 h-4" />,
    high: <GraduationCap className="w-4 h-4" />
};

const LEVEL_COLORS: Record<SchoolLevel, string> = {
    elementary: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    middle: 'bg-green-100 text-green-700 hover:bg-green-200',
    high: 'bg-blue-100 text-blue-700 hover:bg-blue-200'
};

const ACTIVE_LEVEL_COLORS: Record<SchoolLevel, string> = {
    elementary: 'bg-yellow-500 text-white shadow-md',
    middle: 'bg-green-500 text-white shadow-md',
    high: 'bg-blue-500 text-white shadow-md'
};

export function CurriculumTabs({ contents, defaultLevel = 'elementary' }: CurriculumTabsProps) {
    const [activeLevel, setActiveLevel] = useState<SchoolLevel>(defaultLevel);

    // 현재 선택된 레벨의 콘텐츠 찾기
    const currentContent = contents.find(c => c.level === activeLevel);

    if (!contents || contents.length === 0) {
        return <div className="p-4 text-center text-gray-500">학습 내용이 준비되지 않았습니다.</div>;
    }

    return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            {/* 탭 헤더 */}
            <div className="flex p-2 bg-gray-50 gap-2 overflow-x-auto">
                {(['elementary', 'middle', 'high'] as SchoolLevel[]).map((level) => (
                    <button
                        key={level}
                        onClick={() => setActiveLevel(level)}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                            activeLevel === level
                                ? ACTIVE_LEVEL_COLORS[level]
                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                        )}
                    >
                        {LEVEL_ICONS[level]}
                        <span>{SCHOOL_LEVELS[level]}</span>
                    </button>
                ))}
            </div>

            {/* 콘텐츠 영역 */}
            <div className="p-6 min-h-[300px]">
                <AnimatePresence mode="wait">
                    {currentContent ? (
                        <motion.div
                            key={activeLevel}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            {/* 제목 및 학습 목표 */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <span className={cn(
                                        "w-2 h-8 rounded-full",
                                        activeLevel === 'elementary' ? "bg-yellow-400" :
                                            activeLevel === 'middle' ? "bg-green-400" : "bg-blue-400"
                                    )} />
                                    {currentContent.title}
                                </h3>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                    <p className="font-medium text-gray-700 mb-1 flex items-center gap-2">
                                        <span className="text-lg">🎯</span> 학습 목표
                                    </p>
                                    <p className="text-gray-600 leading-relaxed pl-7">
                                        {currentContent.learningGoal}
                                    </p>
                                </div>
                            </div>

                            {/* 요약 */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">📜 이야기 돋보기</h4>
                                <p className="text-gray-600 leading-relaxed text-justify">
                                    {currentContent.summary}
                                </p>
                            </div>


                            {/* 강의 콘텐츠 (새로 추가됨) */}
                            {currentContent.lecture && (
                                <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-200">
                                    <h4 className="font-semibold text-xl text-indigo-900 mb-4 flex items-center gap-2">
                                        <span className="bg-indigo-100 p-1.5 rounded-lg text-2xl">👩‍🏫</span>
                                        선생님 강의
                                    </h4>
                                    <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 text-gray-800 leading-relaxed space-y-4">
                                        {currentContent.lecture.split('\n').map((line, i) => {
                                            if (line.startsWith('# ')) return <h3 key={i} className="text-2xl font-bold text-indigo-800 mt-6 mb-3">{line.replace('# ', '')}</h3>;
                                            if (line.startsWith('## ')) return <h4 key={i} className="text-xl font-bold text-indigo-700 mt-5 mb-2">{line.replace('## ', '')}</h4>;
                                            if (line.startsWith('* ')) return <li key={i} className="list-disc list-inside ml-4 text-gray-700">{line.replace('* ', '')}</li>;
                                            if (line.startsWith('> ')) return <div key={i} className="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-2 text-gray-700 italic">{line.replace('> ', '')}</div>;
                                            if (line.trim() === '') return <div key={i} className="h-2" />;
                                            return <p key={i} className={cn("text-lg", line.startsWith('1.') && "font-semibold mt-2")}>{line}</p>;
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* 핵심 토픽 & 활동 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                                        <span className="bg-blue-100 p-1 rounded">🔑</span> 핵심 키워드
                                    </h4>
                                    <ul className="space-y-2">
                                        {currentContent.keyTopics.map((topic, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                                    <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                                        <span className="bg-orange-100 p-1 rounded">✍️</span> 추천 활동
                                    </h4>
                                    <ul className="space-y-2">
                                        {currentContent.activities.map((activity, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 flex-shrink-0" />
                                                {activity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center h-full text-gray-400 py-12"
                        >
                            <div className="text-4xl mb-4">🤔</div>
                            <p>해당 학년의 학습 내용이 없습니다.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
