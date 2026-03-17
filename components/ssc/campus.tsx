'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { MapPin, Phone, Clock } from 'lucide-react'

const campuses = [
  {
    id: '원주',
    address: '강원특별자치도 원주시 치악로 1793 농협건물 4층',
    phone: '033-766-7999',
    hours: '평일 06:30 – 22:00 / 주말 07:00 – 22:00',
    naverUrl: 'https://naver.me/5Q3BqTPH',
    mapQuery: '원주 SSC스파르타',
  },
  {
    id: '춘천',
    address: '강원특별자치도 춘천시 퇴계로 249 5층',
    phone: '033-766-7999',
    hours: '평일 06:30 – 22:00 / 주말 07:00 – 22:00',
    naverUrl: 'https://naver.me/5RhgAeoi',
    mapQuery: '춘천 SSC스파르타',
  },
  {
    id: '충주',
    address: '충청북도 충주시 계명대로 283',
    phone: '033-766-7999',
    hours: '평일 06:30 – 22:00 / 주말 07:00 – 22:00',
    naverUrl: 'https://naver.me/xmxZQakb',
    mapQuery: '충주 SSC스파르타',
  },
]

export function Campus({ filter }: { filter?: string } = {}) {
  const [active, setActive] = useState(filter ?? '원주')
  const ref = useScrollReveal()
  const campus = campuses.find((c) => c.id === active)!

  return (
    <section id="campus" className="bg-background-subtle py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 fade-in-up">
          <p className="eyebrow text-accent-blue mb-3">Campus</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3 -tracking-tight">
            {filter ? `${filter} 캠퍼스` : '가까운 캠퍼스에서 시작하세요'}
          </h2>
        </div>

        {/* Tab switcher — only shown when not filtered to a single campus */}
        {!filter && (
          <div className="w-full grid grid-cols-3 md:inline-flex p-1 bg-background rounded-lg border border-border-color mb-8 fade-in-up delay-100">
            {campuses.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`py-2 rounded-md text-sm font-semibold transition-colors ${
                  active === c.id
                    ? 'bg-navy text-white dark:bg-accent-blue'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {c.id}
              </button>
            ))}
          </div>
        )}

        {/* Campus detail */}
        <div className="grid md:grid-cols-2 gap-6 fade-in-up delay-200">
          {/* Info card */}
          <div
            className="rounded-[12px] border border-border-color bg-background p-8 flex flex-col gap-5"
            style={{ borderWidth: '0.5px' }}
          >
            <h3 className="text-xl font-bold text-navy dark:text-foreground">
              {campus.id} 캠퍼스
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-blue mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-text-secondary leading-relaxed">{campus.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent-blue flex-shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${campus.phone}`}
                  className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
                >
                  {campus.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-accent-blue mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-text-secondary leading-relaxed">{campus.hours}</span>
              </li>
            </ul>
          </div>

          {/* Naver map link button (replaces map placeholder) */}
          <a
            href={campus.naverUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[12px] border border-border-color bg-background-blue-soft flex flex-col items-center justify-center min-h-56 gap-4 hover:bg-accent-blue/10 transition-colors group"
            style={{ borderWidth: '0.5px' }}
          >
            <MapPin size={40} className="text-accent-blue group-hover:scale-110 transition-transform" strokeWidth={1.2} />
            <div className="text-center">
              <p className="text-sm font-bold text-text-primary">{campus.id} 캠퍼스</p>
              <p className="text-xs text-accent-blue font-semibold mt-1">
                📍 네이버 지도에서 보기 →
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
