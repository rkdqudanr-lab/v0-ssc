'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Sun, Coffee, Moon } from 'lucide-react'

const phases = [
  { step: '1단계', period: '1~3월', label: '기초 다지기' },
  { step: '2단계', period: '4~6월', label: '과목별 심화' },
  { step: '3단계', period: '7~9월', label: '실전 문제풀이' },
  { step: '4단계', period: '10~11월', label: '최종 마무리 + 면접 코칭' },
]

const subjects = [
  '국어', '영어', '한국사', '행정법', '행정학', '사회', '과학', '수학',
]

const schedule = [
  {
    icon: Sun,
    label: '오전 루틴',
    time: '06:30 – 12:00',
    items: ['점호', '오전 강의', '집중 자습'],
    color: 'bg-accent-amber/10 border-accent-amber/20',
    iconColor: 'text-accent-amber',
  },
  {
    icon: Coffee,
    label: '오후 루틴',
    time: '13:00 – 18:00',
    items: ['오후 강의', '과목 클리닉', '오답 정리'],
    color: 'bg-accent-blue/10 border-accent-blue/20',
    iconColor: 'text-accent-blue',
  },
  {
    icon: Moon,
    label: '저녁 루틴',
    time: '19:00 – 22:00',
    items: ['저녁 자습', '일일 점검', '플래너 작성'],
    color: 'bg-navy/5 border-navy/15 dark:bg-navy/30 dark:border-navy/40',
    iconColor: 'text-navy dark:text-accent-blue',
  },
]

export function Curriculum() {
  const ref = useScrollReveal()

  return (
    <section id="curriculum" className="bg-background-subtle py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 fade-in-up">
          <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
            Curriculum
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3">
            커리큘럼 & 하루 시간표
          </h2>
          <p className="text-text-secondary text-sm">공무원 합격반 기준</p>
        </div>

        {/* Phase timeline */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold text-text-secondary mb-5 fade-in-up">
            연간 학습 단계
          </h3>
          {/* Desktop: horizontal */}
          <div className="hidden md:flex items-start gap-0 fade-in-up delay-100">
            {phases.map((p, i) => (
              <div key={p.step} className="flex-1 relative">
                {/* Connector line */}
                {i < phases.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-full h-px bg-border-color z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center gap-2 px-2">
                  <div className="w-8 h-8 rounded-full bg-navy dark:bg-accent-blue text-white flex items-center justify-center text-xs font-bold font-sans">
                    {i + 1}
                  </div>
                  <span className="text-xs text-accent-blue font-semibold text-center">
                    {p.period}
                  </span>
                  <span className="text-sm font-bold text-text-primary text-center leading-snug">
                    {p.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile: vertical */}
          <div className="flex md:hidden flex-col gap-4 fade-in-up delay-100">
            {phases.map((p, i) => (
              <div key={p.step} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-navy dark:bg-accent-blue text-white flex items-center justify-center text-xs font-bold font-sans flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < phases.length - 1 && (
                    <div className="w-px flex-1 min-h-6 bg-border-color mt-1" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-xs text-accent-blue font-semibold">{p.period}</span>
                  <p className="text-sm font-bold text-text-primary">{p.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-14 fade-in-up delay-200">
          <h3 className="text-sm font-semibold text-text-secondary mb-4">수강 과목</h3>
          <div className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 rounded-full border border-border-color bg-background text-sm font-medium text-text-primary"
                style={{ borderWidth: '0.5px' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Daily schedule */}
        <div>
          <h3 className="text-sm font-semibold text-text-secondary mb-5 fade-in-up delay-200">
            하루 시간표
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {schedule.map((s, i) => (
              <div
                key={s.label}
                className={`fade-in-up delay-${(i + 3) * 100} rounded-[12px] border p-6 flex flex-col gap-4 ${s.color}`}
                style={{ borderWidth: '0.5px' }}
              >
                <div className="flex items-center gap-3">
                  <s.icon size={18} className={s.iconColor} strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-bold text-text-primary">{s.label}</p>
                    <p className="text-xs text-text-secondary font-mono">{s.time}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <span className="w-1 h-1 rounded-full bg-text-secondary/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
