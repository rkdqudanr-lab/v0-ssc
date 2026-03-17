'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import {
  Clock,
  CheckSquare,
  BarChart2,
  MessageSquare,
  Heart,
  Home,
} from 'lucide-react'

const systems = [
  {
    icon: Clock,
    title: '교시제 집중학습',
    description: '7교시 · 12시간 순공 시스템으로 집중력을 유지합니다.',
  },
  {
    icon: CheckSquare,
    title: '코멘터 출결 2중 관리',
    description: '수기 + 태블릿 이중 출결로 단 한 번의 이탈도 놓치지 않습니다.',
  },
  {
    icon: BarChart2,
    title: '전국 모의고사 + 문항 분석',
    description: '커넥츠프랩 모의고사 현장 응시 + 문항별 데이터 분석 제공.',
  },
  {
    icon: MessageSquare,
    title: '1:1 면접 코칭 프로그램',
    description: '필기 합격 이후 실전 면접까지, 전 과정을 함께 준비합니다.',
  },
  {
    icon: Heart,
    title: '월간 조회 및 멘탈 관리',
    description: '성취감을 쌓고 번아웃을 예방하는 주기적 멘탈 케어.',
  },
  {
    icon: Home,
    title: '스터디실 · 라운지 무료 제공',
    description: '쾌적한 자습 공간과 휴식 공간을 추가 비용 없이 이용.',
  },
]

export function Systems() {
  const ref = useScrollReveal()

  return (
    <section className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 fade-in-up">
          <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
            System
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3">
            합격을 만드는 SSC의 6가지 시스템
          </h2>
        </div>

        {/* 2x3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {systems.map((s, i) => (
            <div
              key={s.title}
              className={`fade-in-up delay-${(i % 4) * 100} rounded-[12px] border border-border-color bg-background-subtle p-6 flex flex-col gap-3`}
              style={{ borderWidth: '0.5px' }}
            >
              <div className="w-10 h-10 rounded-lg bg-background border border-border-color flex items-center justify-center">
                <s.icon size={18} className="text-accent-blue" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-bold text-text-primary">{s.title}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
