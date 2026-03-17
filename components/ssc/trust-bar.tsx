'use client'

import { useCountUp } from '@/hooks/use-count-up'
import useSWR from 'swr'
import type { SiteContent } from '@/lib/content'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function StatItem({
  value,
  label,
}: {
  value: string
  label: string
}) {
  // Extract numeric part and suffix
  const numericMatch = value.match(/^([\d,]+)/)
  const numericValue = numericMatch ? parseInt(numericMatch[1].replace(/,/g, ''), 10) : 0
  const suffix = value.replace(/^[\d,]+/, '')
  
  const { count, ref } = useCountUp(numericValue, 1600)

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

const defaultStats = [
  { value: '12', label: '년 운영' },
  { value: '3,200', label: '+ 누적 수강생' },
  { value: '89', label: '% 합격률' },
  { value: '4.9', label: '만족도' },
]

export function TrustBar() {
  const { data } = useSWR<SiteContent>('/api/content', fetcher)
  const stats = data?.trustBar?.stats ?? defaultStats

  return (
    <section className="bg-navy py-12 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
