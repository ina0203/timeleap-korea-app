import { Quiz } from '@/types/quiz';

export const contemporaryQuizzes: Quiz[] = [
  // ==========================================
  // Level 1: 이야기꾼 (초등 기초)
  // ==========================================
  {
    id: 'contemp-lv1-001',
    era: 'contemporary',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '1950년 6월 25일 일어난, 우리 민족의 비극적인 전쟁은?',
    options: ['6.25 전쟁 (한국 전쟁)', '임진왜란', '병자호란', '청일 전쟁'],
    correctAnswer: 0,
    explanation: '1950년 6월 25일 북한군의 기습 남침으로 시작된 6.25 전쟁은 1953년 7월 27일 정전 협정이 체결될 때까지 계속되었습니다.',
    hint: '6월 25일에 일어났어요.',
    relatedConcepts: ['6.25전쟁', '남침', '정전협정'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'contemp-lv1-002',
    era: 'contemporary',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '대한민국의 초대 대통령은 누구인가요?',
    options: ['이승만', '김구', '박정희', '김영삼'],
    correctAnswer: 0,
    explanation: '1948년 5.10 총선거로 구성된 제헌 국회에서 이승만이 초대 대통령으로 선출되었습니다.',
    hint: '우리나라 첫 번째 대통령이에요.',
    relatedConcepts: ['현대사', '제헌국회', '이승만'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'contemp-lv1-003',
    era: 'contemporary',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '1988년 서울에서 열린 세계적인 스포츠 축제는?',
    options: ['88 서울 올림픽', '2002 월드컵', '평창 동계 올림픽', '아시안 게임'],
    correctAnswer: 0,
    explanation: '1988년 서울 올림픽은 동서 화합의 장이 되었으며, 대한민국의 발전상을 세계에 알린 계기가 되었습니다. 주제가는 "손에 손잡고"였죠.',
    hint: '호돌이가 마스코트예요.',
    relatedConcepts: ['현대사', '88올림픽', '서울'],
    imageUrl: '/images/quiz/seoul_olympics.png',
    points: 10,
    examType: 'midterm'
  },

  // ==========================================
  // Level 2: 탐험가 (중등 기초)
  // ==========================================
  {
    id: 'contemp-lv2-001',
    era: 'contemporary',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '4.19 혁명의 원인이 된 사건은?',
    options: ['3.15 부정 선거', '5.18 민주화 운동', '12.12 사태', '6.29 선언'],
    correctAnswer: 0,
    explanation: '이승만 정부의 3.15 부정 선거에 항의하여 학생과 시민들이 일으킨 4.19 혁명으로 이승만 대통령이 물러나게 되었습니다.',
    hint: '선거를 조작했어요.',
    relatedConcepts: ['4.19혁명', '3.15부정선거', '민주주의'],
    points: 15,
    examType: 'midterm'
  },
  {
    id: 'contemp-lv2-002',
    era: 'contemporary',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '1970년대 박정희 정부가 농촌 근대화를 위해 추진한 운동은?',
    options: ['새마을 운동', '물산 장려 운동', '브나로드 운동', '금 모으기 운동'],
    correctAnswer: 0,
    explanation: '"잘 살아보세"라는 노래와 함께 근면, 자조, 협동 정신을 강조한 새마을 운동은 농촌의 환경 개선과 소득 증대를 목표로 했습니다.',
    hint: '초록색 깃발. 아침 청소.',
    relatedConcepts: ['박정희정부', '새마을운동', '경제개발'],
    imageUrl: '/images/quiz/saemaul_movement.png',
    points: 15,
    examType: 'midterm'
  },

  // ==========================================
  // Level 3: 분석가 (중등 심화/고등 기초)
  // ==========================================
  {
    id: 'contemp-lv3-001',
    era: 'contemporary',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 헌법이 적용된 시기의 사실로 옳은 것은?',
    material: '(자료) 대통령의 임기는 7년으로 하며 중임할 수 없다. 대통령 선거인단에서 대통령을 선출한다. (8차 개헌)',
    options: ['전두환 정부 시기이다.', '유신 헌법 시기이다.', '직선제 개헌이 이루어졌다.', '금융 실명제가 실시되었다.'],
    correctAnswer: 0,
    explanation: '7년 단임 간선제 헌법은 전두환 정부(제5공화국) 시기의 헌법입니다. 이후 6월 민주 항쟁의 결과로 5년 단임 직선제(현행 헌법)로 개정되었습니다.',
    source: '고등학교 한국사',
    relatedConcepts: ['전두환', '5공화국', '간선제'],
    points: 20,
    examType: 'midterm'
  },
  {
    id: 'contemp-lv3-002',
    era: 'contemporary',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 남북 합의서의 내용으로 옳은 것은?',
    material: '(자료) 남과 북은 서로 상대방의 체제를 인정하고 존중한다. 남과 북은 상대방을 무력으로 침략하지 않는다. ... (1991년)',
    options: ['남북 기본 합의서', '7.4 남북 공동 성명', '6.15 남북 공동 선언', '10.4 선언'],
    correctAnswer: 0,
    explanation: '1991년 노태우 정부 때 채택된 남북 기본 합의서는 남북 관계를 "나라와 나라 사이의 관계가 아닌 통일을 지향하는 잠정적 특수 관계"로 규정했습니다.',
    source: '중학교 역사 2',
    relatedConcepts: ['통일정책', '남북기본합의서', '노태우정부'],
    points: 20,
    examType: 'mock'
  },

  // ==========================================
  // Level 4: 전략가 (수능 실전)
  // ==========================================
  {
    id: 'contemp-lv4-001',
    era: 'contemporary',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '다음 민주화 운동에 대한 설명으로 옳은 것은?',
    material: '"호헌 철폐, 독재 타도!" 시민들이 거리로 쏟아져 나와 대통령 직선제 개헌을 요구하였다. 결국 정부는 6.29 선언을 발표하여 국민의 요구를 수용하였다.',
    options: ['1987년 6월 민주 항쟁이다.', '신군부의 비상계엄 확대에 반대하였다(5.18).', '장면 내각이 출범하는 계기가 되었다(4.19).', '굴욕적인 한일 국교 정상화에 반대하였다(6.3).'],
    correctAnswer: 0,
    explanation: '자료는 1987년 6월 민주 항쟁입니다. 박종철 고문 치사 사건과 4.13 호헌 조치에 분노한 국민들이 직선제 개헌을 요구했으며, 결국 6.29 선언으로 5년 단임 직선제 개헌이 이루어졌습니다.',
    source: '2024학년도 수능 한국사',
    relatedConcepts: ['6월항쟁', '직선제개헌', '박종철', '이한열'],
    points: 30,
    examType: 'csat'
  },
  {
    id: 'contemp-lv4-002',
    era: 'contemporary',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '(가) 정부의 통일 노력으로 옳은 것은?',
    material: '(가) 정부는 처음으로 남북 정상 회담을 개최하고 6.15 남북 공동 선언을 발표하였다. 또한 경의선 복원 공사, 금강산 육로 관광 등을 추진하였다.',
    options: ['김대중 정부 - 햇볕 정책', '노무현 정부 - 10.4 선언', '김영삼 정부 - 민족 공동체 통일 방안', '박정희 정부 - 7.4 남북 공동 성명'],
    correctAnswer: 0,
    explanation: '자료는 김대중 정부의 햇볕 정책과 1차 남북 정상 회담(2000)입니다. 이는 남북 화해 협력의 새 시대를 열었다는 평가를 받습니다.',
    source: '한국사능력검정시험 심화',
    relatedConcepts: ['김대중정부', '6.15선언', '남북정상회담'],
    points: 30,
    examType: 'csat'
  },

  // ==========================================
  // Level 5: 마스터 (고난도/킬러)
  // ==========================================
  {
    id: 'contemp-lv5-001',
    era: 'contemporary',
    level: 5,
    difficulty: 'expert',
    type: 'multiple-choice',
    question: '다음 경제 상황이 나타난 시기의 정부에 대한 설명으로 옳은 것은?',
    material: 'OECD(경제협력개발기구)에 가입하였다. 금융 실명제를 전격 실시하여 투명한 경제 질서를 확립하고자 하였다. 그러나 임기 말 외환 위기(IMF)를 겪었다.',
    options: ['김영삼 정부 - 역사 바로 세우기, 조선 총독부 건물 철거', '김대중 정부 - 금 모으기 운동, 노사정 위원회', '노무현 정부 - 한미 FTA 체결', '전두환 정부 - 3저 호황'],
    correctAnswer: 0,
    explanation: '자료는 김영삼 정부(문민정부)입니다. 금융 실명제, OECD 가입, 역사 바로 세우기(총독부 철거, 전두환/노태우 구속) 등을 추진했으나, IMF 외환 위기를 맞았습니다.',
    source: '수능 한국사 변형',
    relatedConcepts: ['김영삼정부', '금융실명제', 'IMF'],
    points: 40,
    examType: 'csat'
  }
];
