'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { EraId, LearningLevel } from '@/types/era';
import { Quiz } from '@/types/quiz';
import { getQuizzesByEraAndLevel, getExamQuizzes } from '@/data/quizzes';
import { ERAS_DATA } from '@/data/eras';
import { QuizCard } from '@/components/quiz/QuizCard';
import { QuizProgress } from '@/components/quiz/QuizProgress';
import { QuizResult } from '@/components/quiz/QuizResult';
import { Button } from '@/components/ui/Button';
import { useUserStore } from '@/lib/store/userStore';

interface QuizPageProps {
  params: {
    eraId: EraId;
  };
}

export default function QuizClient({ params }: QuizPageProps) {
  const router = useRouter();
  const { addPoints, updateEraProgress } = useUserStore();

  const [currentLevel, setCurrentLevel] = useState<LearningLevel>(1);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [wrongQuizzes, setWrongQuizzes] = useState<Quiz[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [soundEnabled, setSoundEnabled] = useState(true);

  const era = ERAS_DATA[params.eraId];

  const [examMode, setExamMode] = useState<'practice' | 'exam' | null>(null);
  const [selectedExamType, setSelectedExamType] = useState<'midterm' | 'final' | 'csat' | 'mock' | null>(null);

  // 퀴즈 로드
  useEffect(() => {
    if (examMode === 'practice') {
      loadQuizzes();
    } else if (examMode === 'exam' && selectedExamType) {
      loadExamQuizzes();
    }
  }, [currentLevel, examMode, selectedExamType]);

  const loadQuizzes = () => {
    const levelQuizzes = getQuizzesByEraAndLevel(params.eraId, currentLevel);
    setQuizzes(levelQuizzes);
    setCurrentQuizIndex(0);
    setShowHint(false);
  };

  const loadExamQuizzes = () => {
    if (!selectedExamType) return;

    // 시험 모드는 레벨 무시하고 해당 시험 유형 문제 모두 가져오기 (또는 랜덤)
    // 여기서는 간단히 해당 시대의 해당 시험 유형 문제들을 가져옵니다.
    const examQuizzes = getExamQuizzes(params.eraId, selectedExamType);

    // 섞기 (Fisher-Yates Shuffle)
    for (let i = examQuizzes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [examQuizzes[i], examQuizzes[j]] = [examQuizzes[j], examQuizzes[i]];
    }

    setQuizzes(examQuizzes);
    setCurrentQuizIndex(0);
    setShowHint(false);
  };

  const handleAnswer = (selectedAnswer: number, isCorrect: boolean) => {
    const currentQuiz = quizzes[currentQuizIndex];

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      setTotalPoints(prev => prev + currentQuiz.points);
      addPoints(currentQuiz.points);

      // 정답 효과음 (선택사항)
      if (soundEnabled) {
        // playCorrectSound();
      }
    } else {
      setWrongCount(prev => prev + 1);
      // 틀린 문제를 오답 노트에 추가
      setWrongQuizzes(prev => [...prev, currentQuiz]);

      // 오답 효과음 (선택사항)
      if (soundEnabled) {
        // playWrongSound();
      }
    }

    // 다음 문제로 이동
    setTimeout(() => {
      if (currentQuizIndex < quizzes.length - 1) {
        setCurrentQuizIndex(prev => prev + 1);
        setShowHint(false);
      } else {
        // 퀴즈 완료
        completeQuiz();
      }
    }, 2500);
  };

  const completeQuiz = () => {
    const accuracy = (correctCount / quizzes.length) * 100;

    // 연습 모드일 때만 진도율 업데이트
    if (examMode === 'practice') {
      updateEraProgress(params.eraId, currentLevel, accuracy);
    }

    // 결과 화면 표시
    setShowResult(true);
  };

  const handleRetry = () => {
    // 틀린 문제만 다시 풀기
    if (wrongQuizzes.length > 0) {
      setQuizzes(wrongQuizzes);
      setWrongQuizzes([]);
      setCurrentQuizIndex(0);
      setCorrectCount(0);
      setWrongCount(0);
      setShowResult(false);
      setStartTime(Date.now());
    } else {
      // 처음부터 다시 시작
      if (examMode === 'practice') {
        loadQuizzes();
      } else {
        loadExamQuizzes();
      }
      setCorrectCount(0);
      setWrongCount(0);
      setTotalPoints(0);
      setShowResult(false);
      setStartTime(Date.now());
    }
  };

  const handleNextLevel = () => {
    if (examMode === 'practice' && currentLevel < 5) {
      setCurrentLevel(prev => (prev + 1) as LearningLevel);
      setCorrectCount(0);
      setWrongCount(0);
      setTotalPoints(0);
      setWrongQuizzes([]);
      setShowResult(false);
      setStartTime(Date.now());
    } else if (examMode === 'exam') {
      // 시험 모드는 다음 레벨 개념이 없으므로 타임라인으로
      router.push('/timeline');
    } else {
      // 모든 레벨 완료
      router.push('/timeline');
    }
  };

  const handleBackToTimeline = () => {
    router.push('/timeline');
  };

  const startPractice = () => {
    setExamMode('practice');
  };

  const startExam = (type: 'midterm' | 'final' | 'csat' | 'mock') => {
    setExamMode('exam');
    setSelectedExamType(type);
  };


  // 모드 선택 화면
  if (!examMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div>
            <span className="text-6xl mb-4 block">{era.icon}</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{era.nameKr} 퀴즈 타임!</h1>
            <p className="text-gray-600">어떤 방식으로 역사를 탐험해볼까요?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 연습 모드 카드 */}
            <button
              onClick={startPractice}
              className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-blue-500 hover:shadow-md transition-all text-left group"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">이야기 연습 모드</h3>
              <p className="text-gray-500 text-sm">레벨 1부터 차근차근! 쉬운 문제부터 어려운 문제까지 순서대로 풀어보아요.</p>
            </button>

            {/* 실전 모의고사 카드 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-orange-500 hover:shadow-md transition-all text-left relative overflow-hidden group">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">실전 모의고사</h3>
              <p className="text-gray-500 text-sm mb-4">중간고사, 기말고사, 그리고 수능까지! 시험에 실제로 나오는 문제들을 풀어보세요.</p>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <Button size="sm" variant="outline" onClick={() => startExam('midterm')}>중간고사</Button>
                <Button size="sm" variant="outline" onClick={() => startExam('csat')} className="border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800">수능 기출</Button>
              </div>
            </div>
          </div>

          <Button variant="ghost" onClick={handleBackToTimeline}>
            <ArrowLeft className="w-4 h-4 mr-2" /> 뒤로 가기
          </Button>
        </div>
      </div>
    );
  }

  const currentQuiz = quizzes[currentQuizIndex];
  const timeSpent = Math.floor((Date.now() - startTime) / 1000);

  if (quizzes.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">
            {examMode === 'exam' ? '해당 유형의 문제가 아직 준비되지 않았습니다.' : '이 레벨의 퀴즈가 준비 중입니다.'}
          </p>
          <Button onClick={() => setExamMode(null)}>
            모드 선택으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <QuizResult
        totalQuestions={quizzes.length}
        correctAnswers={correctCount}
        wrongAnswers={wrongCount}
        totalPoints={totalPoints}
        timeSpent={timeSpent}
        onRetry={handleRetry}
        onNextLevel={handleNextLevel}
        onBackToTimeline={handleBackToTimeline}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-8 px-4">
      {/* 상단 네비게이션 */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToTimeline}
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            타임라인으로
          </Button>

          <div className="flex items-center gap-4">
            {/* 시대 정보 */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-2xl">{era.icon}</span>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{era.nameKr}</p>
                <p className="text-xs text-gray-600">
                  {examMode === 'practice' ? `레벨 ${currentLevel}` :
                    selectedExamType === 'csat' ? '수능 기출' :
                      selectedExamType === 'midterm' ? '중간고사' : '실전 모의고사'}
                </p>
              </div>
            </div>

            {/* 사운드 토글 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              {soundEnabled ?
                <Volume2 className="w-5 h-5 text-gray-600" /> :
                <VolumeX className="w-5 h-5 text-gray-400" />
              }
            </Button>
          </div>
        </div>
      </div>

      {/* 진행 상황 */}
      <QuizProgress
        total={quizzes.length}
        current={currentQuizIndex}
        correctCount={correctCount}
        wrongCount={wrongCount}
      />

      {/* 퀴즈 카드 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuiz.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <QuizCard
            quiz={currentQuiz}
            onAnswer={handleAnswer}
            showHint={showHint}
            onHintRequest={() => setShowHint(true)}
          />
        </motion.div>
      </AnimatePresence>

      {/* 틀린 문제 알림 */}
      {wrongQuizzes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg"
        >
          <p className="text-sm text-amber-900">
            💡 <strong>복습 알림:</strong> 틀린 문제 {wrongQuizzes.length}개가 나중에 다시 나와요!
          </p>
        </motion.div>
      )}
    </div>
  );
}
