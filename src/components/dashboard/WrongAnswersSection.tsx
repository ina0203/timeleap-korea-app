'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AlertCircle, CheckCircle, RotateCcw, Filter } from 'lucide-react';
import { ERAS_DATA } from '@/data/eras';
import { getQuizById } from '@/data/quizzes';
import type { Quiz } from '@/types/quiz';
import { EraId } from '@/types/era';

interface WrongAnswer {
  id: string;
  quizId: string;
  eraId: string;
  level: number;
  attemptCount: number;
  lastWrongAt: string;
  mastered: boolean;
}

interface WrongAnswersSectionProps {
  userId: string;
}

export function WrongAnswersSection({ userId }: WrongAnswersSectionProps) {
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [expandedQuiz, setExpandedQuiz] = useState<string | null>(null);

  useEffect(() => {
    // TODO: DB에서 오답 노트 가져오기
    // 임시 데이터
    const mockWrongAnswers: WrongAnswer[] = [
      {
        id: '1',
        quizId: 'prehistoric-002',
        eraId: 'prehistoric',
        level: 1,
        attemptCount: 2,
        lastWrongAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
        mastered: false
      },
      {
        id: '2',
        quizId: 'prehistoric-006',
        eraId: 'prehistoric',
        level: 3,
        attemptCount: 3,
        lastWrongAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
        mastered: false
      },
      {
        id: '3',
        quizId: 'ancient-003',
        eraId: 'ancient',
        level: 2,
        attemptCount: 1,
        lastWrongAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
        mastered: false
      }
    ];
    setWrongAnswers(mockWrongAnswers);
  }, [userId]);

  const filteredAnswers = selectedEra === 'all'
    ? wrongAnswers
    : wrongAnswers.filter(wa => wa.eraId === selectedEra);

  const handleMarkAsMastered = (id: string) => {
    // TODO: DB 업데이트
    setWrongAnswers(prev =>
      prev.map(wa => wa.id === id ? { ...wa, mastered: true } : wa)
    );
  };

  const getRelativeTime = (timestamp: string) => {
    const now = Date.now();
    const time = new Date(timestamp).getTime();
    const diff = now - time;

    const minutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}일 전`;
    if (hours > 0) return `${hours}시간 전`;
    if (minutes > 0) return `${minutes}분 전`;
    return '방금 전';
  };

  const eraOptions = [
    { id: 'all', name: '전체' },
    ...Object.entries(ERAS_DATA).map(([id, era]) => ({
      id,
      name: era.nameKr
    }))
  ];

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                <AlertCircle className="w-7 h-7 text-red-600" />
                오답 노트
              </h2>
              <p className="text-gray-600">
                {wrongAnswers.filter(wa => !wa.mastered).length}개의 문제를 복습해야 해요
              </p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-red-600">
                {wrongAnswers.filter(wa => !wa.mastered).length}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 필터 */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-5 h-5 text-gray-600" />
        {eraOptions.map((era) => (
          <Button
            key={era.id}
            variant={selectedEra === era.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedEra(era.id)}
          >
            {era.name}
          </Button>
        ))}
      </div>

      {/* 오답 목록 */}
      <div className="space-y-4">
        {filteredAnswers.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                완벽해요! 🎉
              </h3>
              <p className="text-gray-600">
                {selectedEra === 'all'
                  ? '모든 문제를 마스터했어요!'
                  : `${eraOptions.find(e => e.id === selectedEra)?.name} 시대의 모든 문제를 마스터했어요!`
                }
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredAnswers.map((wrongAnswer, index) => {
            const quiz = getQuizById(wrongAnswer.quizId);
            const era = ERAS_DATA[wrongAnswer.eraId as EraId];
            const isExpanded = expandedQuiz === wrongAnswer.id;

            if (!quiz) return null;

            return (
              <motion.div
                key={wrongAnswer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`
                  border-2 hover:shadow-md transition-all cursor-pointer
                  ${wrongAnswer.mastered
                    ? 'border-green-300 bg-green-50'
                    : 'border-red-200 bg-white'
                  }
                `}>
                  <CardHeader
                    onClick={() => setExpandedQuiz(isExpanded ? null : wrongAnswer.id)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{era.icon}</span>
                          <span className="text-sm font-semibold text-gray-600">
                            {era.nameKr} • Level {wrongAnswer.level}
                          </span>
                          <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">
                            {wrongAnswer.attemptCount}번 틀림
                          </span>
                        </div>
                        <p className="font-semibold text-gray-900 mb-1">
                          {quiz.question}
                        </p>
                        <p className="text-sm text-gray-600">
                          마지막 오답: {getRelativeTime(wrongAnswer.lastWrongAt)}
                        </p>
                      </div>

                      {!wrongAnswer.mastered && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMarkAsMastered(wrongAnswer.id);
                          }}
                          className="ml-4"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          마스터
                        </Button>
                      )}
                    </div>
                  </CardHeader>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0">
                          <div className="border-t pt-4">
                            {/* 선택지 */}
                            <div className="space-y-2 mb-4">
                              {quiz.options?.map((option, idx) => (
                                <div
                                  key={idx}
                                  className={`
                                    p-3 rounded-lg border-2
                                    ${idx === quiz.correctAnswer
                                      ? 'border-green-500 bg-green-50'
                                      : 'border-gray-200 bg-gray-50'
                                    }
                                  `}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className={`
                                      w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold
                                      ${idx === quiz.correctAnswer
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-300 text-gray-700'
                                      }
                                    `}>
                                      {String.fromCharCode(65 + idx)}
                                    </span>
                                    <span className={idx === quiz.correctAnswer ? 'font-semibold' : ''}>
                                      {option}
                                    </span>
                                    {idx === quiz.correctAnswer && (
                                      <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* 해설 */}
                            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                              <p className="font-semibold text-blue-900 mb-1">해설</p>
                              <p className="text-blue-800">{quiz.explanation}</p>
                            </div>

                            {/* 관련 개념 */}
                            {quiz.relatedConcepts && quiz.relatedConcepts.length > 0 && (
                              <div className="mt-4">
                                <p className="text-sm font-semibold text-gray-700 mb-2">관련 개념</p>
                                <div className="flex flex-wrap gap-2">
                                  {quiz.relatedConcepts.map((concept, idx) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                    >
                                      #{concept}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })
        )}
      </div>

      {/* 다시 풀기 버튼 */}
      {filteredAnswers.filter(wa => !wa.mastered).length > 0 && (
        <Card className="border-2 border-primary-300 bg-gradient-to-r from-primary-50 to-white">
          <CardContent className="p-6 text-center">
            <h3 className="font-bold text-gray-900 mb-2">
              오답 문제만 다시 풀어보고 싶으신가요?
            </h3>
            <p className="text-gray-600 mb-4">
              틀린 문제들을 한 번 더 복습하면 실력이 쭉쭉 올라가요!
            </p>
            <Button size="lg" className="group">
              <RotateCcw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              오답 문제 다시 풀기
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
