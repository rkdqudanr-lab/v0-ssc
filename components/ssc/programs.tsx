'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Shield, Briefcase, BookOpen, ArrowRight } from 'lucide-react'

const programs = [
  {
    icon: Shield,
    name: '공무원 합격반',
    badge: '노량진 직계',
    badgeColor: 'bg-accent-amber/15 text-accent-amber border-accent-amber/30',
    description:
      '원주 유일 커넥츠프랩(공단기) 도입. 노량진 합격 시스템을 강원도에서 그대로 경험할 수 있습니다. 필기부터 면접까지 전 과정 관리.',
    href: '#curriculum',
  },
  {
    icon: Briefcase,
    name: '지역특화 취업반',
    badge: '강원도 특화',
    badgeColor: 'bg-accent-blue/15 text-accent-blue border-accent-blue/30',
    description:
      '강원도 공공기관 · 지역 기업 취업을 목표로 하는 수험생을 위한 맞춤형 취업 준비 프로그램. 서류 · NCS · 면접 통합 관리.',
    href: '#campus',
  },
  {
    icon: BookOpen,
    name: '반값재수 / 관리형 자습',
    badge: '10만원 지원 가능',
    badgeColor: 'bg-accent-green/15 text-accent-green border-accent-green/30',
    description:
      '원주시 청년이라면 최대 10만원 지원 혜택으로 시작할 수 있는 관리형 독서실. 코멘터의 밀착 학습 관리 + 12시간 순공 시스템.',
    href: '#subsidy',
  },
]

export function Programs() {
  const ref = useScrollReveal()

  return (
    <section id="programs" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="mb-12 fade-in-up">
          <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
            Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3">
            하나의 목표, 세 가지 길
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-xl">
            공무원이든, 취업이든, 재수든 — SSC스파르타에 답이 있습니다
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {programs.map((p, i) => (
            <article
              key={p.name}
              className={`fade-in-up delay-${(i + 1) * 100} group rounded-[12px] border border-border-color bg-background p-7 flex flex-col gap-4 hover:border-accent-blue/40 hover:shadow-none transition-colors`}
              style={{ borderWidth: '0.5px' }}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-background-subtle flex items-center justify-center">
                <p.icon size={22} className="text-navy dark:text-accent-blue" strokeWidth={1.5} />
              </div>

              {/* Badge + Name */}
              <div className="flex flex-col gap-2">
                <span
                  className={`inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${p.badgeColor}`}
                >
                  {p.badge}
                </span>
                <h3 className="text-lg font-bold text-text-primary leading-snug">
                  {p.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {p.description}
              </p>

              {/* Link */}
              <button
                onClick={() =>
                  document.querySelector(p.href)?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue group-hover:gap-2 transition-all"
              >
                자세히 보기
                <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
