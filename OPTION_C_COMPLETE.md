# ✅ 옵션 C 완성: 데이터베이스 연동 (Supabase)

## 🗄️ 데이터베이스 구조

### 생성된 테이블 (총 8개)

| 테이블 | 용도 | 주요 컬럼 |
|--------|------|----------|
| **profiles** | 사용자 프로필 | email, name, grade |
| **user_progress** | 전체 진행 상황 | total_points, streak, last_study_date |
| **era_progress** | 시대별 진행 | era_id, current_level, completion, unlocked |
| **quiz_results** | 퀴즈 결과 기록 | quiz_id, is_correct, time_spent |
| **learning_sessions** | 학습 세션 | total_questions, correct_answers, passed |
| **collected_artifacts** | 수집한 유물 | artifact_id, collected_at |
| **achievements** | 업적 시스템 | achievement_id, unlocked_at |
| **wrong_answers** | 오답 노트 | quiz_id, attempt_count, mastered |

---

## 🔐 보안 설정 완료

### Row Level Security (RLS)
✅ 모든 테이블에 RLS 활성화
✅ 사용자는 자신의 데이터만 접근 가능
✅ SQL 인젝션 방지
✅ 안전한 API 호출

### 인증 정책
- ✅ 읽기: 본인 데이터만
- ✅ 쓰기: 본인 데이터만
- ✅ 수정: 본인 데이터만
- ✅ 삭제: CASCADE로 자동 정리

---

## 📡 생성된 API 함수

### 1. 프로필 관리 (`profile.ts`)
```typescript
✅ getProfile(userId) - 프로필 조회
✅ updateProfile(userId, updates) - 프로필 업데이트
✅ getUserProgress(userId) - 진행 상황 조회
✅ addPoints(userId, points) - 포인트 추가
✅ updateStreak(userId) - 연속 학습일 업데이트
✅ getEraProgress(userId, eraId?) - 시대별 진행 조회
✅ updateEraProgress(userId, eraId, updates) - 진행 업데이트
✅ unlockNextEra(userId, currentEraId) - 다음 시대 잠금 해제
```

### 2. 퀴즈 관리 (`quiz.ts`)
```typescript
✅ saveQuizResult(result) - 퀴즈 결과 저장
✅ saveLearningSession(session) - 학습 세션 저장
✅ getQuizStatsByEra(userId, eraId) - 시대별 통계
✅ getRecentSessions(userId, limit) - 최근 세션들
✅ getWrongAnswers(userId, eraId?) - 오답 노트 조회
✅ markAsMastered(userId, quizId) - 마스터 표시
✅ getAccuracyByLevel(userId, eraId) - 레벨별 정답률
✅ getStrengthWeakness(userId) - 강점/약점 분석
```

### 3. 인증 관리 (`auth.ts`)
```typescript
✅ signUp(email, password, name, grade) - 회원가입
✅ signIn(email, password) - 로그인
✅ signOut() - 로그아웃
✅ getCurrentUser() - 현재 사용자
✅ getSession() - 세션 조회
✅ resetPassword(email) - 비밀번호 재설정
✅ updatePassword(newPassword) - 비밀번호 변경
✅ onAuthStateChange(callback) - 인증 상태 리스너
```

---

## ⚙️ 자동화 기능

### 트리거 함수

#### 1. 신규 사용자 자동 설정
```sql
✅ 프로필 자동 생성
✅ 진행 상황 초기화 (포인트 0, 연속일 0)
✅ 7개 시대 진행 상황 생성
✅ 선사시대만 잠금 해제
```

#### 2. updated_at 자동 업데이트
```sql
✅ profiles 수정 시 자동 갱신
✅ user_progress 수정 시 자동 갱신
✅ era_progress 수정 시 자동 갱신
```

#### 3. 연속 학습일 계산
```sql
✅ 오늘 첫 학습 → 1일
✅ 어제 학습했으면 → +1일
✅ 오늘 이미 학습 → 유지
✅ 그 외 → 초기화
```

---

## 🔧 Supabase 설정 단계

### 1. Supabase 프로젝트 생성
1. https://supabase.com 접속
2. "New Project" 클릭
3. 프로젝트 이름: `timeleap-korea`
4. 데이터베이스 비밀번호 설정
5. Region 선택 (Korea: Northeast Asia - Seoul)
6. 생성 완료 (약 2분 소요)

### 2. 데이터베이스 스키마 적용
1. Supabase Dashboard → SQL Editor
2. `supabase/schema.sql` 파일 내용 복사
3. SQL Editor에 붙여넣기
4. "Run" 버튼 클릭
5. 성공 메시지 확인

### 3. 환경 변수 설정
1. Supabase Dashboard → Project Settings → API
2. Project URL 복사
3. `anon` public key 복사
4. `.env.local` 파일 생성:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. 인증 설정 (선택사항)
1. Supabase Dashboard → Authentication → Providers
2. Email 활성화
3. Confirm email 설정 (권장: 비활성화 for 개발)
4. Site URL 설정: `http://localhost:3000`

---

## 📊 데이터 흐름

### 회원가입 시
```
1. signUp(email, password, name, grade)
   ↓
2. Supabase Auth에 사용자 생성
   ↓
3. Trigger 자동 실행:
   - profiles 테이블에 프로필 추가
   - user_progress 초기화
   - era_progress 7개 생성 (선사시대만 unlocked=true)
   ↓
4. 완료 → 로그인 화면으로
```

### 퀴즈 완료 시
```
1. 각 문제마다 saveQuizResult() 호출
   ↓
2. quiz_results 테이블에 저장
   ↓
3. 틀린 문제면 wrong_answers에 추가
   ↓
4. 세션 종료 시 saveLearningSession()
   ↓
5. 통과하면:
   - updateEraProgress(완료율 업데이트)
   - addPoints(포인트 추가)
   - updateStreak(연속일 업데이트)
   - Level 5 완료 시 unlockNextEra()
```

### 대시보드 표시 시
```
1. getUserProgress() → 총 포인트, 연속일
   ↓
2. getEraProgress() → 시대별 진행률
   ↓
3. getQuizStatsByEra() → 시대별 통계
   ↓
4. getStrengthWeakness() → 강점/약점 분석
   ↓
5. getRecentSessions() → 최근 활동
   ↓
6. 대시보드에 모든 정보 표시
```

---

## 🎯 다음 단계에서 사용할 방법

### 기존 코드 수정 필요
```typescript
// 기존 (Zustand만 사용)
const { addPoints } = useUserStore();
addPoints(10);

// 변경 후 (Supabase + Zustand)
import { addPoints as dbAddPoints } from '@/lib/database/profile';

const { user } = useUserStore();
await dbAddPoints(user.id, 10); // DB에 저장
addPoints(10); // 로컬 상태도 업데이트
```

### 로그인 후 데이터 로드
```typescript
useEffect(() => {
  const loadUserData = async () => {
    const user = await getCurrentUser();
    if (user) {
      const profile = await getProfile(user.id);
      const progress = await getUserProgress(user.id);
      const eraProgress = await getEraProgress(user.id);
      
      // Zustand 스토어 업데이트
      setUser(profile);
      setProgress(progress);
      // ...
    }
  };
  
  loadUserData();
}, []);
```

---

## 📋 체크리스트

### Supabase 설정
- [ ] Supabase 프로젝트 생성
- [ ] schema.sql 실행
- [ ] 환경 변수 설정 (.env.local)
- [ ] Authentication 설정

### 코드 통합
- [ ] 회원가입/로그인 페이지 생성
- [ ] 퀴즈 완료 시 DB 저장 로직 추가
- [ ] 진행 상황 DB 연동
- [ ] 오답 노트 DB 연동

### 테스트
- [ ] 회원가입 테스트
- [ ] 로그인 테스트
- [ ] 퀴즈 풀고 결과 저장 확인
- [ ] 대시보드에서 데이터 표시 확인

---

## 💡 주요 기능 요약

### 1. 영구 저장
✅ 사용자 진행 상황이 영구적으로 저장됨
✅ 다른 기기에서도 동일한 데이터 접근
✅ 브라우저 쿠키 삭제해도 데이터 유지

### 2. 자동화
✅ 신규 사용자 데이터 자동 생성
✅ 연속 학습일 자동 계산
✅ 다음 시대 자동 잠금 해제

### 3. 분석
✅ 시대별 통계
✅ 레벨별 정답률
✅ 강점/약점 분석
✅ 학습 패턴 추적

### 4. 보안
✅ RLS로 데이터 보호
✅ 사용자별 데이터 격리
✅ SQL 인젝션 방지

---

## 🚀 준비 완료!

옵션 C가 완성되어:
- ✅ Supabase 데이터베이스 설계 완료
- ✅ 8개 테이블 + 인덱스 + 트리거 완성
- ✅ 보안 정책 (RLS) 설정 완료
- ✅ API 함수 23개 생성 완료
- ✅ 인증 시스템 준비 완료

**이제 옵션 D: 배포 및 테스트로 진행할 준비가 되었습니다!** 🎉
