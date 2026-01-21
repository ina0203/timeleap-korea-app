import { Quiz } from '@/types/quiz';

export const prehistoricQuizzes: Quiz[] = [
  // ==========================================
  // Level 1: 이야기꾼 (초등 기초)
  // ==========================================
  {
    id: 'prehistoric-lv1-001',
    era: 'prehistoric',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '구석기 시대 사람들이 주로 사용했던 도구는 무엇인가요?',
    options: ['주먹도끼', '청동검', '비파형동검', '철제 농기구'],
    correctAnswer: 0,
    explanation: '구석기 시대에는 돌을 깨뜨려 만든 뗀석기인 주먹도끼를 사용하여 사냥을 하고 열매를 땄습니다.',
    hint: '주먹을 쥐고 사용할 수 있는 도끼예요.',
    relatedConcepts: ['구석기', '뗀석기'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'prehistoric-lv1-002',
    era: 'prehistoric',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '신석기 시대 사람들이 강가에 살면서 지은 집은 무엇인가요?',
    options: ['아파트', '움집', '기와집', '초가집'],
    correctAnswer: 1,
    explanation: '신석기 시대 사람들은 농사를 짓기 위해 강가에 땅을 파고 지붕을 덮은 움집을 짓고 살았습니다.',
    hint: '땅을 움푹 파서 만든 집이에요.',
    relatedConcepts: ['신석기', '움집', '정착생활'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'prehistoric-lv1-003',
    era: 'prehistoric',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '우리 민족 최초의 나라인 고조선을 세운 분은 누구인가요?',
    options: ['이순신', '세종대왕', '단군왕검', '김구'],
    correctAnswer: 2,
    explanation: '단군왕검은 널리 인간을 이롭게 한다는 홍익인간의 뜻으로 고조선을 건국했습니다.',
    hint: '하늘님의 아들 환웅과 곰이 사람이 된 웅녀 사이에서 태어나셨어요.',
    relatedConcepts: ['고조선', '단군왕검', '홍익인간'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'prehistoric-lv1-004',
    era: 'prehistoric',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '청동기 시대의 마을 촌장님(지배자)의 무덤으로, 커다란 돌을 쌓아 만든 것은?',
    options: ['고인돌', '피라미드', '장군총', '석굴암'],
    correctAnswer: 0,
    explanation: '고인돌은 청동기 시대 지배층의 무덤입니다. 만드는 데 많은 사람이 필요했기 때문에 지배자의 힘이 셌다는 것을 알 수 있어요.',
    hint: '돌을 고여 놓았다고 해서 이름이 붙여졌어요.',
    relatedConcepts: ['청동기', '고인돌', '지배층'],
    points: 10,
    examType: 'midterm'
  },

  // ==========================================
  // Level 2: 탐험가 (중등 기초)
  // ==========================================
  {
    id: 'prehistoric-lv2-001',
    era: 'prehistoric',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '다음 중 신석기 시대의 생활 모습으로 옳은 것은?',
    options: ['동굴에서 살았다.', '농경과 목축을 시작했다.', '문자를 사용했다.', '계급이 발생했다.'],
    correctAnswer: 1,
    explanation: '신석기 시대의 가장 큰 특징은 농사와 가축 기르기를 시작했다는 점입니다. 이를 신석기 혁명이라고 합니다.',
    hint: '먹을 것을 찾아다니지 않고 생산하기 시작했어요.',
    relatedConcepts: ['신석기혁명', '농경', '목축'],
    points: 15,
    examType: 'midterm'
  },
  {
    id: 'prehistoric-lv2-002',
    era: 'prehistoric',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '고조선의 8조법을 통해 알 수 있는 당시 사회 모습이 아닌 것은?',
    options: ['생명을 중시했다.', '사유 재산이 있었다.', '신분 제도가 있었다.', '모두가 평등했다.'],
    correctAnswer: 3,
    explanation: '노비가 있었다는 조항을 통해 신분(계급)이 존재했음을 알 수 있습니다. 따라서 모두가 평등한 사회는 아니었습니다.',
    source: '중학교 역사 1',
    hint: '평등하지 않고 계급이 존재하는 사회였어요.',
    relatedConcepts: ['고조선', '8조법', '계급사회'],
    points: 15,
    examType: 'midterm'
  },
  {
    id: 'prehistoric-lv2-003',
    era: 'prehistoric',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '청동기 시대에 사용된 도구로 옳지 않은 것은?',
    options: ['반달 돌칼', '비파형 동검', '거친무늬 거울', '세형 동검'],
    correctAnswer: 3,
    explanation: '세형 동검은 철기 시대에 한반도에서 독자적으로 만들어진 청동검입니다. 청동기 시대에는 비파형 동검을 사용했습니다.',
    hint: '한반도만의 독자적인 청동검은 철기 시대에 등장해요.',
    relatedConcepts: ['청동기', '철기', '세형동검'],
    points: 15,
    examType: 'midterm'
  },

  // ==========================================
  // Level 3: 분석가 (중등 심화/고등 기초)
  // ==========================================
  {
    id: 'prehistoric-lv3-001',
    era: 'prehistoric',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 유물이 제작된 시대의 생활상으로 옳은 것은?',
    material: '(자료) 표면에 빗살무늬가 새겨진 토기 사진',
    options: ['가락바퀴를 이용하여 실을 뽑았다.', '명도전을 사용하여 중국과 교류했다.', '지배자의 무덤으로 고인돌을 축조했다.', '동굴이나 막집에서 거주했다.'],
    correctAnswer: 0,
    explanation: '제시된 자료는 신석기 시대의 빗살무늬 토기입니다. 신석기 시대에는 가락바퀴와 뼈바늘을 이용해 옷을 만들어 입었습니다.',
    imageUrl: '/images/quiz/comb_pattern_pottery.png',
    source: '2023 고1 학평 한국사',
    relatedConcepts: ['신석기', '가락바퀴', '원시수공업'],
    points: 20,
    examType: 'mock'
  },
  {
    id: 'prehistoric-lv3-002',
    era: 'prehistoric',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 나라에 대한 설명으로 옳은 것은?',
    material: '사람을 죽인 자는 사형에 처하고, 남에게 상처를 입힌 자는 곡식으로 갚게 한다. 도둑질한 자는 노비로 삼는다. 용서받고자 하는 자는 50만 전을 내야 한다.',
    options: ['10월에 무천이라는 제천 행사를 열었다.', '읍군, 삼로가 하호를 통치했다.', '왕 아래에 상, 대부, 장군 등의 관직이 있었다.', '신성 지역인 소도가 존재했다.'],
    correctAnswer: 2,
    explanation: '제시된 자료는 고조선의 8조법입니다. 고조선은 강력한 왕권을 바탕으로 상, 대부, 장군 등의 관직 체계를 갖추었습니다.',
    source: '고등학교 한국사 교과서',
    relatedConcepts: ['고조선', '관직체계'],
    points: 20,
    examType: 'midterm'
  },

  // ==========================================
  // Level 4: 전략가 (수능 실전)
  // ==========================================
  {
    id: 'prehistoric-lv4-001',
    era: 'prehistoric',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '밑줄 친 (가) 나라에 대한 설명으로 옳은 것은?',
    material: '왕은 있으나 가축의 이름을 딴 마가, 우가, 저가, 구가 등의 대가들이 있어 각기 사출도를 다스렸다.',
    options: ['1책 12법이 있었다.', '민며느리제라는 풍습이 있었다.', '낙랑과 왜에 철을 수출했다.', '책화라는 풍습이 있었다.', '동맹이라는 제천 행사를 열었다.'],
    correctAnswer: 0,
    explanation: '제시된 자료는 부여의 사출도에 대한 설명입니다. 부여에는 물건을 훔친 자에게 12배를 배상하게 하는 1책 12법이 있었습니다.',
    source: '2024학년도 수능 한국사',
    relatedConcepts: ['부여', '사출도', '1책12법'],
    points: 30,
    examType: 'csat'
  },
  {
    id: 'prehistoric-lv4-002',
    era: 'prehistoric',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '다음 풍습이 있었던 나라에 대한 설명으로 옳은 것은?',
    material: '가족이 죽으면 시체를 가매장했다가 뼈만 추려 목곽에 안치한다. 온 가족을 하나의 큰 목곽에 넣어 둔다.',
    options: ['혼인 풍습으로 민며느리제가 있었다.', '천군이 다스리는 소도가 있었다.', '대가들이 제가 회의를 통해 국가 중대사를 결정했다.', '왕 아래에 욕살, 처려근지 등의 관리를 두었다.', '다른 부족의 영역을 침범하면 배상하는 책화가 있었다.'],
    correctAnswer: 0,
    explanation: '가족 공동 무덤(골장제)은 **옥저**의 풍습입니다. 옥저는 혼인 풍습으로 **민며느리제**가 있었습니다.',
    source: '한국사능력검정시험 심화',
    relatedConcepts: ['옥저', '가족공동무덤', '민며느리제'],
    points: 30,
    examType: 'csat'
  },

  // ==========================================
  // Level 5: 마스터 (고난도/킬러)
  // ==========================================
  {
    id: 'prehistoric-lv5-001',
    era: 'prehistoric',
    level: 5,
    difficulty: 'expert',
    type: 'multiple-choice',
    question: '(가), (나) 나라에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은?',
    material: '(가) 산천을 중요시하여 산과 내마다 구분이 있어 함부로 들어가지 않는다. 이를 어기면 소나 말로 배상하게 한다.\n(나) 귀신을 믿는다. 국읍에는 한 사람을 세워 천신의 제사를 주관하게 하는데 이를 천군이라 한다.',
    options: ['ㄱ, ㄴ', 'ㄱ, ㄷ', 'ㄴ, ㄷ', 'ㄱ, ㄴ, ㄷ', 'ㄱ'],
    correctAnswer: 3,
    explanation: '(가)는 동예의 책화, (나)는 삼한의 소도/천군에 대한 설명입니다. \nㄱ. 동예의 특산물은 단궁, 과하마, 반어피가 맞습니다.\nㄴ. 삼한은 5월 수릿날, 10월 계절제를 열었습니다.\nㄷ. 동예와 삼한 모두 왕이 없는 군장 국가로 읍군, 삼로가 통치했습니다.\n따라서 정답은 ㄱ, ㄴ, ㄷ 입니다.',
    source: '평가원 모의고사 기출 변형',
    relatedConcepts: ['동예', '삼한', '책화', '제정분리'],
    points: 40,
    examType: 'csat'
  }
];
