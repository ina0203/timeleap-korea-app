import { Era, EraId } from '@/types/era';

export const ERAS_DATA: Record<EraId, Era> = {
  prehistoric: {
    id: 'prehistoric',
    name: 'Prehistoric',
    nameKr: '선사 시대',
    period: '70만년 전 ~ 기원전 2333년',
    color: '#8B7355',
    icon: '🪨',
    description: '돌을 깨서 도구를 만들고, 농사를 시작한 시대',
    keyPoints: [
      '구석기: 주먹도끼와 이동 생활',
      '신석기: 빗살무늬토기와 정착 생활',
      '청동기: 고인돌과 계급 발생',
      '고조선: 단군왕검이 세운 첫 국가'
    ],
    image: '/images/eras/prehistoric.jpg',
    unlocked: true,
    progress: 0
  },
  
  ancient: {
    id: 'ancient',
    name: 'Ancient',
    nameKr: '삼국 시대',
    period: '기원전 57년 ~ 668년',
    color: '#DC143C',
    icon: '⚔️',
    description: '고구려, 백제, 신라가 한강을 차지하기 위해 경쟁한 시대',
    keyPoints: [
      '백제: 근초고왕의 해상 무역',
      '고구려: 광개토대왕의 영토 확장',
      '신라: 진흥왕의 한강 점령',
      '가야: 철의 왕국'
    ],
    image: '/images/eras/ancient.jpg',
    unlocked: false,
    progress: 0
  },
  
  unified: {
    id: 'unified',
    name: 'Unified Silla',
    nameKr: '남북국 시대',
    period: '668년 ~ 926년',
    color: '#FFD700',
    icon: '🏛️',
    description: '통일신라와 발해가 남과 북에서 공존한 시대',
    keyPoints: [
      '신라의 삼국통일 (676년)',
      '발해: 해동성국의 번영',
      '불국사와 석굴암 건축',
      '화려한 황금 문화'
    ],
    image: '/images/eras/unified.jpg',
    unlocked: false,
    progress: 0
  },
  
  goryeo: {
    id: 'goryeo',
    name: 'Goryeo',
    nameKr: '고려 시대',
    period: '918년 ~ 1392년',
    color: '#4169E1',
    icon: '📘',
    description: '코리아(KOREA)의 이름이 시작된 귀족의 나라',
    keyPoints: [
      '왕건의 후삼국 통일',
      '팔만대장경 제작',
      '상감청자의 예술',
      '몽골 침략과 삼별초 항쟁'
    ],
    image: '/images/eras/goryeo.jpg',
    unlocked: false,
    progress: 0
  },
  
  joseon: {
    id: 'joseon',
    name: 'Joseon',
    nameKr: '조선 시대',
    period: '1392년 ~ 1910년',
    color: '#228B22',
    icon: '👑',
    description: '518년간 지속된 유교의 나라, 기록의 왕조',
    keyPoints: [
      '세종대왕의 훈민정음 창제',
      '이순신의 임진왜란 승리',
      '정조의 화성 건설',
      '실학 사상의 발전'
    ],
    image: '/images/eras/joseon.jpg',
    unlocked: false,
    progress: 0
  },
  
  modern: {
    id: 'modern',
    name: 'Modern',
    nameKr: '근대',
    period: '1876년 ~ 1945년',
    color: '#8B008B',
    icon: '🚢',
    description: '개항과 독립을 향한 투쟁의 시대',
    keyPoints: [
      '강화도조약과 개항',
      '동학농민운동',
      '일제강점기',
      '3.1운동과 독립운동'
    ],
    image: '/images/eras/modern.jpg',
    unlocked: false,
    progress: 0
  },
  
  contemporary: {
    id: 'contemporary',
    name: 'Contemporary',
    nameKr: '현대',
    period: '1945년 ~ 현재',
    color: '#FF4500',
    icon: '🇰🇷',
    description: '대한민국의 건국과 발전, 민주화의 역사',
    keyPoints: [
      '8.15 광복',
      '6.25 전쟁',
      '4.19 혁명과 민주화',
      '경제 발전과 한강의 기적'
    ],
    image: '/images/eras/contemporary.jpg',
    unlocked: false,
    progress: 0
  }
};

// 시대 순서대로 정렬된 배열
export const ERAS_ORDERED: EraId[] = [
  'prehistoric',
  'ancient',
  'unified',
  'goryeo',
  'joseon',
  'modern',
  'contemporary'
];

// 시대 이름 가져오기
export function getEraName(eraId: EraId): string {
  return ERAS_DATA[eraId].nameKr;
}

// 다음 시대 가져오기
export function getNextEra(currentEra: EraId): EraId | null {
  const currentIndex = ERAS_ORDERED.indexOf(currentEra);
  if (currentIndex === -1 || currentIndex === ERAS_ORDERED.length - 1) {
    return null;
  }
  return ERAS_ORDERED[currentIndex + 1];
}

// 이전 시대 가져오기
export function getPreviousEra(currentEra: EraId): EraId | null {
  const currentIndex = ERAS_ORDERED.indexOf(currentEra);
  if (currentIndex <= 0) {
    return null;
  }
  return ERAS_ORDERED[currentIndex - 1];
}
