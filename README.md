# 🏛️ 타임 리프 코리아 (TimeLeap Korea)

> 초등학교 3학년부터 수능까지, 재미있게 배우는 한국사 학습 플랫폼

## ✨ 주요 기능

- 📚 **7개 시대 완벽 커버**: 선사시대부터 현대까지
- 🎮 **게이미피케이션**: 레벨업, 유물 수집, 업적 시스템
- 🔄 **무한 반복 학습**: 틀린 문제는 자동으로 복습
- 🤖 **AI 역사 인물 대화**: Claude API 기반 인터랙티브 학습
- 📊 **학습 분석 리포트**: 강점/약점 파악 및 맞춤 추천
- 🎯 **5단계 레벨 시스템**: 초등부터 수능까지 단계별 학습

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/yourusername/timeleap-korea.git

# 프로젝트 디렉토리로 이동
cd timeleap-korea

# 의존성 설치
npm install
# 또는
yarn install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일을 열어 필요한 값들을 설정하세요

# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
timeleap-korea/
├── src/
│   ├── app/              # Next.js 앱 라우터
│   │   ├── page.tsx      # 메인 페이지
│   │   ├── timeline/     # 타임라인 페이지
│   │   ├── quiz/         # 퀴즈 페이지
│   │   └── dashboard/    # 대시보드 페이지
│   ├── components/       # React 컴포넌트
│   ├── lib/             # 유틸리티 및 헬퍼
│   ├── data/            # 정적 데이터 (시대, 퀴즈 등)
│   └── types/           # TypeScript 타입 정의
├── public/              # 정적 파일 (이미지, 사운드)
└── package.json
```

## 🎨 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **State Management**: Zustand
- **AI**: Anthropic Claude API
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## 📝 개발 가이드

### 새로운 시대 추가하기

1. `src/data/eras/` 에 새 시대 데이터 파일 생성
2. `src/types/era.ts` 에 EraId 타입 추가
3. 해당 시대의 퀴즈를 `src/data/quizzes/` 에 추가

### 새로운 퀴즈 추가하기

```typescript
// src/data/quizzes/joseon.ts
export const joseonQuizzes: Quiz[] = [
  {
    id: 'joseon-001',
    era: 'joseon',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '조선을 세운 왕은 누구일까요?',
    options: ['이성계', '세종대왕', '정조'],
    correctAnswer: 0,
    explanation: '이성계가 1392년에 조선을 건국했습니다.',
    points: 10,
  },
];
```

## 🌐 배포

### Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

## 📄 라이선스

MIT License

## 👥 제작팀

- 기획 & 개발: [Your Name]
- 역사 콘텐츠 감수: [Advisor Name]

## 🤝 기여하기

Pull Request는 언제나 환영입니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이메일로 연락주세요.

---

**만든 이**: 제인이를 위한 특별한 한국사 학습 플랫폼 ❤️
