'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: '김○○',
    result: '2025 강원 경찰직 합격',
    quote: '서울 갈 필요 없었어요. 커리큘럼이 달랐습니다.',
    detail:
      '노량진 커리큘럼을 그대로 쓰는데 관리는 훨씬 빡세게 해줬어요. 처음엔 반신반의했지만 합격하고 나니 선택이 옳았다고 확신했습니다.',
  },
  {
    name: '이○○',
    result: '2024 국가직 9급 합격',
    quote: '코멘터 선생님이 매일 체크해줘서 흐트러지지 않았어요.',
    detail:
      '의지가 약해지는 순간이 몇 번 있었는데 그때마다 플래너 점검이 저를 잡아줬어요. 혼자였으면 분명 중도 포기했을 것 같아요.',
  },
  {
    name: '박○○',
    result: '2025 지방직 합격',
    quote: '합격의 전당에 내 이름 붙이는 날이 올 줄 몰랐어요.',
    detail:
      '재수까지 하면서 많이 힘들었는데 SSC스파르타 와서 관리 시스템에 몸을 맡기고 나서 처음으로 공부가 제대로 됐어요.',
  },
]

export function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section id="testimonials" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 fade-in-up">
          <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
            합격후기
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3">
            합격한 선배들이 직접 말합니다
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`fade-in-up delay-${(i + 1) * 100} rounded-[12px] border bg-background-subtle p-7 flex flex-col gap-4`}
              style={{ borderWidth: '0.5px', borderColor: 'var(--border-color)' }}
            >
              <Quote size={20} className="text-accent-blue/40" strokeWidth={1.5} />
              <blockquote className="text-base font-semibold text-text-primary leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">{t.detail}</p>
              <div className="flex flex-col gap-0.5 border-t border-border-color pt-4">
                <span className="text-sm font-bold text-text-primary">{t.name}</span>
                <span className="text-xs text-accent-blue font-medium">{t.result}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Stat row */}
        <div className="fade-in-up delay-400 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-[12px] border border-accent-blue/30 bg-background-blue-soft">
            <span className="text-2xl font-bold text-accent-blue font-sans">1/3</span>
            <p className="text-sm text-text-secondary leading-snug">
              합격자 3명 중 1명은{' '}
              <span className="font-semibold text-text-primary">커넥츠 공단기 콘텐츠 수강생</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
