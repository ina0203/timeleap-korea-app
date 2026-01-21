import { Quiz } from '@/types/quiz';

export const ancientQuizzes: Quiz[] = [
  // ==========================================
  // Level 1: 이야기꾼 (초등 기초)
  // ==========================================
  {
    id: 'ancient-lv1-001',
    era: 'ancient',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '다음 중 삼국 시대에 포함되지 않는 나라는?',
    options: ['고구려', '백제', '신라', '조선'],
    correctAnswer: 3,
    explanation: '삼국 시대는 고구려, 백제, 신라 세 나라가 경쟁하던 시기입니다. 조선은 훨씬 나중에 세워진 나라예요.',
    hint: '가장 최근에 있었던 나라예요.',
    relatedConcepts: ['삼국시대', '조선'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'ancient-lv1-002',
    era: 'ancient',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '넓은 만주 벌판을 누비며 고구려의 땅을 크게 넓힌 왕은?',
    options: ['광개토대왕', '세종대왕', '정조', '무열왕'],
    correctAnswer: 0,
    explanation: '광개토대왕은 활발한 정복 활동으로 고구려의 영토를 크게 넓혔습니다.',
    hint: '이름에 "땅을 넓게 열었다"는 뜻이 담겨 있어요.',
    relatedConcepts: ['고구려', '광개토대왕', '정복활동'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'ancient-lv1-003',
    era: 'ancient',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '신라의 청소년 단체로, 몸과 마음을 단련하여 삼국 통일의 주역이 된 사람들은?',
    options: ['화랑도', '보이스카우트', '별무반', '삼별초'],
    correctAnswer: 0,
    explanation: '화랑도는 신라의 청소년 단체로, 김유신과 같은 훌륭한 인재들을 많이 배출했습니다.',
    hint: '꽃처럼 아름다운 남성들이라는 뜻이에요.',
    relatedConcepts: ['신라', '화랑도'],
    points: 10,

    examType: 'midterm'
  },
  {
    id: 'ancient-lv1-004',
    era: 'ancient',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '다음 사진의 건축물은 신라 선덕여왕 때 만들어진 동양에서 가장 오래된 천문대입니다. 무엇일까요?',
    options: ['첨성대', '석굴암', '불국사', '다보탑'],
    correctAnswer: 0,
    explanation: '첨성대(국보 제31호)는 별을 관측하기 위해 지은 건축물로, 신라의 뛰어난 과학 기술을 보여줍니다.',
    hint: '경주에 있는 병 모양의 돌탑이에요.',
    imageUrl: '/images/quiz/cheomseongdae.png',
    relatedConcepts: ['신라', '선덕여왕', '첨성대'],
    points: 10,
    examType: 'midterm'
  },

  // ==========================================
  // Level 2: 탐험가 (중등 기초)
  // ==========================================
  {
    id: 'ancient-lv2-001',
    era: 'ancient',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '백제의 전성기를 이끈 왕으로, 일본, 중국과 활발히 교류한 왕은?',
    options: ['근초고왕', '무수왕', '성왕', '의자왕'],
    correctAnswer: 0,
    explanation: '근초고왕은 4세기 백제의 전성기를 이끌었습니다. 마한의 남은 세력을 복속하고 고구려의 평양성을 공격했으며, 중국 요서 지방과 일본 규슈까지 진출했습니다.',
    hint: '백제의 최고 전성기, 4세기 왕이에요.',
    relatedConcepts: ['백제', '근초고왕', '해상진출'],
    points: 15,
    examType: 'midterm'
  },
  {
    id: 'ancient-lv2-002',
    era: 'ancient',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '다음 중 신라 진흥왕의 업적이 아닌 것은?',
    options: ['화랑도를 국가적 조직으로 개편했다.', '대가야를 정복했다.', '한강 유역을 차지했다.', '살수대첩에서 승리했다.'],
    correctAnswer: 3,
    explanation: '살수대첩은 고구려의 을지문덕 장군이 수나라 군대를 물리친 전투입니다.',
    hint: '고구려와 수나라의 전쟁 이야기예요.',
    relatedConcepts: ['신라', '진흥왕', '한강차지'],
    points: 15,
    examType: 'midterm'
  },

  // ==========================================
  // Level 3: 분석가 (중등 심화/고등 기초)
  // ==========================================
  {
    id: 'ancient-lv3-001',
    era: 'ancient',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 주장을 펼친 인물에 대한 설명으로 옳은 것은?',
    material: '(자료) "신라의 관등 제도는 골품에 따라 엄격하게 제한되어 있다. 나는 6두품으로 태어나 아무리 능력이 뛰어나도 아찬 이상의 벼슬에 오를 수 없으니 원통하도다!"',
    options: ['골품제 유지를 주장했다.', '당나라에 유학하여 빈공과에 합격한 사람이 많았다.', '화랑도를 창설했다.', '불교를 공인했다.'],
    correctAnswer: 1,
    explanation: '자료는 신라의 골품제, 특히 6두품의 불만을 보여줍니다. 6두품은 능력은 뛰어나지만 신분 제약으로 관직 승진에 한계가 있어, 당나라로 유학을 떠나거나(최치원 등) 반신라 세력이 되기도 했습니다.',
    source: '중학교 역사 2',
    relatedConcepts: ['신라', '골품제', '6두품'],
    points: 20,
    examType: 'midterm'
  },
  {
    id: 'ancient-lv3-002',
    era: 'ancient',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 비석이 세워진 시기의 역사적 사실로 옳은 것은?',
    material: '(사진) 북한산 진흥왕 순수비 - "왕이 한강 유역을 순시하고 영토 확장을 기념하여 세웠다."',
    options: ['백제가 웅진으로 천도했다.', '고구려가 평양으로 수도를 옮겼다.', '신라가 한강 유역을 장악하고 중국과 직접 교류했다.', '가야 연맹이 금관가야를 중심으로 뭉쳤다.'],
    correctAnswer: 2,
    explanation: '진흥왕 순수비는 신라가 한강 유역을 차지했음을 보여줍니다. 이로써 신라는 당항성을 통해 중국과 직접 교류할 수 있는 발판을 마련했습니다.',
    source: '고등학교 한국사',
    relatedConcepts: ['신라', '진흥왕순수비', '한강장악'],
    points: 20,
    examType: 'mock'
  },

  // ==========================================
  // Level 4: 전략가 (수능 실전)
  // ==========================================
  {
    id: 'ancient-lv4-001',
    era: 'ancient',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '(가) 왕의 재위 기간에 있었던 사실로 옳은 것은?',
    material: '왕이 군사 3만 명을 거느리고 백제를 공격하여 수도 한성을 함락시켰다. 백제 왕 괴로가 아차성 밑으로 잡혀와 죽임을 당했다.',
    options: ['평양으로 수도를 옮겼다.', '을지문덕이 살수에서 수의 군대를 물리쳤다.', '낙랑군을 축출하였다.', '태학을 설립하여 인재를 양성하였다.', '서안평을 점령하였다.'],
    correctAnswer: 0,
    explanation: '제시된 자료는 고구려 장수왕의 한강 유역 점령(남진 정책)과 관련된 내용입니다. 장수왕은 국내성에서 평양성으로 수도를 옮기고(427), 남진 정책을 추진하여 백제 한성을 함락시켰습니다.',
    source: '2022학년도 수능 한국사',
    relatedConcepts: ['고구려', '장수왕', '남진정책', '평양천도'],
    points: 30,
    examType: 'csat'
  },
  {
    id: 'ancient-lv4-002',
    era: 'ancient',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '다음 사건이 일어난 시기를 연표에서 옳게 고른 것은?',
    material: '백제 왕이 평양성을 공격하다가 화살에 맞아 서거하였다. (고국원왕 전사)\n----------(시 간 경 과)----------\n신라 왕이 백제 왕과 연합하여 한강 하류를 차지하였다. (성왕 전사)',
    options: ['4세기 ~ 6세기', '3세기 ~ 4세기', '5세기 ~ 7세기', '6세기 ~ 7세기'],
    correctAnswer: 0,
    explanation: '첫 번째 사건은 근초고왕의 평양성 공격(371, 4세기), 두 번째 사건은 진흥왕과 성왕의 한강 점령(551, 6세기)입니다. 따라서 4세기와 6세기 사이의 일을 묻는 문제입니다. 고구려의 전성기(5세기)가 들어가야 합니다.',
    source: '고등학교 한국사 평가문제',
    relatedConcepts: ['삼국항쟁', '세기별전성기'],
    points: 30,
    examType: 'csat'
  },

  // ==========================================
  // Level 5: 마스터 (고난도/킬러)
  // ==========================================
  {
    id: 'ancient-lv5-001',
    era: 'ancient',
    level: 5,
    difficulty: 'expert',
    type: 'multiple-choice',
    question: '다음 문화유산에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은?',
    material: '(가) 무령왕릉 (백제)\n(나) 천마총 (신라)',
    options: ['(가) - 벽돌로 쌓은 무덤으로 중국의 영향을 받았다.', '(나) - 돌무지 덧널무덤으로 도굴이 어려워 많은 부장품이 출토되었다.', '(가) - 무덤의 주인을 알 수 있는 지석이 발견되었다.', 'ㄱ, ㄴ', 'ㄱ, ㄷ', 'ㄴ, ㄷ', 'ㄱ, ㄴ, ㄷ'],
    correctAnswer: 3,
    explanation: 'ㄱ. 무령왕릉은 중국 남조(양나라)의 영향을 받은 벽돌무덤입니다. (O)\nㄴ. 천마총은 신라의 대표적인 돌무지 덧널무덤입니다. (O)\nㄷ. 무령왕릉에서는 묘지석(지석)이 발견되어 피장자와 연대를 정확히 알 수 있는 유일한 백제 왕릉입니다. (O)\n따라서 정답은 ㄱ, ㄴ, ㄷ 모두 옳습니다.',
    source: '한국사능력검정시험 심화',
    relatedConcepts: ['고분', '무령왕릉', '천마총'],
    points: 40,
    examType: 'csat'
  }
];
