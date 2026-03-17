'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: '김○○',
    result: '2025 강원 경찰직 합격',
    quote: '서울 갈 필요 없었어요. 커리큘럼이 달랐고 관리가 달랐습니다.',
  },
  {
    name: '이○○',
    result: '2024 국가직 9급 합격',
    quote: '코멘터 선생님이 매일 플래너 체크해줘서 혼자라는 느낌이 없었어요.',
  },
  {
    name: '박○○',
    result: '2025 지방직 합격',
    quote: '합격의 전당에 내 이름 붙이는 날이 올 줄 몰랐어요.',
  },
]

export function Testimonials({ reviewUrl }: { reviewUrl?: string } = {}) {
  const ref = useScrollReveal()

  return (
    <section id="testimonials" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12 fade-in-up">
          <p className="eyebrow text-accent-blue mb-3">합격후기</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3 -tracking-tight">
            합격한 선배들이 직접 말합니다
          </h2>
        </div>

        {/* Mobile: horizontal snap scroll / Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden mb-10">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`snap-center shrink-0 w-[85vw] md:w-auto fade-in-up delay-${(i + 1) * 100} rounded-[12px] border bg-background-subtle p-7 flex flex-col gap-4`}
              style={{ borderWidth: '0.5px', borderColor: 'var(--border-color)' }}
            >
              <Quote size={20} className="text-accent-blue/40" strokeWidth={1.5} />
              <blockquote className="text-base font-semibold text-text-primary leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col gap-0.5 border-t border-border-color pt-4 mt-auto">
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

        {/* 더보기 링크 */}
        {reviewUrl && (
          <div className="fade-in-up delay-500 flex justify-center mt-8">
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-color text-sm font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue transition-colors"
            >
              합격후기 더보기
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
