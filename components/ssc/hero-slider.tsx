'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: '관리가 합격을 만든다.',
    subtitle: 'SSC스파르타 X 커넥츠프랩',
    description: '원주 · 춘천 · 충주 — 강원도 청년의 합격 파트너',
    ctas: [
      { label: '무료 상담 신청하기', action: 'cta' },
      { label: '시설 둘러보기', action: 'campus' },
    ],
  },
  {
    id: 2,
    title: '원주 유일 커넥츠프랩(공단기) 파트너',
    subtitle: '공무원 합격반',
    description: '노량진 합격 시스템을 강원도에서 그대로 경험합니다',
    ctas: [{ label: '공무원 합격반 알아보기', action: 'programs' }],
  },
  {
    id: 3,
    title: '공부 의지에만 맡기지 않습니다.',
    subtitle: '환경·시간·생활까지 함께 관리합니다.',
    description: '교시제 시간표 + 순공 10시간 이상 확보 시스템',
    ctas: [{ label: '관리형 자습 알아보기', action: 'programs' }],
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
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(1px 1px at 20px 30px, white, rgba(255,255,255,.2))`,
                backgroundSize: '40px 60px',
              }}
            />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <div className="max-w-2xl">
                  <div className="fade-in-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-balance mb-4" style={{ color: '#ffffff' }}>
                      {current === 0 ? (
                        <>
                          관리가 합격을
                          <br />
                          <span style={{ color: '#FF4444' }}>만든다.</span>
                        </>
                      ) : (
                        slide.title
                      )}
                    </h1>
                    <p className="text-lg sm:text-xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                      {current === 0 ? (
                        <>
                          <span style={{ color: '#FF4444' }}>SSC스파르타</span>
                          <span style={{ color: '#ffffff' }}> X </span>
                          <span style={{ color: '#FF4444' }}>커넥츠프랩</span>
                        </>
                      ) : (
                        <span style={{ color: '#ffffff' }}>{slide.subtitle}</span>
                      )}
                    </p>
                    <p className="text-sm sm:text-base mb-10 leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {slide.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                      {slide.ctas.map((cta, idx) => (
                        <button
                          key={idx}
                          onClick={() => scroll(cta.action)}
                          className={`px-7 py-3.5 rounded-xl font-semibold text-base transition-colors ${
                            idx === 0
                              ? 'bg-accent-amber text-navy hover:bg-accent-amber/90'
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
