'use client'

import { type ZodiacSign, ELEMENT_GRADIENT, ELEMENT_COLOR } from '@/lib/zodiac'

interface StarSignDisplayProps {
  sign: ZodiacSign
}

export function StarSignDisplay({ sign }: StarSignDisplayProps) {
  const gradient = ELEMENT_GRADIENT[sign.element]
  const color = ELEMENT_COLOR[sign.element]

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/4 overflow-hidden p-5">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />

      <div className="relative flex items-start gap-4">
        {/* Symbol */}
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center">
          <span className="text-3xl">{sign.symbol}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="eyebrow text-white/40 text-[11px] tracking-widest">Western Zodiac</p>
          </div>
          <h2 className="text-xl font-light text-white mt-0.5">{sign.name}</h2>
          <p className="text-white/40 text-xs mt-0.5">{sign.english} · {sign.dateRange}</p>

          {/* Badges */}
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${color.badge}`}>
              {sign.element} 원소
            </span>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/8 text-white/50 border border-white/10">
              {sign.modality}궁
            </span>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/8 text-white/50 border border-white/10">
              {sign.rulingPlanet} 지배
            </span>
          </div>
        </div>
      </div>

      {/* Traits */}
      <div className="relative mt-4 flex flex-wrap gap-2">
        {sign.traits.map(trait => (
          <span
            key={trait}
            className="text-[12px] text-white/60 bg-white/6 border border-white/8 px-3 py-1 rounded-full"
          >
            {trait}
          </span>
        ))}
      </div>
    </div>
  )
}
