// 서양 별자리(Western Zodiac) 데이터 & 계산

export type ZodiacElement = '불' | '흙' | '공기' | '물'
export type ZodiacModality = '활동' | '고정' | '변통'

export interface ZodiacSign {
  name: string         // 한국어 이름
  english: string      // 영문명
  symbol: string       // 유니코드 심볼
  emoji: string        // 이모지
  startMonth: number
  startDay: number
  endMonth: number
  endDay: number
  element: ZodiacElement
  modality: ZodiacModality
  rulingPlanet: string // 지배 행성
  traits: string[]     // 주요 특성 키워드
  dateRange: string    // 표시용 날짜 범위
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: '양자리', english: 'Aries', symbol: '♈', emoji: '🐏',
    startMonth: 3, startDay: 21, endMonth: 4, endDay: 19,
    element: '불', modality: '활동', rulingPlanet: '화성',
    traits: ['용감함', '주도적', '열정적', '솔직함'],
    dateRange: '3월 21일 – 4월 19일',
  },
  {
    name: '황소자리', english: 'Taurus', symbol: '♉', emoji: '🐂',
    startMonth: 4, startDay: 20, endMonth: 5, endDay: 20,
    element: '흙', modality: '고정', rulingPlanet: '금성',
    traits: ['인내심', '현실적', '충실함', '감각적'],
    dateRange: '4월 20일 – 5월 20일',
  },
  {
    name: '쌍둥이자리', english: 'Gemini', symbol: '♊', emoji: '👯',
    startMonth: 5, startDay: 21, endMonth: 6, endDay: 20,
    element: '공기', modality: '변통', rulingPlanet: '수성',
    traits: ['호기심', '적응력', '소통', '다재다능'],
    dateRange: '5월 21일 – 6월 20일',
  },
  {
    name: '게자리', english: 'Cancer', symbol: '♋', emoji: '🦀',
    startMonth: 6, startDay: 21, endMonth: 7, endDay: 22,
    element: '물', modality: '활동', rulingPlanet: '달',
    traits: ['직관적', '보호적', '감수성', '가족애'],
    dateRange: '6월 21일 – 7월 22일',
  },
  {
    name: '사자자리', english: 'Leo', symbol: '♌', emoji: '🦁',
    startMonth: 7, startDay: 23, endMonth: 8, endDay: 22,
    element: '불', modality: '고정', rulingPlanet: '태양',
    traits: ['카리스마', '관대함', '창의성', '자신감'],
    dateRange: '7월 23일 – 8월 22일',
  },
  {
    name: '처녀자리', english: 'Virgo', symbol: '♍', emoji: '🌾',
    startMonth: 8, startDay: 23, endMonth: 9, endDay: 22,
    element: '흙', modality: '변통', rulingPlanet: '수성',
    traits: ['분석적', '꼼꼼함', '실용적', '봉사정신'],
    dateRange: '8월 23일 – 9월 22일',
  },
  {
    name: '천칭자리', english: 'Libra', symbol: '♎', emoji: '⚖️',
    startMonth: 9, startDay: 23, endMonth: 10, endDay: 22,
    element: '공기', modality: '활동', rulingPlanet: '금성',
    traits: ['공정함', '외교적', '심미안', '조화'],
    dateRange: '9월 23일 – 10월 22일',
  },
  {
    name: '전갈자리', english: 'Scorpio', symbol: '♏', emoji: '🦂',
    startMonth: 10, startDay: 23, endMonth: 11, endDay: 21,
    element: '물', modality: '고정', rulingPlanet: '명왕성',
    traits: ['통찰력', '열정', '변혁', '깊이'],
    dateRange: '10월 23일 – 11월 21일',
  },
  {
    name: '사수자리', english: 'Sagittarius', symbol: '♐', emoji: '🏹',
    startMonth: 11, startDay: 22, endMonth: 12, endDay: 21,
    element: '불', modality: '변통', rulingPlanet: '목성',
    traits: ['자유분방', '낙관적', '철학적', '모험심'],
    dateRange: '11월 22일 – 12월 21일',
  },
  {
    name: '염소자리', english: 'Capricorn', symbol: '♑', emoji: '🐐',
    startMonth: 12, startDay: 22, endMonth: 1, endDay: 19,
    element: '흙', modality: '활동', rulingPlanet: '토성',
    traits: ['책임감', '야망', '인내', '현실주의'],
    dateRange: '12월 22일 – 1월 19일',
  },
  {
    name: '물병자리', english: 'Aquarius', symbol: '♒', emoji: '🏺',
    startMonth: 1, startDay: 20, endMonth: 2, endDay: 18,
    element: '공기', modality: '고정', rulingPlanet: '천왕성',
    traits: ['독창적', '인도주의', '혁신적', '독립적'],
    dateRange: '1월 20일 – 2월 18일',
  },
  {
    name: '물고기자리', english: 'Pisces', symbol: '♓', emoji: '🐟',
    startMonth: 2, startDay: 19, endMonth: 3, endDay: 20,
    element: '물', modality: '변통', rulingPlanet: '해왕성',
    traits: ['공감능력', '예술적', '직관적', '자비로움'],
    dateRange: '2월 19일 – 3월 20일',
  },
]

export function getZodiacSign(month: number, day: number): ZodiacSign {
  for (const sign of ZODIAC_SIGNS) {
    if (sign.startMonth === sign.endMonth) continue
    // 같은 월에 시작하고 끝나는 경우 없음
    if (sign.startMonth > sign.endMonth) {
      // 염소자리 (12/22 ~ 1/19)
      if (month === sign.startMonth && day >= sign.startDay) return sign
      if (month === sign.endMonth && day <= sign.endDay) return sign
    } else {
      if (month === sign.startMonth && day >= sign.startDay) return sign
      if (month === sign.endMonth && day <= sign.endDay) return sign
      if (month > sign.startMonth && month < sign.endMonth) return sign
    }
  }
  // 기본값 (염소자리)
  return ZODIAC_SIGNS[9]
}

export const ELEMENT_GRADIENT: Record<ZodiacElement, string> = {
  불: 'from-orange-500/20 via-red-500/10 to-transparent',
  흙: 'from-amber-600/20 via-yellow-600/10 to-transparent',
  공기: 'from-sky-400/20 via-blue-400/10 to-transparent',
  물: 'from-blue-600/20 via-indigo-500/10 to-transparent',
}

export const ELEMENT_COLOR: Record<ZodiacElement, { text: string; badge: string }> = {
  불: { text: 'text-orange-600 dark:text-orange-400', badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
  흙: { text: 'text-amber-700 dark:text-amber-400', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
  공기: { text: 'text-sky-600 dark:text-sky-400', badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300' },
  물: { text: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
}
