'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: '혼자서는 무너집니다.\nSSC스파르타와 함께라면 버팁니다.',
    subtitle: '독한 관리로 단기합격',
    description: '공무원 · 임용 · 전문자격 · 재수 전 방향 커버',
    ctas: [
      { label: '무료체험 신청하기', action: 'cta', style: 'primary' },
      { label: '프로그램 둘러보기', action: 'programs', style: 'secondary' },
    ],
  },
  {
    id: 2,
    title: '원주 유일 커넥츠프랩(공단기) 파트너',
    subtitle: '합격자 3명 중 2명이 선택한 노량진 직계 시스템을 원주에서',
    description: '',
    ctas: [{ label: '공무원 합격반 알아보기', action: 'programs', style: 'primary' }],
  },
  {
    id: 3,
    title: '매년 합격자를 배출합니다',
    subtitle: '초등·중등·유아 임용 — 마지막 60일이 합격을 가릅니다',
    description: '',
    ctas: [{ label: '임용반 알아보기', action: 'programs', style: 'primary' }],
  },
  {
    id: 4,
    title: '월 30만원대 반값재수',
    subtitle: '생활 리듬이 무너지면 강의도 소용없어요. 관리가 먼저입니다.',
    description: '',
    ctas: [{ label: '반값재수 알아보기', action: 'programs', style: 'primary' }],
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 8000)
  }

  const scroll = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-navy"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
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
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-balance mb-6 whitespace-pre-wrap" style={{ color: '#ffffff' }}>
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-semibold mb-4" style={{ color: '#ffffff' }}>
                      {slide.subtitle}
                    </p>
                    {slide.description && (
                      <p className="text-xs sm:text-sm md:text-base mb-8 leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        {slide.description}
                      </p>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                      {slide.ctas.map((cta, idx) => (
                        <button
                          key={idx}
                          onClick={() => scroll(cta.action === 'cta' ? 'cta' : cta.action)}
                          className={`px-6 py-3 rounded-lg font-semibold text-base transition-colors ${
                            cta.style === 'primary'
                              ? 'bg-white text-navy hover:bg-white/90'
                              : 'border border-white text-white hover:bg-white/10'
                          }`}
                        >
                          {cta.label}
                        </button>
                      ))}
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
        {/* Prev button */}
        <button
          onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-white/60 transition-colors"
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

        {/* Next button */}
        <button
          onClick={() => goToSlide((current + 1) % slides.length)}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-white/60 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
