import { Quiz } from '@/types/quiz';

export const joseonQuizzes: Quiz[] = [
  // ==========================================
  // Level 1: 이야기꾼 (초등 기초)
  // ==========================================
  {
    id: 'joseon-lv1-001',
    era: 'joseon',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '백성들이 글을 몰라 어려움을 겪는 것을 보고 훈민정음(한글)을 만든 왕은?',
    options: ['세종대왕', '태조 이성계', '연산군', '광해군'],
    correctAnswer: 0,
    explanation: '세종대왕은 백성을 사랑하는 마음(애민 정신)으로 우리 고유의 문자인 훈민정음을 창제했습니다.',
    hint: '만원권 지폐에 있는 왕이에요.',
    relatedConcepts: ['조선', '세종대왕', '훈민정음'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'joseon-lv1-002',
    era: 'joseon',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '임진왜란 때 거북선과 판옥선으로 일본군을 무찌른 장군은?',
    options: ['이순신', '권율', '곽재우', '신립'],
    correctAnswer: 0,
    explanation: '이순신 장군은 명량대첩, 한산도대첩 등에서 큰 승리를 거두어 바람 앞의 등불 같던 조선을 구했습니다.',
    hint: '나의 죽음을 적에게 알리지 말라.',
    relatedConcepts: ['조선', '이순신', '임진왜란'],
    imageUrl: '/images/quiz/turtle_ship.png',
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'joseon-lv1-003',
    era: 'joseon',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '조선 후기 김홍도와 신윤복이 그린, 평범한 사람들의 생활 모습을 담은 그림은?',
    options: ['풍속화', '산수화', '사군자', '초상화'],
    correctAnswer: 0,
    explanation: '풍속화는 서당, 씨름, 빨래터 등 당시 사람들의 생활 모습을 생생하고 재미있게 그린 그림입니다.',
    hint: '생활 풍습을 그린 그림이에요.',
    relatedConcepts: ['조선후기', '풍속화'],
    points: 10,
    examType: 'midterm'
  },

  // ==========================================
  // Level 2: 탐험가 (중등 기초)
  // ==========================================
  {
    id: 'joseon-lv2-001',
    era: 'joseon',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '조선의 최고 행정 기구로, 3정승(영의정, 좌의정, 우의정)이 모여 나랏일을 의논한 곳은?',
    options: ['의정부', '6조', '승정원', '의금부'],
    correctAnswer: 0,
    explanation: '의정부는 조선의 최고 정책 심의 기구로, 재상들이 합의하여 국정을 총괄했습니다.',
    hint: '지금의 국무회의와 비슷해요.',
    relatedConcepts: ['조선', '의정부', '통치체제'],
    points: 15,
    examType: 'midterm'
  },
  {
    id: 'joseon-lv2-002',
    era: 'joseon',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '조선 후기 집집마다 내던 특산물(공납)을 토지 결수에 따라 쌀로 통일하여 내게 한 제도는?',
    options: ['대동법', '영정법', '균역법', '호포법'],
    correctAnswer: 0,
    explanation: '대동법은 특산물 납부의 폐단을 막기 위해 경기도에서 처음 실시되었습니다. 이로 인해 공인이라는 어용 상인이 등장하여 상업이 발달했습니다.',
    hint: '공납의 개혁. 쌀로 대신 낸다. 대.동.법.',
    relatedConcepts: ['조선후기', '대동법', '경제'],
    points: 15,
    examType: 'midterm'
  },

  // ==========================================
  // Level 3: 분석가 (중등 심화/고등 기초)
  // ==========================================
  {
    id: 'joseon-lv3-001',
    era: 'joseon',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 왕의 업적으로 옳은 것은?',
    material: '(왕) "붕당의 폐해가 요즘보다 심한 적이 없었다. 이제부터 탕평비를 세우고 인재를 고루 등용하여 붕당 간의 다툼을 막도록 하라!"',
    options: ['영조 - 탕평책 실시, 균역법 시행', '정조 - 수원 화성 축조, 장용영 설치', '성종 - 경국대전 완성', '광해군 - 중립 외교'],
    correctAnswer: 0,
    explanation: '자료는 영조의 탕평책 선언입니다. 영조는 탕평비를 세우고, 군포 부담을 줄여주는 균역법을 실시했으며, 가혹한 형벌을 금지했습니다.',
    source: '고등학교 한국사',
    relatedConcepts: ['조선', '영조', '탕평책'],
    points: 20,
    examType: 'midterm'
  },
  {
    id: 'joseon-lv3-002',
    era: 'joseon',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '조선의 언론 3사로, 왕권을 견제하고 관리의 비리를 감찰하는 기능을 담당한 기구들이 바르게 짝지어진 것은?',
    options: ['사헌부, 사간원, 홍문관', '의정부, 6조, 승정원', '춘추관, 성균관, 한성부', '비변사, 교정도감, 도평의사사'],
    correctAnswer: 0,
    explanation: '사헌부(감찰), 사간원(간쟁), 홍문관(자문)은 3사라 불리며 언론 기능을 담당하고 권력 독점을 막았습니다.',
    source: '중학교 역사 2',
    relatedConcepts: ['조선', '3사', '언론기구'],
    points: 20,
    examType: 'midterm'
  },

  // ==========================================
  // Level 4: 전략가 (수능 실전)
  // ==========================================
  {
    id: 'joseon-lv4-001',
    era: 'joseon',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '다음 사건에 대한 설명으로 옳은 것은?',
    material: '평안도 사람들에 대한 차별 대우와 세도 정치의 수탈에 반발하여 몰락 양반 홍경래가 평안도 가산에서 난을 일으켰다. 이들은 청천강 이북 지역을 장악했으나 결국 정주성에서 진압되었다.',
    options: ['삼정이정청이 설치되는 계기가 되었다.', '서북인에 대한 차별이 원인이었다.', '동학 농민 운동에 영향을 주었다.', '집강소를 설치하여 폐정 개혁안을 실천했다.'],
    correctAnswer: 1,
    explanation: '자료는 1811년 일어난 홍경래의 난입니다. 평안도(서북) 지역에 대한 차별과 세도 정치의 수탈이 원인이었습니다. 삼정이정청 설치는 임술 농민 봉기(1862)의 결과입니다.',
    source: '2023학년도 수능 한국사',
    relatedConcepts: ['조선후기', '홍경래의난', '민란'],
    points: 30,
    examType: 'csat'
  },
  {
    id: 'joseon-lv4-002',
    era: 'joseon',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '밑줄 친 (왕)의 정책으로 옳은 것은?',
    material: '(왕)이 화성을 행차할 때 한강을 건너기 위해 배다리를 놓았다. 그는 초계문신제를 실시하여 젊은 관리들을 재교육하고, 자신의 친위 부대인 장용영을 육성하여 왕권을 강화하였다.',
    options: ['대전회통을 편찬하였다.', '금난전권을 폐지하였다(신해통공).', '백두산 정계비를 세웠다.', '나선 정벌을 단행하였다.'],
    correctAnswer: 1,
    explanation: '자료의 주인공은 정조입니다. 정조는 육의전을 제외한 시전 상인의 특권(금난전권)을 폐지하여 자유로운 상업 활동을 허용하는 신해통공을 단행했습니다.',
    source: '한국사능력검정시험 심화',
    relatedConcepts: ['조선', '정조', '신해통공'],
    points: 30,
    examType: 'csat'
  },

  // ==========================================
  // Level 5: 마스터 (고난도/킬러)
  // ==========================================
  {
    id: 'joseon-lv5-001',
    era: 'joseon',
    level: 5,
    difficulty: 'expert',
    type: 'multiple-choice',
    question: '다음은 조선 후기 붕당 정치의 전개 과정이다. (가)에 들어갈 내용으로 가장 적절한 것은?',
    material: '동인과 서인의 분당 → ( 가 ) → 예송 논쟁 → 경신환국(일당 전제화)',
    options: ['북인이 광해군 때 집권하여 중립 외교를 펼쳤다.', '남인이 인조반정으로 몰락하였다.', '노론과 소론이 대립하였다.', '사림이 훈구 세력에 의해 화를 입었다(사화).'],
    correctAnswer: 0,
    explanation: '동인과 서인의 분당(선조) 이후, 광해군 때는 북인이 집권했습니다. 인조반정으로 북인은 몰락하고 서인이 주도하는 가운데 남인이 공존하는 체제가 형성되었고, 이후 효종 사후 예송 논쟁이 발생했습니다. 노론/소론 분열은 경신환국 이후입니다.',
    source: '평가원 모의고사 기출',
    relatedConcepts: ['조선', '붕당정치', '예송논쟁'],
    points: 40,
    examType: 'csat'
  }
];
