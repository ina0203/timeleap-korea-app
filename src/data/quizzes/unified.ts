import { Quiz } from '@/types/quiz';

export const unifiedQuizzes: Quiz[] = [
  // ==========================================
  // Level 1: 이야기꾼 (초등 기초)
  // ==========================================
  {
    id: 'unified-lv1-001',
    era: 'unified',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '신라의 삼국 통일을 완성한 왕은 누구인가요?',
    options: ['문무왕', '태조 왕건', '세종대왕', '선조'],
    correctAnswer: 0,
    explanation: '문무왕은 당나라 군대를 매소성과 기벌포에서 물리치고 676년 삼국 통일을 완성했습니다.',
    hint: '무열왕(김춘추)의 아들이에요. "나를 동해의 용이 되어 나라를 지키게 하라"는 유언을 남겼죠.',
    relatedConcepts: ['통일신라', '문무왕', '삼국통일'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'unified-lv1-002',
    era: 'unified',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '옛 고구려 땅 대홍단산(동모산)에서 발해를 세운 사람은?',
    options: ['대조영', '장보고', '왕건', '이성계'],
    correctAnswer: 0,
    explanation: '대조영은 고구려 유민을 이끌고 발해를 건국하여 고구려의 역사를 계승했습니다.',
    hint: '성이 대씨예요.',
    relatedConcepts: ['발해', '대조영', '고구려계승'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'unified-lv1-003',
    era: 'unified',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '통일신라 최고의 절로, 석가탑과 다보탑이 있는 곳은?',
    options: ['불국사', '해인사', '통도사', '송광사'],
    correctAnswer: 0,
    explanation: '불국사는 경주에 있는 통일신라의 대표적인 사찰로, 유네스코 세계문화유산입니다.',
    hint: '부처님의 나라라는 뜻을 가진 절이에요.',
    relatedConcepts: ['통일신라', '불국사', '유네스코'],
    imageUrl: '/images/quiz/bulguksa.png',
    points: 10,
    examType: 'midterm'
  },

  // ==========================================
  // Level 2: 탐험가 (중등 기초)
  // ==========================================
  {
    id: 'unified-lv2-001',
    era: 'unified',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '통일신라 신문왕의 업적으로 옳은 것은?',
    options: ['녹읍을 폐지하고 관료전을 지급했다.', '불교를 공인했다.', '한강 유역을 점령했다.', '화랑도를 개편했다.'],
    correctAnswer: 0,
    explanation: '신문왕은 귀족의 권한을 약화시키고 왕권을 강화하기 위해 귀족들의 수조권 뿐만 아니라 노동력 징발권까지 있던 녹읍을 폐지했습니다.',
    hint: '왕권 강화를 위해 귀족들의 돈주머니를 빼앗았어요.',
    relatedConcepts: ['통일신라', '신문왕', '녹읍폐지'],
    points: 15,
    examType: 'midterm'
  },
  {
    id: 'unified-lv2-002',
    era: 'unified',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '발해를 이르는 별명으로 "바다 동쪽의 융성한 나라"라는 뜻은?',
    options: ['해동성국', '동방예의지국', '고요한 아침의 나라', '황금의 나라'],
    correctAnswer: 0,
    explanation: '발해 선왕 때 전성기를 맞이하여 당나라로부터 해동성국이라 불렸습니다.',
    hint: '해동00',
    relatedConcepts: ['발해', '선왕', '해동성국'],
    points: 15,
    examType: 'midterm'
  },

  // ==========================================
  // Level 3: 분석가 (중등 심화/고등 기초)
  // ==========================================
  {
    id: 'unified-lv3-001',
    era: 'unified',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 자료를 통해 알 수 있는 사실로 옳은 것은?',
    material: '(자료) 청주 서원경 부근 4개 촌의 촌역, 인구 수, 소와 말의 수, 뽕나무·잣나무·호두나무 그루 수까지 3년마다 변동 사항을 기록하였다. (일본 정창원 소장)',
    options: ['국가가 촌락의 경제 상황을 철저히 파악하여 세금을 거두었다.', '귀족들이 대농장을 경영했다.', '화폐가 전국적으로 유통되었다.', '백성들이 자유롭게 이사할 수 있었다.'],
    correctAnswer: 0,
    explanation: '제시된 자료는 신라 촌락 문서(민정 문서)입니다. 통일신라 정부가 촌락의 인구와 생산 자원을 철저히 파악하여 조세 징수와 노동력 징발의 근거로 삼았음을 보여줍니다.',
    source: '고등학교 한국사',
    relatedConcepts: ['통일신라', '민정문서', '수취제도'],
    points: 20,
    examType: 'mock'
  },
  {
    id: 'unified-lv3-002',
    era: 'unified',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '신라 말기의 사회 모습으로 옳지 않은 것은?',
    options: ['진골 귀족들의 왕위 다툼이 치열했다.', '지방에서 호족 세력이 성장했다.', '육두품이 골품제를 비판하며 호족과 결탁했다.', '왕권이 강화되어 정치가 안정되었다.'],
    correctAnswer: 3,
    explanation: '신라 말기(하대)에는 중앙 귀족들의 왕위 쟁탈전으로 정치가 매우 혼란스러웠고, 왕권이 땅에 떨어졌습니다.',
    hint: '나라가 망하기 직전의 모습이에요.',
    relatedConcepts: ['신라말', '하대', '호족'],
    points: 20,
    examType: 'midterm'
  },

  // ==========================================
  // Level 4: 전략가 (수능 실전)
  // ==========================================
  {
    id: 'unified-lv4-001',
    era: 'unified',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '다음 인물의 활동으로 옳은 것은?',
    material: '그는 완도에 청해진을 설치하여 해적을 소탕하고 서해와 남해의 해상권을 장악하였다. 당, 신라, 일본을 잇는 해상 무역을 주도하였다.',
    options: ['장보고', '최치원', '원효', '의상', '대조영'],
    correctAnswer: 0,
    explanation: '장보고는 청해진을 거점으로 해상 무역왕으로 활약했습니다. 나중에 자신의 딸을 왕비로 만들려다 암살당했죠.',
    source: '2023 고2 학평 한국사',
    relatedConcepts: ['통일신라', '장보고', '청해진'],
    imageUrl: '/images/quiz/cheonghaejin.png',
    points: 30,
    examType: 'csat'
  },
  {
    id: 'unified-lv4-002',
    era: 'unified',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '(가) 국가에 대한 설명으로 옳은 것은?',
    material: '(가)의 3대 문왕은 당의 제도를 수용하여 3성 6부를 정비하였으나, 독자적인 명칭을 사용하였다. 정당성의 장관인 대내상이 국정을 총괄하였다.',
    options: ['9서당 10정을 운영하였다.', '지방을 5경 15부 62주로 나누었다.', '2성 6부제를 실시하였다.', '제가 회의에서 국가 중대사를 결정하였다.'],
    correctAnswer: 1,
    explanation: '자료는 발해의 통치 체제입니다. 발해는 선왕 때 지방 행정 구역을 5경 15부 62주로 정비하였습니다. 1번은 통일신라, 3번은 고려, 4번은 고구려에 대한 설명입니다.',
    source: '한국사능력검정시험 심화',
    relatedConcepts: ['발해', '3성6부', '5경15부62주'],
    points: 30,
    examType: 'csat'
  },

  // ==========================================
  // Level 5: 마스터 (고난도/킬러)
  // ==========================================
  {
    id: 'unified-lv5-001',
    era: 'unified',
    level: 5,
    difficulty: 'expert',
    type: 'multiple-choice',
    question: '다음 승려들의 주장에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은?',
    material: '(가) "모든 것은 마음먹기에 달렸다(일체유심조). 아미타불만 외치면 누구나 극락에 갈 수 있다." (아미타 신앙)\n(나) "하나 안에 전체가 있고 전체 안에 하나가 있다(일즉다 다즉일)." (화엄 사상)',
    options: ['(가) - 원효는 불교의 대중화에 기여하였다.', '(나) - 의상은 관세음보살을 믿는 현세 기복적 신앙(관음 신앙)을 이끌었다.', '(가), (나) - 두 사람 모두 당나라에 유학하였다.', 'ㄱ, ㄴ', 'ㄱ, ㄷ', 'ㄴ, ㄷ', 'ㄱ, ㄴ, ㄷ'],
    correctAnswer: 0,
    explanation: 'ㄱ. 원효는 무애가를 부르며 불교 대중화에 힘썼습니다. (O)\nㄴ. 의상은 화엄종을 개창하고 관음 신앙을 전파했습니다. (O)\nㄷ. 의상은 당나라 유학을 다녀왔으나, 원효는 해골물을 마시고 깨달음을 얻어 유학을 포기했습니다. (X)\n따라서 정답은 ㄱ, ㄴ 입니다.',
    source: '수능 한국사 변형',
    relatedConcepts: ['통일신라', '불교', '원효', '의상'],
    points: 40,
    examType: 'csat'
  }
];
