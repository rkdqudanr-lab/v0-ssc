'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useSWR from 'swr'
import type { SiteContent } from '@/lib/content'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const defaultSlides = [
  {
    id: 1,
    title: '혼자서는 무너집니다.\nSSC스파르타와 함께라면 버팁니다.',
    subtitle: '독한 관리로 단기합격',
    description: '공무원 · 임용 · 전문자격 · 재수 전 방향 커버',
    ctaLabel: '상담 신청하기',
    ctaSecondaryLabel: '프로그램 둘러보기',
  },
  {
    id: 2,
    title: '원주 유일 노량진 커넥츠프랩(공단기) 파트너',
    subtitle: '공무원 합격자에게 물어보세요, 합격자는 스파르타 했습니다.',
    description: '',
    ctaLabel: '공무원 합격반 알아보기',
  },
  {
    id: 3,
    title: '임용에서 강합니다. 매년 합격자를 배출합니다',
    subtitle: '초등·중등·유아 임용 — 마지막 60일이 합격을 가릅니다',
    description: '',
    ctaLabel: '임용반 알아보기',
  },
  {
    id: 4,
    title: '합리적 금액의 반값재수',
    subtitle: '생활 리듬이 무너지면 강의도 소용없어요. 관리가 먼저입니다.',
    description: '',
    ctaLabel: '반값재수 알아보기',
  },
  {
    id: 5,
    title: '세무사·노무사·기사시험\n4개월 단기합격의 비밀',
    subtitle: '교시제 시간표 + 코멘터 관리 — 전문자격도 관리가 결과를 만듭니다',
    description: '세무사 · 노무사 · 회계사 · 산업기사 · 각종 기사시험 전 방향 커버',
    ctaLabel: '전문자격반 알아보기',
  },
]

export function HeroSlider({ slides: slidesProp }: { slides?: typeof defaultSlides } = {}) {
  const { data } = useSWR<SiteContent>('/api/content', fetcher)
  const slides = slidesProp ?? data?.hero?.slides ?? defaultSlides

  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [autoPlay, slides.length])

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 8000)
  }

  const scroll = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setAutoPlay(false)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) >= 50) {
      if (delta > 0) {
        goToSlide((current + 1) % slides.length)
      } else {
        goToSlide((current - 1 + slides.length) % slides.length)
      }
    } else {
      setTimeout(() => setAutoPlay(true), 8000)
    }
    touchStartX.current = null
  }

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-navy"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-navy/95" />

            {/* Dot grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(1px 1px at 20px 30px, #378ADD, rgba(55,138,221,.1))`,
                backgroundSize: '40px 60px',
              }}
            />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <div className="max-w-2xl">
                  <div className="fade-in-up">
                    <h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6 whitespace-pre-wrap display-title"
                      style={{ color: '#ffffff', wordBreak: 'keep-all' }}
                    >
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-semibold mb-4" style={{ color: '#ffffff' }}>
                      {slide.subtitle}
                    </p>
                    {slide.description && (
                      <p
                        className="text-xs sm:text-sm md:text-base mb-8 leading-relaxed max-w-xl"
                        style={{ color: 'rgba(255,255,255,0.85)' }}
                      >
                        {slide.description}
                      </p>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                      <button
                        onClick={() => scroll('cta')}
                        className="px-6 py-3 rounded-lg font-semibold text-base transition-colors bg-white text-navy hover:bg-white/90"
                      >
                        {slide.ctaLabel}
                      </button>
                      {slide.ctaSecondaryLabel && (
                        <button
                          onClick={() => scroll('programs')}
                          className="px-6 py-3 rounded-lg font-semibold text-base transition-colors border border-white text-white hover:bg-white/10"
                        >
                          {slide.ctaSecondaryLabel}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Prev button — desktop only */}
        <button
          onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="hidden md:flex w-10 h-10 rounded-full border border-white/30 text-white items-center justify-center hover:border-white/60 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? 'bg-accent-amber w-8' : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Next button — desktop only */}
        <button
          onClick={() => goToSlide((current + 1) % slides.length)}
          aria-label="Next slide"
          className="hidden md:flex w-10 h-10 rounded-full border border-white/30 text-white items-center justify-center hover:border-white/60 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
