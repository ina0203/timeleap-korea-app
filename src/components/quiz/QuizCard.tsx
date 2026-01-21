'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Lightbulb, Star } from 'lucide-react';
import { Quiz } from '@/types/quiz';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface QuizCardProps {
  quiz: Quiz;
  onAnswer: (selectedAnswer: number, isCorrect: boolean) => void;
  showHint: boolean;
  onHintRequest: () => void;
}

export function QuizCard({ quiz, onAnswer, showHint, onHintRequest }: QuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const correct = selectedOption === quiz.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    // 부모 컴포넌트에 결과 전달
    setTimeout(() => {
      onAnswer(selectedOption, correct);
    }, 2000);
  };

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-3xl mx-auto"
    >
      <Card className="border-2 border-primary-200">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                  레벨 {quiz.level}
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                  <Star className="w-3 h-3 inline mr-1" />
                  {quiz.points}점
                </span>
              </div>
            </div>

            {!showResult && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onHintRequest}
                disabled={showHint}
                className="flex items-center gap-2"
              >
                <Lightbulb className={cn(
                  "w-4 h-4",
                  showHint && "text-amber-500"
                )} />
                <span className="text-sm">힌트</span>
              </Button>
            )}
          </div>

          <CardTitle className="text-2xl leading-relaxed">
            {quiz.question}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* 힌트 표시 */}
          <AnimatePresence>
            {showHint && quiz.hint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg"
              >
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900 text-sm mb-1">힌트</p>
                    <p className="text-amber-800 text-sm">{quiz.hint}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 이미지 (보강됨) */}
          {quiz.imageUrl && (
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={quiz.imageUrl}
                alt="Quiz Illustration"
                className="w-full h-auto max-h-64 object-contain bg-gray-50"
              />
            </div>
          )}

          {/* 사료/자료 박스 (새로 추가됨) */}
          {quiz.material && (
            <div className="mb-8 p-6 bg-stone-50 border border-stone-200 rounded-lg shadow-inner font-serif relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 border border-stone-200 rounded-full text-xs text-stone-500 font-sans">
                보기
              </div>
              <div className="whitespace-pre-wrap text-stone-800 leading-relaxed text-lg">
                {quiz.material}
              </div>
            </div>
          )}

          {/* 출처 표시 (새로 추가됨) */}
          {quiz.source && (
            <div className="flex justify-end mb-4">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {quiz.source}
              </span>
            </div>
          )}

          {/* 선택지 */}
          <div className="space-y-3 mb-6">
            {quiz.options?.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrectOption = index === quiz.correctAnswer;
              const showCorrect = showResult && isCorrectOption;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <motion.button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={showResult}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  className={cn(
                    'w-full p-4 rounded-xl border-2 transition-all duration-200 text-left',
                    'flex items-center justify-between group',
                    !showResult && !isSelected && 'border-gray-200 hover:border-primary-300 hover:bg-primary-50',
                    !showResult && isSelected && 'border-primary-500 bg-primary-50',
                    showCorrect && 'border-green-500 bg-green-50',
                    showWrong && 'border-red-500 bg-red-50',
                    showResult && !isCorrectOption && !isSelected && 'opacity-50'
                  )}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={cn(
                      'w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm flex-shrink-0',
                      !showResult && !isSelected && 'border-gray-300 text-gray-500',
                      !showResult && isSelected && 'border-primary-500 bg-primary-500 text-white',
                      showCorrect && 'border-green-500 bg-green-500 text-white',
                      showWrong && 'border-red-500 bg-red-500 text-white'
                    )}>
                      {showCorrect ? <Check className="w-5 h-5" /> :
                        showWrong ? <X className="w-5 h-5" /> :
                          String.fromCharCode(65 + index)}
                    </div>
                    <span className={cn(
                      'text-base',
                      showCorrect && 'font-semibold text-green-900',
                      showWrong && 'font-semibold text-red-900'
                    )}>
                      {option}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* 제출 버튼 */}
          {!showResult && (
            <Button
              size="lg"
              className="w-full"
              onClick={handleSubmit}
              disabled={selectedOption === null}
            >
              답안 제출하기
            </Button>
          )}

          {/* 결과 및 해설 */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={cn(
                  'p-6 rounded-xl border-2',
                  isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
                )}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
                    isCorrect ? 'bg-green-500' : 'bg-red-500'
                  )}>
                    {isCorrect ?
                      <Check className="w-7 h-7 text-white" /> :
                      <X className="w-7 h-7 text-white" />
                    }
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      'text-2xl font-bold mb-2',
                      isCorrect ? 'text-green-900' : 'text-red-900'
                    )}>
                      {isCorrect ? '정답입니다! 🎉' : '아쉬워요! 😢'}
                    </h3>
                    <p className={cn(
                      'text-base',
                      isCorrect ? 'text-green-800' : 'text-red-800'
                    )}>
                      {isCorrect ?
                        `${quiz.points}점을 획득했어요!` :
                        '다시 한 번 도전해보세요!'
                      }
                    </p>
                  </div>
                </div>

                <div className={cn(
                  'p-4 rounded-lg',
                  isCorrect ? 'bg-white' : 'bg-white'
                )}>
                  <p className="font-semibold text-gray-900 mb-2">해설</p>
                  <p className="text-gray-700 leading-relaxed">
                    {quiz.explanation}
                  </p>
                </div>

                {quiz.relatedConcepts && quiz.relatedConcepts.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">관련 개념</p>
                    <div className="flex flex-wrap gap-2">
                      {quiz.relatedConcepts.map((concept, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                        >
                          #{concept}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
