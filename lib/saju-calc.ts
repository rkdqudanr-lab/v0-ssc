// 사주 원국(四柱八字) 계산 라이브러리

export const HEAVENLY_STEMS = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'] as const
export const EARTHLY_BRANCHES = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'] as const

export type HeavenlyStem = (typeof HEAVENLY_STEMS)[number]
export type EarthlyBranch = (typeof EARTHLY_BRANCHES)[number]

export type FiveElement = '목' | '화' | '토' | '금' | '수'
export type YinYang = '양' | '음'

export interface Pillar {
  stem: HeavenlyStem       // 천간
  branch: EarthlyBranch   // 지지
  stemElement: FiveElement  // 천간 오행
  branchElement: FiveElement // 지지 오행
  yinYang: YinYang
  label: string            // 년주/월주/일주/시주
}

export interface NatalChart {
  yearPillar: Pillar
  monthPillar: Pillar
  dayPillar: Pillar
  hourPillar: Pillar
  dominantElement: FiveElement
}

// 천간 → 오행 매핑
const STEM_ELEMENT: Record<HeavenlyStem, FiveElement> = {
  갑: '목', 을: '목',
  병: '화', 정: '화',
  무: '토', 기: '토',
  경: '금', 신: '금',
  임: '수', 계: '수',
}

// 천간 → 음양 매핑 (갑=양, 을=음, 병=양...)
const STEM_YINYANG: Record<HeavenlyStem, YinYang> = {
  갑: '양', 을: '음',
  병: '양', 정: '음',
  무: '양', 기: '음',
  경: '양', 신: '음',
  임: '양', 계: '음',
}

// 지지 → 오행 매핑
const BRANCH_ELEMENT: Record<EarthlyBranch, FiveElement> = {
  자: '수', 축: '토',
  인: '목', 묘: '목',
  진: '토', 사: '화',
  오: '화', 미: '토',
  신: '금', 유: '금',
  술: '토', 해: '수',
}

function makePillar(stemIdx: number, branchIdx: number, label: string): Pillar {
  const stem = HEAVENLY_STEMS[((stemIdx % 10) + 10) % 10]
  const branch = EARTHLY_BRANCHES[((branchIdx % 12) + 12) % 12]
  return {
    stem,
    branch,
    stemElement: STEM_ELEMENT[stem],
    branchElement: BRANCH_ELEMENT[branch],
    yinYang: STEM_YINYANG[stem],
    label,
  }
}

// 년주 계산
function calcYearPillar(year: number): Pillar {
  const stemIdx = (year - 4) % 10
  const branchIdx = (year - 4) % 12
  return makePillar(stemIdx, branchIdx, '년주')
}

// 월주 계산 (절기 기반 간략화 — 월간지 조견표)
// 년주 천간에 따라 월의 천간 시작이 달라짐
function calcMonthPillar(year: number, month: number): Pillar {
  // 년간 기준 월간 시작 인덱스 (인월=1월 절기 기준)
  const yearStemIdx = ((year - 4) % 10 + 10) % 10
  // 인월의 천간 = 년간 × 2 + 2 (mod 10)
  const inMonthStemBase = (yearStemIdx * 2 + 2) % 10
  // month: 1-12, 인월(2월)=0번째 → (month + 10) % 12
  const monthOffset = (month + 10) % 12 // 1월→11, 2월→0
  const stemIdx = (inMonthStemBase + monthOffset) % 10
  // 지지: 인(2)부터 시작, 1월=축(1), 2월=인(2)...
  const branchIdx = (month + 1) % 12 // 1월→2(인), 조정
  const adjustedBranch = (month === 1) ? 1 : (month + 1) % 12
  return makePillar(stemIdx, adjustedBranch, '월주')
}

// 일주 계산 (줄리안 날짜 기반)
function calcDayPillar(year: number, month: number, day: number): Pillar {
  // 줄리안 날짜 계산
  const a = Math.floor((14 - month) / 12)
  const y = year + 4800 - a
  const m = month + 12 * a - 3
  const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y +
    Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045

  // 갑자일(JDN=0 기준 갑자) 기준 offset
  // 갑자일 기준점: JDN 2299161 = 갑자(0,0) 근사
  const offset = ((jdn - 2299161) % 60 + 60) % 60
  const stemIdx = offset % 10
  const branchIdx = offset % 12
  return makePillar(stemIdx, branchIdx, '일주')
}

// 시주 계산 (시간 → 12시진)
function calcHourPillar(hour: number, dayStemIdx: number): Pillar {
  // 시진 (2시간 단위, 자시=23-1시)
  const branchIdx = Math.floor(((hour + 1) % 24) / 2)
  // 일간 기준 시간 천간 시작
  // 갑일/기일→갑자시, 을일/경일→병자시, 병일/신일→무자시, 정일/임일→경자시, 무일/계일→임자시
  const hourStemBases = [0, 2, 4, 6, 8] // 갑/을/병/정/무 기준
  const stemBase = hourStemBases[dayStemIdx % 5]
  const stemIdx = (stemBase + branchIdx) % 10
  return makePillar(stemIdx, branchIdx, '시주')
}

// 가장 많이 나타나는 오행 계산
function calcDominantElement(pillars: Pillar[]): FiveElement {
  const count: Record<FiveElement, number> = { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 }
  pillars.forEach(p => {
    count[p.stemElement]++
    count[p.branchElement]++
  })
  return (Object.keys(count) as FiveElement[]).reduce((a, b) => count[a] >= count[b] ? a : b)
}

export function calculateNatalChart(
  year: number,
  month: number,
  day: number,
  hour: number,
): NatalChart {
  const yearPillar = calcYearPillar(year)
  const monthPillar = calcMonthPillar(year, month)
  const dayPillar = calcDayPillar(year, month, day)
  const dayStemIdx = HEAVENLY_STEMS.indexOf(dayPillar.stem)
  const hourPillar = calcHourPillar(hour, dayStemIdx)

  const pillars = [yearPillar, monthPillar, dayPillar, hourPillar]
  return {
    yearPillar,
    monthPillar,
    dayPillar,
    hourPillar,
    dominantElement: calcDominantElement(pillars),
  }
}

// 오행 색상 (Tailwind 클래스용)
export const ELEMENT_COLORS: Record<FiveElement, { bg: string; text: string; border: string }> = {
  목: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' },
  화: { bg: 'bg-red-50 dark:bg-red-950/30', text: 'text-red-700 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
  토: { bg: 'bg-yellow-50 dark:bg-yellow-950/30', text: 'text-yellow-700 dark:text-yellow-400', border: 'border-yellow-200 dark:border-yellow-800' },
  금: { bg: 'bg-slate-50 dark:bg-slate-800/50', text: 'text-slate-600 dark:text-slate-300', border: 'border-slate-200 dark:border-slate-600' },
  수: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-700 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
}

// 시진 레이블
export const HOUR_LABELS: Record<number, string> = {
  0: '자시 (23–01시)',
  1: '축시 (01–03시)',
  2: '인시 (03–05시)',
  3: '묘시 (05–07시)',
  4: '진시 (07–09시)',
  5: '사시 (09–11시)',
  6: '오시 (11–13시)',
  7: '미시 (13–15시)',
  8: '신시 (15–17시)',
  9: '유시 (17–19시)',
  10: '술시 (19–21시)',
  11: '해시 (21–23시)',
}

export function hourToSiJin(hour: number): number {
  return Math.floor(((hour + 1) % 24) / 2)
}
