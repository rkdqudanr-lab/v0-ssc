'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { BookOpen, Users, Box, Coffee } from 'lucide-react'

const facilities = [
  {
    id: 1,
    icon: BookOpen,
    title: '개별 지정석 자습실',
    description:
      '불필요한 자극을 최소화한 공간. 모든 좌석은 개별 지정석으로 운영되며, 백색소음과 공조시스템으로 장시간 집중 환경을 유지합니다.',
  },
  {
    id: 2,
    icon: Users,
    title: '스탠딩 라운지',
    description:
      '졸음이 오거나 집중이 끊길 때 자리를 완전히 이탈하지 않고 서서 공부하며 흐름을 회복하는 공간입니다.',
  },
  {
    id: 3,
    icon: Box,
    title: '개인 사물함 · 신발장',
    description:
      '모든 좌석에 개인 사물함이 제공됩니다. 신발장도 개인별로 배정되어 쾌적한 환경을 유지합니다.',
  },
  {
    id: 4,
    icon: Coffee,
    title: '편의시설 (음료, 간식, 카페)',
    description:
      '공부의 리듬을 잃지 않으면서 에너지를 챙길 수 있는 공간. 공부를 버티는 데 필요한 작은 쾌적함들.',
  },
]

export function Facilities() {
  const ref = useScrollReveal()

  return (
    <section id="facilities" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3">
            공부가 유지될 수밖에 없는 구조
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            의지에만 맡기지 않습니다. 환경이 공부를 만듭니다.
          </p>
        </div>

        {/* Facility cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((facility, i) => (
            <div
              key={facility.id}
              className={`fade-in-up delay-${(i + 1) * 100} rounded-[12px] border border-border-color bg-background-subtle p-6 flex flex-col gap-4`}
              style={{ borderWidth: '0.5px' }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-navy/10 dark:bg-accent-blue/10 flex items-center justify-center">
                <facility.icon
                  size={20}
                  className="text-navy dark:text-accent-blue"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-navy dark:text-foreground leading-snug">
                {facility.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
