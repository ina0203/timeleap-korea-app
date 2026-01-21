import { Quiz } from '@/types/quiz';

export const goryeoQuizzes: Quiz[] = [
  // ==========================================
  // Level 1: 이야기꾼 (초등 기초)
  // ==========================================
  {
    id: 'goryeo-lv1-001',
    era: 'goryeo',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '후삼국을 통일하고 고려를 세운 왕은 누구인가요?',
    options: ['왕건', '궁예', '견훤', '이성계'],
    correctAnswer: 0,
    explanation: '왕건(태조)은 후고구려의 궁예를 몰아내고 고려를 세운 뒤 후삼국을 통일했습니다.',
    hint: '고려의 태조예요.',
    relatedConcepts: ['고려', '왕건', '후삼국통일'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'goryeo-lv1-002',
    era: 'goryeo',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '거란의 침입 때 말(외교)로 강동 6주를 얻어낸 고려의 장수는?',
    options: ['서희', '강감찬', '이순신', '을지문덕'],
    correctAnswer: 0,
    explanation: '서희는 거란의 장수 소손녕과 담판을 지어 싸우지 않고도 강동 6주라는 땅을 얻어냈습니다. 외교의 신이죠!',
    hint: '싸우지 않고 말로 이겼어요.',
    relatedConcepts: ['고려', '서희', '강동6주'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'goryeo-lv1-003',
    era: 'goryeo',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '세계에서 가장 오래된 금속 활자로 인쇄된 책은?',
    options: ['직지심체요절', '팔만대장경', '무구정광대다라니경', '삼국유사'],
    correctAnswer: 0,
    explanation: '직지심체요절(직지)은 서양의 구텐베르크보다 앞선 세계 최초의 금속 활자본입니다.',
    hint: '청주 흥덕사에서 인쇄되었어요.',
    relatedConcepts: ['고려', '금속활자', '직지'],
    imageUrl: '/images/quiz/jikji.png',
    points: 10,
    examType: 'midterm'
  },

  // ==========================================
  // Level 2: 탐험가 (중등 기초)
  // ==========================================
  {
    id: 'goryeo-lv2-001',
    era: 'goryeo',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '고려의 국제 무역항으로 아라비아 상인까지 왕래했던 곳은?',
    options: ['벽란도', '청해진', '부산포', '인천항'],
    correctAnswer: 0,
    explanation: '벽란도는 예성강 하구에 위치한 고려의 국제 무역항입니다. 이곳을 통해 코리아(Korea)라는 이름이 서양에 알려졌죠.',
    hint: '예성강 근처예요.',
    relatedConcepts: ['고려', '벽란도', '코리아'],
    imageUrl: '/images/quiz/byeokrando_trade.png',
    points: 15,
    examType: 'midterm'
  },
  {
    id: 'goryeo-lv2-002',
    era: 'goryeo',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '공민왕의 개혁 정치 내용으로 옳은 것은?',
    options: ['친원 세력(권문세족)을 숙청했다.', '훈민정음을 창제했다.', '수도를 수원으로 옮겼다.', '불교를 억압했다.'],
    correctAnswer: 0,
    explanation: '공민왕은 원나라의 간섭에서 벗어나기 위해 몽골풍을 금지하고 친원 세력인 기철 등을 숙청하는 반원 자주 정책을 펼쳤습니다.',
    hint: '몽골(원나라)에 반대하는 정책을 폈어요.',
    relatedConcepts: ['고려', '공민왕', '반원자주'],
    points: 15,
    examType: 'midterm'
  },

  // ==========================================
  // Level 3: 분석가 (중등 심화/고등 기초)
  // ==========================================
  {
    id: 'goryeo-lv3-001',
    era: 'goryeo',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 기구에 대한 설명으로 옳은 것은?',
    material: '(자료) 고려의 독자적인 회의 기구로, 국방과 군사 문제를 담당하던 것이 점차 국정 전반을 총괄하는 최고 기구(도평의사사)로 발전하였다.',
    options: ['도병마사', '식목도감', '중서문하성', '삼사'],
    correctAnswer: 0,
    explanation: '도병마사는 국방 문제를 담당하는 임시 기구였으나, 원 간섭기 이후 도평의사사로 개편되어 최고 정무 기구가 되었습니다. 고려 귀족 정치의 특징을 보여줍니다.',
    source: '고등학교 한국사',
    relatedConcepts: ['고려', '도병마사', '귀족정치'],
    points: 20,
    examType: 'midterm'
  },
  {
    id: 'goryeo-lv3-002',
    era: 'goryeo',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '무신 정권 시기 최충헌이 설치한 최고 권력 기구는?',
    options: ['교정도감', '정방', '삼별초', '도방'],
    correctAnswer: 0,
    explanation: '최충헌은 교정도감을 설치하여 국정을 총괄하고 반대 세력을 감시했습니다. 아들 최우는 인사 행정 기구인 정방을 설치했죠.',
    hint: '최.충.헌. 교.정.도.감.',
    relatedConcepts: ['고려', '무신정권', '최충헌', '교정도감'],
    points: 20,
    examType: 'midterm'
  },

  // ==========================================
  // Level 4: 전략가 (수능 실전)
  // ==========================================
  {
    id: 'goryeo-lv4-001',
    era: 'goryeo',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '다음 주장을 펼친 인물이 일으킨 사건에 대한 설명으로 옳은 것은?',
    material: '"서경(평양)은 풍수지리가 좋아 이곳으로 수도를 옮기면 천하를 다스릴 수 있습니다. 금나라가 항복하고 36국이 조공할 것입니다. 황제라 칭하고 독자적인 연호를 사용합시다!"',
    options: ['김부식이 이끄는 관군에 의해 진압되었다.', '개경파 문벌 귀족들이 주도하였다.', '무신 정권에 반발하여 일어났다.', '몽골의 침략에 맞서 강화도로 천도하였다.'],
    correctAnswer: 0,
    explanation: '자료는 묘청의 서경 천도 운동입니다. 묘청(서경파)은 자주적 혁신 정치를 주장했으나, 김부식(개경파)의 관군에게 진압되었습니다. 신채호는 이를 "조선 역사 일천년래 제일대 사건"이라 평가했습니다.',
    source: '2022학년도 수능 한국사',
    relatedConcepts: ['고려', '묘청', '서경천도운동'],
    points: 30,
    examType: 'csat'
  },
  {
    id: 'goryeo-lv4-002',
    era: 'goryeo',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '(가) 시기의 사회 모습으로 옳은 것은?',
    material: '몽골과 강화를 맺은 후 정부가 개경으로 환도하자, 이에 반대한 삼별초는 (  가  ) 시기에 진도와 제주도로 근거지를 옮기며 대몽 항쟁을 계속하였다.',
    options: ['쌍성총관부를 공격하여 영토를 수복하였다.', '권문세족이 대농장을 경영하고 양민을 억압하였다.', '지눌이 수선사 결사 운동을 전개하였다.', '최승로가 시무 28조를 건의하였다.'],
    correctAnswer: 1,
    explanation: '삼별초 항쟁 이후는 원 간섭기입니다. 이때 친원 세력인 권문세족이 등장하여 도평의사사를 장악하고 대농장을 경영하며 사회적 모순을 야기했습니다.',
    source: '한국사능력검정시험 심화',
    relatedConcepts: ['고려', '원간섭기', '권문세족'],
    points: 30,
    examType: 'csat'
  },

  // ==========================================
  // Level 5: 마스터 (고난도/킬러)
  // ==========================================
  {
    id: 'goryeo-lv5-001',
    era: 'goryeo',
    level: 5,
    difficulty: 'expert',
    type: 'multiple-choice',
    question: '고려의 토지 제도 변천 과정을 순서대로 바르게 나열한 것은?',
    options: ['시정 전시과 → 개정 전시과 → 경정 전시과 → 과전법', '역분전 → 시정 전시과 → 개정 전시과 → 경정 전시과', '시정 전시과 → 역분전 → 경정 전시과 → 과전법', '역분전 → 시정 전시과 → 과전법 → 직전법'],
    correctAnswer: 1,
    explanation: '고려 토지 제도는 역분전(태조, 논공행상) → 시정 전시과(경종, 인품+관품) → 개정 전시과(목종, 관품만) → 경정 전시과(문종, 현직 관리만 지급) 순서로 변천했습니다. 과전법은 고려 말 공양왕 때 시행되어 조선으로 이어집니다.',
    source: '공무원 한국사 기출 변형',
    relatedConcepts: ['고려', '전시과', '토지제도'],
    points: 40,
    examType: 'csat'
  }
];
