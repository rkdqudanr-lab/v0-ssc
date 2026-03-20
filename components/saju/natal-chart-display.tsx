'use client'

import { type NatalChart, ELEMENT_COLORS } from '@/lib/saju-calc'

interface NatalChartDisplayProps {
  chart: NatalChart
}

const PILLAR_LABELS = ['년주', '월주', '일주', '시주'] as const
const PILLAR_SUBLABELS = ['태어난 해', '태어난 달', '태어난 날', '태어난 시'] as const

function PillarCard({
  pillar,
  sublabel,
  isDay = false,
}: {
  pillar: NatalChart['yearPillar']
  sublabel: string
  isDay?: boolean
}) {
  const colors = ELEMENT_COLORS[pillar.stemElement]

  return (
    <div
      className={`relative flex flex-col items-center rounded-2xl border p-5 gap-1 transition-all
        ${isDay ? 'border-white/30 bg-white/8 ring-1 ring-white/20' : 'border-white/10 bg-white/4'}
      `}
    >
      {isDay && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-widest
          bg-white/90 text-[#0A0A0F] px-2.5 py-0.5 rounded-full">
          일간
        </span>
      )}
      {/* Label */}
      <p className="text-white/35 text-[11px] font-medium tracking-widest">{sublabel}</p>

      {/* Stem (천간) — large */}
      <p className="text-5xl font-thin text-white leading-none tracking-tight mt-1">
        {pillar.stem}
      </p>

      {/* Branch (지지) */}
      <p className="text-2xl font-extralight text-white/70 leading-none">
        {pillar.branch}
      </p>

      {/* Element badge */}
      <div className="mt-2 flex gap-1.5 flex-wrap justify-center">
        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
          {pillar.stemElement}
        </span>
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-white/50">
          {pillar.yinYang}
        </span>
      </div>
    </div>
  )
}

export function NatalChartDisplay({ chart }: NatalChartDisplayProps) {
  const pillars = [
    { pillar: chart.yearPillar, sublabel: '태어난 해' },
    { pillar: chart.monthPillar, sublabel: '태어난 달' },
    { pillar: chart.dayPillar, sublabel: '태어난 날', isDay: true },
    { pillar: chart.hourPillar, sublabel: '태어난 시' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow text-white/40 text-[11px] tracking-widest">四柱八字</p>
          <h2 className="text-xl font-light text-white mt-0.5">나의 사주 원국</h2>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-white/30">주요 오행</p>
          <p className={`text-base font-medium ${ELEMENT_COLORS[chart.dominantElement].text}`}>
            {chart.dominantElement}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {pillars.map(({ pillar, sublabel, isDay }) => (
          <PillarCard
            key={pillar.label}
            pillar={pillar}
            sublabel={sublabel}
            isDay={isDay}
          />
        ))}
      </div>

      {/* 천간/지지 legend */}
      <div className="flex gap-4 text-[11px] text-white/25 justify-center pt-1">
        <span>천간(天干) — 위 큰 글자</span>
        <span>·</span>
        <span>지지(地支) — 아래 작은 글자</span>
      </div>
    </div>
  )
}
