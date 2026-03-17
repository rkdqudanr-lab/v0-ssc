'use client'

import { useCountUp } from '@/hooks/use-count-up'

function StatItem({
  end,
  suffix,
  label,
}: {
  end: number
  suffix: string
  label: string
}) {
  const { count, ref } = useCountUp(end, 1600)

  return (
    <div className="flex flex-col items-center gap-1 py-2">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="text-3xl md:text-4xl font-bold text-text-on-navy tabular-nums font-sans"
      >
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-sm text-white/70 text-center leading-snug">{label}</span>
    </div>
  )
}

export function TrustBar() {
  return (
    <section className="bg-navy py-12 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          <StatItem end={1200} suffix="명+" label="누적 합격생" />
          <div className="flex flex-col items-center gap-1 py-2">
            <span className="text-3xl md:text-4xl font-bold text-text-on-navy font-sans">
              1위
            </span>
            <span className="text-sm text-white/70 text-center leading-snug">
              강원 합격률
            </span>
          </div>
          <StatItem end={3} suffix="개" label="운영 캠퍼스" />
          <div className="flex flex-col items-center gap-1 py-2">
            <span className="text-3xl md:text-4xl font-bold text-text-on-navy font-sans">
              직계
            </span>
            <span className="text-sm text-white/70 text-center leading-snug">
              노량진 프로그램 도입
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
