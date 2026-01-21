-- 타임 리프 코리아 데이터베이스 스키마
-- Supabase SQL Editor에서 실행하세요

-- 1. 사용자 프로필 테이블
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  grade INTEGER CHECK (grade >= 1 AND grade <= 12),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. 사용자 진행 상황 테이블
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  total_points INTEGER DEFAULT 0 NOT NULL,
  streak INTEGER DEFAULT 0 NOT NULL,
  last_study_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id)
);

-- 3. 시대별 진행 상황 테이블
CREATE TABLE IF NOT EXISTS public.era_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  era_id TEXT NOT NULL, -- 'prehistoric', 'ancient', etc.
  current_level INTEGER DEFAULT 1 CHECK (current_level >= 1 AND current_level <= 5),
  completion NUMERIC(5,2) DEFAULT 0 CHECK (completion >= 0 AND completion <= 100),
  unlocked BOOLEAN DEFAULT false NOT NULL,
  last_studied_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, era_id)
);

-- 4. 퀴즈 결과 테이블
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  era_id TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level >= 1 AND level <= 5),
  quiz_id TEXT NOT NULL,
  selected_answer INTEGER NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent INTEGER, -- 초 단위
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. 학습 세션 테이블
CREATE TABLE IF NOT EXISTS public.learning_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  era_id TEXT NOT NULL,
  level INTEGER NOT NULL CHECK (level >= 1 AND level <= 5),
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  total_points INTEGER NOT NULL,
  duration INTEGER NOT NULL, -- 초 단위
  passed BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. 수집한 유물 테이블
CREATE TABLE IF NOT EXISTS public.collected_artifacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  artifact_id TEXT NOT NULL,
  era_id TEXT NOT NULL,
  collected_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, artifact_id)
);

-- 7. 업적 테이블
CREATE TABLE IF NOT EXISTS public.achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  achievement_id TEXT NOT NULL,
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, achievement_id)
);

-- 8. 오답 노트 테이블
CREATE TABLE IF NOT EXISTS public.wrong_answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  quiz_id TEXT NOT NULL,
  era_id TEXT NOT NULL,
  level INTEGER NOT NULL,
  attempt_count INTEGER DEFAULT 1,
  last_wrong_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  mastered BOOLEAN DEFAULT false,
  UNIQUE(user_id, quiz_id)
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_era_progress_user ON public.era_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_user ON public.quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_learning_sessions_user ON public.learning_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_wrong_answers_user ON public.wrong_answers(user_id);
CREATE INDEX IF NOT EXISTS idx_wrong_answers_mastered ON public.wrong_answers(user_id, mastered);

-- Row Level Security (RLS) 활성화
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.era_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collected_artifacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wrong_answers ENABLE ROW LEVEL SECURITY;

-- RLS 정책 생성 (사용자는 자신의 데이터만 읽고 쓸 수 있음)
-- Profiles
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- User Progress
CREATE POLICY "Users can view own progress" ON public.user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON public.user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON public.user_progress FOR UPDATE USING (auth.uid() = user_id);

-- Era Progress
CREATE POLICY "Users can view own era progress" ON public.era_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own era progress" ON public.era_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own era progress" ON public.era_progress FOR UPDATE USING (auth.uid() = user_id);

-- Quiz Results
CREATE POLICY "Users can view own quiz results" ON public.quiz_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz results" ON public.quiz_results FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Learning Sessions
CREATE POLICY "Users can view own sessions" ON public.learning_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own sessions" ON public.learning_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Collected Artifacts
CREATE POLICY "Users can view own artifacts" ON public.collected_artifacts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own artifacts" ON public.collected_artifacts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Achievements
CREATE POLICY "Users can view own achievements" ON public.achievements FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own achievements" ON public.achievements FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Wrong Answers
CREATE POLICY "Users can view own wrong answers" ON public.wrong_answers FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own wrong answers" ON public.wrong_answers FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own wrong answers" ON public.wrong_answers FOR UPDATE USING (auth.uid() = user_id);

-- 트리거 함수: updated_at 자동 업데이트
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 트리거 생성
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at BEFORE UPDATE ON public.user_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_era_progress_updated_at BEFORE UPDATE ON public.era_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 함수: 새 사용자 등록 시 기본 데이터 생성
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  -- 프로필 생성
  INSERT INTO public.profiles (id, email, name, grade)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'name', 'Student'),
    COALESCE((new.raw_user_meta_data->>'grade')::INTEGER, 3)
  );

  -- 사용자 진행 상황 초기화
  INSERT INTO public.user_progress (user_id, total_points, streak)
  VALUES (new.id, 0, 0);

  -- 모든 시대 진행 상황 초기화 (선사시대만 잠금 해제)
  INSERT INTO public.era_progress (user_id, era_id, current_level, completion, unlocked)
  VALUES
    (new.id, 'prehistoric', 1, 0, true),
    (new.id, 'ancient', 1, 0, false),
    (new.id, 'unified', 1, 0, false),
    (new.id, 'goryeo', 1, 0, false),
    (new.id, 'joseon', 1, 0, false),
    (new.id, 'modern', 1, 0, false),
    (new.id, 'contemporary', 1, 0, false);

  RETURN new;
END;
$$;

-- 트리거: 새 사용자 등록 시 자동 실행
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 함수: 연속 학습일 계산
CREATE OR REPLACE FUNCTION public.update_streak(p_user_id UUID)
RETURNS INTEGER
LANGUAGE plpgsql
AS $$
DECLARE
  v_last_study_date DATE;
  v_current_streak INTEGER;
  v_new_streak INTEGER;
BEGIN
  SELECT last_study_date, streak INTO v_last_study_date, v_current_streak
  FROM public.user_progress
  WHERE user_id = p_user_id;

  -- 오늘이 첫 학습인 경우
  IF v_last_study_date IS NULL THEN
    v_new_streak := 1;
  -- 어제 학습했으면 연속
  ELSIF v_last_study_date = CURRENT_DATE - INTERVAL '1 day' THEN
    v_new_streak := v_current_streak + 1;
  -- 오늘 이미 학습했으면 유지
  ELSIF v_last_study_date = CURRENT_DATE THEN
    v_new_streak := v_current_streak;
  -- 그 외에는 초기화
  ELSE
    v_new_streak := 1;
  END IF;

  UPDATE public.user_progress
  SET streak = v_new_streak, last_study_date = CURRENT_DATE
  WHERE user_id = p_user_id;

  RETURN v_new_streak;
END;
$$;

-- 완료 메시지
DO $$
BEGIN
  RAISE NOTICE '타임 리프 코리아 데이터베이스 스키마가 성공적으로 생성되었습니다!';
END;
$$;
