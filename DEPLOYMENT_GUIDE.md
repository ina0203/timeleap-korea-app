# 🚀 타임 리프 코리아 - Vercel 배포 가이드

## 📋 배포 전 체크리스트

### 1. 필수 준비사항
- [ ] GitHub 계정
- [ ] Vercel 계정 (https://vercel.com)
- [ ] Supabase 프로젝트 설정 완료
- [ ] 환경 변수 값 준비

### 2. 코드 준비
- [ ] 모든 파일 저장
- [ ] 빌드 에러 없음 확인
- [ ] .gitignore 확인

---

## 🔧 Step 1: GitHub 레포지토리 생성

### 1-1. GitHub에 레포지토리 생성
```bash
# 1. GitHub.com에서 새 레포지토리 생성
# 레포지토리 이름: timeleap-korea
# 공개 여부: Private (추천)
# README, .gitignore 추가하지 않음

# 2. 로컬에서 Git 초기화
cd timeleap-korea
git init

# 3. 파일 추가
git add .

# 4. 첫 커밋
git commit -m "Initial commit: 타임 리프 코리아 프로젝트"

# 5. GitHub 연결
git remote add origin https://github.com/YOUR_USERNAME/timeleap-korea.git

# 6. 푸시
git branch -M main
git push -u origin main
```

### 1-2. .gitignore 확인
다음 파일들이 .gitignore에 포함되어 있는지 확인:
```
node_modules
.next
.env.local
.DS_Store
*.log
```

---

## 🌐 Step 2: Vercel 배포

### 2-1. Vercel에 프로젝트 임포트

1. **Vercel 접속**
   - https://vercel.com 방문
   - GitHub 계정으로 로그인

2. **New Project 클릭**
   - "Add New..." → "Project" 선택
   - GitHub 연동 (처음이면 권한 승인 필요)

3. **레포지토리 선택**
   - `timeleap-korea` 레포지토리 찾기
   - "Import" 클릭

4. **프로젝트 설정**
   ```
   Project Name: timeleap-korea
   Framework Preset: Next.js (자동 감지됨)
   Root Directory: ./
   Build Command: npm run build (자동 설정됨)
   Output Directory: .next (자동 설정됨)
   Install Command: npm install (자동 설정됨)
   ```

5. **환경 변수 설정**
   - "Environment Variables" 섹션 펼치기
   - 다음 변수들 추가:

   ```
   이름: NEXT_PUBLIC_SUPABASE_URL
   값: https://your-project.supabase.co
   환경: Production, Preview, Development 모두 체크

   이름: NEXT_PUBLIC_SUPABASE_ANON_KEY
   값: your-supabase-anon-key
   환경: Production, Preview, Development 모두 체크

   이름: NEXT_PUBLIC_APP_URL
   값: (나중에 추가 - 일단 비워두기)
   환경: Production
   ```

6. **Deploy 클릭**
   - 빌드 시작 (약 2-3분 소요)
   - 빌드 로그 실시간 확인 가능

### 2-2. 배포 완료 확인

배포 성공 시:
- ✅ 초록색 "Success" 메시지
- ✅ 자동 생성된 URL (예: `timeleap-korea.vercel.app`)
- ✅ 프리뷰 이미지
- ✅ "Visit" 버튼으로 사이트 확인

---

## 🎯 Step 3: 도메인 연결 (선택사항)

### 3-1. 커스텀 도메인 준비

#### 무료 옵션:
- Vercel 제공 도메인 사용
  - 예: `timeleap-korea.vercel.app`
  - 추가 설정 불필요

#### 유료 옵션:
1. **도메인 구매**
   - Namecheap, GoDaddy, Cafe24 등
   - 추천: `.com`, `.kr`, `.co.kr`
   - 예산: 연 $10-30

2. **Vercel에 도메인 추가**
   - Vercel Dashboard → Settings → Domains
   - "Add" 클릭
   - 도메인 입력 (예: `timeleap-korea.com`)
   - Vercel이 제공하는 DNS 레코드 확인

3. **DNS 설정**
   - 도메인 제공업체 사이트 로그인
   - DNS 설정으로 이동
   - A 레코드 추가:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     TTL: 자동 또는 3600
     ```
   - CNAME 레코드 추가:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     TTL: 자동 또는 3600
     ```

4. **SSL 인증서 자동 발급 대기**
   - 약 24-48시간 소요 (보통 몇 시간)
   - Vercel이 자동으로 Let's Encrypt SSL 인증서 발급

### 3-2. 도메인 설정 완료 후

1. **환경 변수 업데이트**
   ```
   Vercel Dashboard → Settings → Environment Variables
   NEXT_PUBLIC_APP_URL 값 업데이트:
   - 커스텀 도메인: https://timeleap-korea.com
   - Vercel 도메인: https://timeleap-korea.vercel.app
   ```

2. **Supabase 설정 업데이트**
   ```
   Supabase Dashboard → Authentication → URL Configuration
   Site URL: https://your-domain.com
   Redirect URLs에 추가:
   - https://your-domain.com/auth/callback
   - https://your-domain.com/*
   ```

3. **재배포**
   - Vercel Dashboard → Deployments
   - 최신 배포에서 "Redeploy" 클릭

---

## 🧪 Step 4: 테스트

### 4-1. 기본 기능 테스트

#### 1. 홈페이지 접속
- [ ] 홈페이지 로딩 확인
- [ ] 히어로 섹션 표시 확인
- [ ] 버튼 클릭 동작 확인

#### 2. 타임라인 페이지
- [ ] `/timeline` 접속
- [ ] 7개 시대 카드 표시 확인
- [ ] 선사시대 잠금 해제 상태 확인
- [ ] 다른 시대 잠금 상태 확인

#### 3. 퀴즈 페이지
- [ ] 선사시대 클릭 → 퀴즈 페이지 이동
- [ ] 문제 표시 확인
- [ ] 선택지 클릭 동작 확인
- [ ] 정답/오답 피드백 표시 확인
- [ ] 다음 문제 전환 확인

#### 4. 반응형 테스트
- [ ] 모바일 화면 (375px)
- [ ] 태블릿 화면 (768px)
- [ ] 데스크톱 화면 (1920px)

### 4-2. 성능 테스트

#### Lighthouse 점수 확인
1. Chrome 개발자 도구 열기 (F12)
2. Lighthouse 탭 선택
3. "Generate report" 클릭
4. 목표 점수:
   - Performance: 90+ ⚡
   - Accessibility: 95+ ♿
   - Best Practices: 90+ ✅
   - SEO: 90+ 🔍

#### 로딩 속도
- [ ] 초기 로딩: 3초 이내
- [ ] 페이지 전환: 1초 이내
- [ ] 이미지 로딩: Lazy loading 작동

### 4-3. 데이터베이스 연동 테스트 (옵션 C 완료 후)

#### 회원가입/로그인
- [ ] 회원가입 폼 작동
- [ ] 이메일 형식 검증
- [ ] 비밀번호 강도 확인
- [ ] 가입 후 자동 로그인
- [ ] 프로필 데이터 생성 확인

#### 퀴즈 데이터 저장
- [ ] 퀴즈 결과 DB 저장
- [ ] 포인트 누적 확인
- [ ] 진행률 업데이트 확인
- [ ] 오답 노트 생성 확인

#### 진행 상황 동기화
- [ ] 다른 브라우저에서 로그인
- [ ] 동일한 진행 상황 표시
- [ ] 실시간 업데이트 작동

---

## 🔍 Step 5: 모니터링 및 유지보수

### 5-1. Vercel Analytics 설정

1. **Analytics 활성화**
   - Vercel Dashboard → Analytics 탭
   - "Enable Analytics" 클릭 (Pro 플랜 필요)
   - 무료 플랜은 제한적 분석 제공

2. **확인할 지표**
   - Visitors: 방문자 수
   - Page Views: 페이지뷰
   - Time to First Byte (TTFB)
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)

### 5-2. 에러 모니터링

#### Vercel 로그 확인
- Vercel Dashboard → Deployments → 특정 배포 클릭
- Runtime Logs에서 에러 확인
- Edge Network 로그 확인

#### Supabase 로그 확인
- Supabase Dashboard → Logs
- API 호출 에러 확인
- 쿼리 성능 확인

### 5-3. 정기 점검 체크리스트

#### 매주
- [ ] 배포 상태 확인
- [ ] 에러 로그 확인
- [ ] 사용자 피드백 수집

#### 매월
- [ ] 라이브러리 업데이트 확인
- [ ] 보안 취약점 검사 (`npm audit`)
- [ ] 데이터베이스 백업 확인
- [ ] 성능 지표 분석

---

## 🛠️ 문제 해결

### 일반적인 배포 에러

#### 1. 빌드 실패
```
에러: Type error: Cannot find module...
해결: package.json에 의존성 확인 및 추가
```

#### 2. 환경 변수 에러
```
에러: NEXT_PUBLIC_SUPABASE_URL is not defined
해결: Vercel 환경 변수 설정 재확인
```

#### 3. 404 페이지
```
에러: 페이지를 찾을 수 없음
해결: 라우팅 경로 확인, 파일 이름 확인
```

#### 4. 데이터베이스 연결 실패
```
에러: Failed to connect to Supabase
해결: 
1. Supabase URL 확인
2. Anon Key 확인
3. Supabase 프로젝트 상태 확인
```

### 로그 확인 방법

#### Vercel 로그
```
Vercel Dashboard → Deployments → 배포 선택 → 
Runtime Logs 또는 Build Logs
```

#### 브라우저 콘솔
```
F12 → Console 탭
에러 메시지 및 스택 트레이스 확인
```

#### Supabase 로그
```
Supabase Dashboard → Logs → API 또는 Database
```

---

## 📊 배포 후 체크리스트

### 즉시 확인사항
- [ ] 사이트 접속 가능
- [ ] SSL 인증서 작동 (🔒 자물쇠 아이콘)
- [ ] 모든 페이지 라우팅 작동
- [ ] 이미지 로딩 확인
- [ ] 폰트 로딩 확인

### 기능 확인
- [ ] 홈페이지 표시
- [ ] 타임라인 표시
- [ ] 퀴즈 작동
- [ ] 애니메이션 작동
- [ ] 반응형 디자인 작동

### 성능 확인
- [ ] Lighthouse 점수 90+
- [ ] 로딩 시간 3초 이내
- [ ] 모바일 최적화

### 보안 확인
- [ ] HTTPS 적용
- [ ] 환경 변수 숨김
- [ ] CORS 설정 (필요시)
- [ ] RLS 정책 작동 (Supabase)

---

## 🎉 배포 완료!

### 공유 가능한 링크
- **Vercel 도메인**: `https://timeleap-korea.vercel.app`
- **커스텀 도메인**: `https://your-domain.com` (설정 시)

### 다음 단계
1. 제인이에게 링크 공유
2. 피드백 수집
3. 버그 수정 및 개선
4. 옵션 E: 학습 리포트 구현

---

## 🚨 긴급 대응

### 사이트 다운 시
1. Vercel Status 확인: https://vercel-status.com
2. Supabase Status 확인: https://status.supabase.com
3. GitHub 커밋 롤백
4. Vercel에서 이전 배포로 롤백

### 롤백 방법
```
Vercel Dashboard → Deployments → 
이전 성공 배포 선택 → "Promote to Production"
```

---

## 📞 지원 리소스

### Vercel
- 문서: https://vercel.com/docs
- 커뮤니티: https://github.com/vercel/next.js/discussions
- 서포트: https://vercel.com/support

### Next.js
- 문서: https://nextjs.org/docs
- 예제: https://github.com/vercel/next.js/tree/canary/examples

### Supabase
- 문서: https://supabase.com/docs
- 커뮤니티: https://github.com/supabase/supabase/discussions

---

**축하합니다! 🎉 타임 리프 코리아가 전 세계에 공개되었습니다!** 🌍✨
