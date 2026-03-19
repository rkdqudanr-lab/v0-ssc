'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { BookOpen, Users, Box, Coffee, type LucideIcon } from 'lucide-react'
import { type FacilityItem, defaultFacilities } from './facilities-data'

export type { FacilityItem }
export { defaultFacilities }

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  Box,
  Coffee,
}

export function Facilities({ facilities }: { facilities?: FacilityItem[] } = {}) {
  const items = facilities ?? defaultFacilities
  const ref = useScrollReveal()

  return (
    <section id="facilities" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3 -tracking-tight">
            공부가 유지될 수밖에 없는 구조
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            의지에만 맡기지 않습니다. 환경이 공부를 만듭니다.
          </p>
        </div>

        {/* Facility cards grid — 2x2 on mobile, 4 col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((facility, i) => {
            const Icon = iconMap[facility.icon] ?? BookOpen
            return (
              <div
                key={facility.id}
                className={`fade-in-up delay-${(i + 1) * 100} rounded-[12px] border border-border-color bg-background-subtle flex flex-col overflow-hidden`}
                style={{ borderWidth: '0.5px' }}
              >
                {/* Photo area — shown when image file exists */}
                <div className="relative w-full aspect-[4/3] bg-navy/10">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                  {/* Fallback icon shown on top of the empty area when no image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-lg bg-navy/10 dark:bg-accent-blue/10 flex items-center justify-center">
                      <Icon size={20} className="text-navy dark:text-accent-blue" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-navy dark:text-foreground leading-snug">
                    {facility.title}
                  </h3>
                  <p className="hidden md:block text-sm text-text-secondary leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
