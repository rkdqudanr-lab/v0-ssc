'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Phone } from 'lucide-react'
import { CAMPUS_CONFIG } from '@/lib/campus-config'

interface CtaBannerProps {
  phone?: string
  naverTalkUrl?: string
}

export function CtaBanner({
  phone = CAMPUS_CONFIG.wonju.phone,
  naverTalkUrl = CAMPUS_CONFIG.wonju.naverTalkUrl,
}: CtaBannerProps) {
  const ref = useScrollReveal()

  return (
    <section id="cta" className="bg-navy py-20 md:py-28" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="fade-in-up">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold border border-white/20 mb-6">
            지금 바로 시작
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-on-navy text-balance mb-4 leading-tight">
            지금 상담 신청하면
            <br />
            1일 무료체험{' '}
            <span className="text-accent-amber">가능합니다</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            방문 상담 · 네이버 톡톡 · 전화{' '}
            <a
              href={`tel:${phone}`}
              className="text-white/90 font-semibold hover:text-accent-amber transition-colors"
            >
              {phone}
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent-amber text-navy font-bold text-sm hover:bg-accent-amber/90 transition-colors"
            >
              <Phone size={16} />
              지금 자리 잡기 →
            </a>
            <a
              href={naverTalkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              네이버 톡톡 문의
            </a>
          </div>

          {/* Micro-trust */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
            {[
              '무료 상담 가능',
              '전화 상담은 상세 정보가 제한될수 있습니다',
              '네이버 톡톡 문의가능',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-xs text-white/50"
              >
                <span className="w-1 h-1 rounded-full bg-accent-blue flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
