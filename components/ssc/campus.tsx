'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

const campuses = [
  {
    id: '원주',
    address: '강원특별자치도 원주시 치악로 1793 농협건물 4층',
    phone: '033-766-7999',
    hours: '평일 06:30 – 22:00 / 주말 07:00 – 22:00',
    kakaoUrl: 'https://map.kakao.com',
    mapQuery: '원주 치악로 1793',
  },
  {
    id: '춘천',
    address: '강원특별자치도 춘천시 (상담 후 안내)',
    phone: '033-766-7999',
    hours: '평일 06:30 – 22:00 / 주말 07:00 – 22:00',
    kakaoUrl: 'https://map.kakao.com',
    mapQuery: '춘천 SSC스파르타',
  },
  {
    id: '충주',
    address: '충청북도 충주시 (상담 후 안내)',
    phone: '033-766-7999',
    hours: '평일 06:30 – 22:00 / 주말 07:00 – 22:00',
    kakaoUrl: 'https://map.kakao.com',
    mapQuery: '충주 SSC스파르타',
  },
]

export function Campus() {
  const [active, setActive] = useState('원주')
  const ref = useScrollReveal()
  const campus = campuses.find((c) => c.id === active)!

  return (
    <section id="campus" className="bg-background-subtle py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 fade-in-up">
          <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
            Campus
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3">
            가까운 캠퍼스에서 시작하세요
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 p-1 bg-background rounded-lg border border-border-color self-start inline-flex mb-8 fade-in-up delay-100">
          {campuses.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
                active === c.id
                  ? 'bg-navy text-white dark:bg-accent-blue'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {c.id}
            </button>
          ))}
        </div>

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

            <a
              href={campus.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:underline mt-2"
            >
              카카오맵으로 보기
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Map placeholder */}
          <div
            className="rounded-[12px] border border-border-color bg-background-blue-soft flex items-center justify-center min-h-56"
            style={{ borderWidth: '0.5px' }}
          >
            <div className="text-center">
              <MapPin size={32} className="text-accent-blue mx-auto mb-3" strokeWidth={1} />
              <p className="text-sm font-semibold text-text-primary">{campus.id} 캠퍼스</p>
              <p className="text-xs text-text-secondary mt-1">지도를 불러오는 중…</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
