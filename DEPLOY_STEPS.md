# 🚀 타임 리프 코리아 - 초간단 배포 가이드

## 📋 준비물
- [ ] GitHub 계정
- [ ] Vercel 계정 (무료)
- [ ] Supabase 계정 (무료)

---

## Step 1: GitHub에 코드 올리기 (5분)

### 1-1. GitHub에서 새 레포지토리 생성
1. https://github.com 접속 → 로그인
2. 오른쪽 위 **"+"** 클릭 → **"New repository"**
3. 설정:
   - Repository name: `timeleap-korea`
   - Public 또는 Private 선택
   - ✅ **"Add a README file" 체크 해제**
   - ✅ **".gitignore" 선택 안 함**
   - ✅ **"license" 선택 안 함**
4. **"Create repository"** 클릭

### 1-2. 로컬 코드를 GitHub에 푸시

```bash
# 1. timeleap-korea 폴더로 이동
cd /home/claude/timeleap-korea

# 2. Git 초기화 (이미 되어있을 수도 있음)
git init

# 3. 모든 파일 추가
git add .

# 4. 커밋
git commit -m "Initial commit: 타임 리프 코리아 v1.0"

# 5. GitHub 연결 (YOUR_USERNAME을 본인 GitHub 아이디로 변경)
git remote add origin https://github.com/YOUR_USERNAME/timeleap-korea.git

# 6. 푸시
git branch -M main
git push -u origin main
```

**완료!** 이제 GitHub에서 코드를 확인할 수 있어요.

---

## Step 2: Supabase 데이터베이스 설정 (10분)

### 2-1. Supabase 프로젝트 생성
1. https://supabase.com 접속
2. **"Start your project"** 클릭
3. GitHub 계정으로 로그인
4. **"New Project"** 클릭
5. 설정:
   - Name: `timeleap-korea`
   - Database Password: 안전한 비밀번호 생성 (잘 저장하기!)
   - Region: **Northeast Asia (Seoul)** 선택 ⭐ 중요!
6. **"Create new project"** 클릭
7. ⏳ 2분 정도 대기 (프로젝트 생성 중...)

### 2-2. 데이터베이스 스키마 생성
1. 왼쪽 메뉴에서 **"SQL Editor"** 클릭
2. **"+ New query"** 클릭
3. 아래 파일 내용 복사:
   `/home/claude/timeleap-korea/supabase/schema.sql`
4. SQL Editor에 붙여넣기
5. 오른쪽 아래 **"Run"** 버튼 클릭 (또는 Ctrl+Enter)
6. ✅ 성공 메시지 확인!

### 2-3. API 키 복사
1. 왼쪽 메뉴에서 **"Project Settings"** (톱니바퀴) 클릭
2. 왼쪽에서 **"API"** 클릭
3. 복사할 값 2개:
   ```
   ✅ Project URL: https://xxxxx.supabase.co
   ✅ anon public key: eyJhbGc... (긴 문자열)
   ```
4. 메모장에 잘 저장해두기!

---

## Step 3: Vercel에 배포하기 (5분)

### 3-1. Vercel 프로젝트 생성
1. https://vercel.com 접속
2. **"Start Deploying"** → GitHub 계정으로 로그인
3. **"Add New..."** → **"Project"** 클릭
4. GitHub 레포지토리 목록에서 **`timeleap-korea`** 찾기
5. **"Import"** 클릭

### 3-2. 환경 변수 설정 ⭐ 중요!
**"Configure Project" 화면에서:**

1. **"Environment Variables"** 섹션 펼치기
2. 아래 값들 추가:

#### 첫 번째 환경 변수
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: [Step 2-3에서 복사한 Project URL]
예: https://abcdefgh.supabase.co
```
✅ Production, Preview, Development **모두 체크**

#### 두 번째 환경 변수
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [Step 2-3에서 복사한 anon public key]
예: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
✅ Production, Preview, Development **모두 체크**

### 3-3. 배포 시작
1. **"Deploy"** 버튼 클릭
2. ⏳ 2-3분 대기 (빌드 중...)
3. ✅ "Congratulations!" 화면이 나오면 성공!

### 3-4. 사이트 확인
1. **"Visit"** 버튼 클릭
2. 🎉 **완료!** 사이트가 열립니다!
3. URL 예시: `https://timeleap-korea.vercel.app`

---

## Step 4: Supabase에 사이트 URL 등록하기 (2분)

### 4-1. Vercel URL 복사
- 예: `https://timeleap-korea.vercel.app`

### 4-2. Supabase 설정
1. Supabase Dashboard로 이동
2. 왼쪽 메뉴 **"Authentication"** 클릭
3. **"URL Configuration"** 탭 클릭
4. **Site URL**에 Vercel URL 입력
   - 예: `https://timeleap-korea.vercel.app`
5. **Redirect URLs**에 추가:
   ```
   https://timeleap-korea.vercel.app/*
   https://timeleap-korea.vercel.app/auth/callback
   ```
6. **"Save"** 클릭

---

## ✅ 완료 체크리스트

배포가 제대로 되었는지 확인:

- [ ] GitHub에 코드가 업로드됨
- [ ] Supabase 프로젝트 생성됨
- [ ] schema.sql 실행 성공
- [ ] Vercel 배포 성공 (초록색 체크)
- [ ] 사이트 접속 가능
- [ ] 홈페이지가 제대로 보임
- [ ] 타임라인 페이지 이동 가능
- [ ] 퀴즈 시작 가능

---

## 🎉 축하합니다!

**타임 리프 코리아가 전세계에 공개되었습니다!** 🌍

이제 제인이가 사용할 수 있어요! 🎓

### 📱 공유 링크
```
https://timeleap-korea.vercel.app
```

### 🔄 코드 수정 후 재배포
```bash
# 코드 수정 후
git add .
git commit -m "수정 내용"
git push

# 자동으로 Vercel이 재배포!
```

---

## ⚠️ 문제 해결

### 문제 1: 빌드 실패
**증상**: Vercel에서 빌드가 실패함
**해결**: 
1. Vercel 빌드 로그 확인
2. 에러 메시지 복사
3. Claude에게 에러 메시지 공유

### 문제 2: 환경 변수 에러
**증상**: "NEXT_PUBLIC_SUPABASE_URL is not defined"
**해결**:
1. Vercel → Settings → Environment Variables
2. 값이 제대로 입력되었는지 확인
3. Production, Preview, Development 모두 체크되었는지 확인
4. Redeploy 클릭

### 문제 3: 데이터베이스 연결 실패
**증상**: 사이트는 열리지만 데이터 로딩 안 됨
**해결**:
1. Supabase URL 확인
2. Anon Key 확인
3. schema.sql이 제대로 실행되었는지 확인

---

## 📞 도움이 필요하면?

에러 메시지나 스크린샷과 함께 Claude에게 물어보세요!

**화이팅! 🚀**
