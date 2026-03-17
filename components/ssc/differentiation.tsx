'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Shield, BarChart3, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '원주 유일 커넥츠프랩(공단기) 직계 파트너',
    description: '노량진 커리큘럼 그대로, 강원도 밀착 관리로 완성',
  },
  {
    icon: BarChart3,
    title: '전국모의고사 + 취약점 분석 프로그램 연계',
    description: '실시간 데이터로 약점을 정확히 잡고 학습 전략을 수립',
  },
  {
    icon: Users,
    title: '코멘터 담임제 — 학습·생활·멘탈 전과정 관리',
    description: '매일 플래너 점검, 의지가 흐트러지는 순간마다 옆에서 잡아줍니다',
  },
]

export function Differentiation() {
  const ref = useScrollReveal()

  return (
    <section
      className="bg-background-blue-soft py-20 md:py-28"
      ref={ref}
      style={{ backgroundColor: '#EEF2FF' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 fade-in-up text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3">
            서울 안 가도 됩니다
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            노량진 커리큘럼 그대로 · 강원도 밀착 관리로 완성
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`fade-in-up delay-${(i + 1) * 100} rounded-[12px] border border-border-color bg-white dark:bg-background p-8 flex flex-col gap-5 text-center`}
              style={{ borderWidth: '0.5px' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-navy/10 dark:bg-accent-blue/10 flex items-center justify-center mx-auto">
                <f.icon size={24} className="text-navy dark:text-accent-blue" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-navy dark:text-foreground leading-snug">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
