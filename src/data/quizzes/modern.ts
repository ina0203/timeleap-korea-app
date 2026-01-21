import { Quiz } from '@/types/quiz';

export const modernQuizzes: Quiz[] = [
  // ==========================================
  // Level 1: 이야기꾼 (초등 기초)
  // ==========================================
  {
    id: 'modern-lv1-001',
    era: 'modern',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '1919년 3월 1일, 우리 민족이 일제의 지배에 저항하며 외친 말은?',
    options: ['대한 독립 만세', '새해 복 많이 받세요', '부자 되세요', '안녕하세요'],
    correctAnswer: 0,
    explanation: '3.1 운동 때 남녀노소 할 것 없이 거리로 나와 태극기를 흔들며 "대한 독립 만세"를 외쳤습니다.',
    hint: '유관순 열사가 외친 말이에요.',
    relatedConcepts: ['3.1운동', '유관순', '독립만세'],
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'modern-lv1-002',
    era: 'modern',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '하얼빈 역에서 침략의 원흉 이토 히로부미를 처단한 의사는?',
    options: ['안중근', '윤봉길', '이봉창', '김구'],
    correctAnswer: 0,
    explanation: '안중근 의사는 하얼빈 역에서 이토 히로부미를 사살하여 우리 민족의 독립 의지를 세계에 알렸습니다.',
    hint: '단지 동맹. 하얼빈.',
    relatedConcepts: ['안중근', '하얼빈의거'],
    imageUrl: '/images/quiz/an_jung_geun_harbin.png',
    points: 10,
    examType: 'midterm'
  },
  {
    id: 'modern-lv1-003',
    era: 'modern',
    level: 1,
    difficulty: 'easy',
    type: 'multiple-choice',
    question: '우리나라 최초의 근대적 조약으로, 부산 등 3개 항구를 열게 된 조약은?',
    options: ['강화도 조약', '을사늑약', '한일 병합 조약', '텐진 조약'],
    correctAnswer: 0,
    explanation: '강화도 조약은 일본의 강요로 맺어진 불평등 조약이지만, 이를 통해 조선은 문호를 개방하게 되었습니다.',
    hint: '강화도에서 맺었어요.',
    relatedConcepts: ['개항', '강화도조약', '불평등조약'],
    points: 10,
    examType: 'midterm'
  },

  // ==========================================
  // Level 2: 탐험가 (중등 기초)
  // ==========================================
  {
    id: 'modern-lv2-001',
    era: 'modern',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '동학 농민 운동 때 농민들이 외친 구호로 알맞은 것은?',
    options: ['보국안민, 제폭구민', '왕후장상의 씨가 따로 있나', '잘 살아 보세', '독재 타도'],
    correctAnswer: 0,
    explanation: '동학 농민군(전봉준)은 나라는 지키고 백성을 편안하게 하며(보국안민), 폭정을 일삼는 탐관오리를 몰아내고 백성을 구하겠다(제폭구민)고 주장했습니다.',
    hint: '나라를 돕고 백성을 편안하게 한다.',
    relatedConcepts: ['동학농민운동', '전봉준', '반봉건반외세'],
    points: 15,
    examType: 'midterm'
  },
  {
    id: 'modern-lv2-002',
    era: 'modern',
    level: 2,
    difficulty: 'medium',
    type: 'multiple-choice',
    question: '일제가 우리 외교권을 빼앗고 통감부를 설치한 조약은?',
    options: ['을사늑약', '정미 7조약', '한일 의정서', '기유각서'],
    correctAnswer: 0,
    explanation: '1905년 일제는 강제로 을사늑약을 체결하여 우리의 외교권을 박탈했습니다. 이에 민영환이 자결하고 의병이 일어나는 등 거센 저항이 있었습니다.',
    hint: '1905년. 외교권 박탈.',
    relatedConcepts: ['을사늑약', '국권피탈', '외교권'],
    points: 15,
    examType: 'midterm'
  },

  // ==========================================
  // Level 3: 분석가 (중등 심화/고등 기초)
  // ==========================================
  {
    id: 'modern-lv3-001',
    era: 'modern',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '다음 단체에 대한 설명으로 옳은 것은?',
    material: '(자료) 안창호, 양기탁 등이 비밀리에 조직하였다. 공화정 수립을 목표로 하였으며 대성학교와 오산학교를 세워 인재를 양성하고, 해외에 독립군 기지 건설을 추진하였다.',
    options: ['신민회', '독립협회', '신간회', '보안회'],
    correctAnswer: 0,
    explanation: '신민회는 비밀 결사 단체로 공화정을 지향했습니다. 애국 계몽 운동(실력 양성)뿐만 아니라 만주 삼원보에 신흥무관학교를 세우는 등 무장 투쟁 준비도 함께 했습니다.',
    source: '고등학교 한국사',
    relatedConcepts: ['신민회', '공화정', '비밀결사'],
    points: 20,
    examType: 'mock'
  },
  {
    id: 'modern-lv3-002',
    era: 'modern',
    level: 3,
    difficulty: 'hard',
    type: 'multiple-choice',
    question: '1920년대 일제의 식민 통치 방식(문화 통치)의 내용이 아닌 것은?',
    options: ['헌병 경찰제를 보통 경찰제로 바꾸었다.', '치안 유지법을 제정하여 독립운동을 탄압했다.', '회사령을 허가제에서 신고제로 바꾸었다.', '조선 태형령을 제정하여 한국인을 때렸다.'],
    correctAnswer: 3,
    explanation: '조선 태형령은 1910년대 무단 통치 시기의 악법입니다. 3.1 운동 이후 문화 통치 시기에는 태형령이 폐지되었습니다.',
    source: '중학교 역사 2',
    relatedConcepts: ['일제강점기', '통치방식', '무단통치', '문화통치'],
    points: 20,
    examType: 'midterm'
  },

  // ==========================================
  // Level 4: 전략가 (수능 실전)
  // ==========================================
  {
    id: 'modern-lv4-001',
    era: 'modern',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '다음 선언이 발표된 운동에 대한 설명으로 옳은 것은?',
    material: '"우리는 이에 우리 조선이 독립국임과 조선인이 자주민임을 선언하노라. ... 최후의 일인까지, 최후의 일각까지 민족의 정당한 의사를 쾌히 발표하라."',
    options: ['대한민국 임시 정부 수립의 계기가 되었다.', '순종의 인산일을 기해 전개되었다(6.10).', '신간회의 지원을 받아 전국으로 확산되었다(광주 학생 항일).', '러시아의 절영도 조차 요구를 저지하였다(독립협회).'],
    correctAnswer: 0,
    explanation: '자료는 기미 독립 선언서입니다. 3.1 운동(1919)은 전 민족적 항일 운동으로, 그 결과 독립 운동을 체계적으로 이끌 지도부의 필요성이 제기되어 대한민국 임시 정부가 수립되었습니다.',
    source: '2024학년도 수능 한국사',
    relatedConcepts: ['3.1운동', '기미독립선언서', '임시정부'],
    imageUrl: '/images/quiz/march_first_movement.png',
    points: 30,
    examType: 'csat'
  },
  {
    id: 'modern-lv4-002',
    era: 'modern',
    level: 4,
    difficulty: 'suneung',
    type: 'multiple-choice',
    question: '밑줄 친 (단체)의 활동으로 옳은 것은?',
    material: '비타협적 민족주의 세력과 사회주의 세력이 연합하여 (단체)를 창립하였다. 이상재를 회장으로 추대하고 "기회주의 배격, 민족 단결"을 강령으로 내세웠다.',
    options: ['광주 학생 항일 운동에 진상 조사단을 파견하였다.', '고종 강제 퇴위 반대 운동을 주도하였다(대한 자강회).', '만민 공동회를 개최하였다(독립협회).', '파리 강화 회의에 김규식을 파견하였다(신한 청년당/임정).'],
    correctAnswer: 0,
    explanation: '자료는 좌우 합작 단체인 신간회(1927)입니다. 신간회는 광주 학생 항일 운동(1929)이 일어나자 진상 조사단을 파견하고 민중 대회를 계획하는 등 적극적으로 지원했습니다.',
    source: '한국사능력검정시험 심화',
    relatedConcepts: ['신간회', '좌우합작', '광주학생항일운동'],
    points: 30,
    examType: 'csat'
  },

  // ==========================================
  // Level 5: 마스터 (고난도/킬러)
  // ==========================================
  {
    id: 'modern-lv5-001',
    era: 'modern',
    level: 5,
    difficulty: 'expert',
    type: 'multiple-choice',
    question: '대한민국 임시 정부의 활동을 시기 순으로 바르게 나열한 것은?',
    material: '(가) 한국광복군 창설 (나) 한인애국단 조직 (다) 국민대표 회의 개최 (라) 건국 강령 발표',
    options: ['(다) → (나) → (가) → (라)', '(다) → (나) → (라) → (가)', '(나) → (다) → (가) → (라)', '(가) → (다) → (나) → (라)'],
    correctAnswer: 0,
    explanation: '(다) 국민대표 회의(1923, 임정의 침체기) → (나) 한인애국단(1931, 이봉창/윤봉길 의거로 활기) → 충칭 정착(1940) 후 (가) 한국광복군 창설(1940) → (라) 건국 강령 발표(1941, 조소앙 삼균주의).',
    source: '공무원 한국사 기출',
    relatedConcepts: ['임시정부', '한국광복군', '한인애국단'],
    points: 40,
    examType: 'csat'
  }
];
