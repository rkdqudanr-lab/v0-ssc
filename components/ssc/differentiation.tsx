'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { MapPin, UserCheck, BarChart2 } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: '원주 유일 커넥츠프랩(공단기) 파트너 학원',
    description:
      '노량진의 합격 커리큘럼과 강의 콘텐츠를 강원도에서 그대로. 서울로 가지 않아도 됩니다.',
  },
  {
    icon: UserCheck,
    title: '코멘터 1:1 밀착 학습 관리 시스템',
    description:
      '수기 + 태블릿 이중 출결 관리, 매일 플래너 점검, 멘탈 케어까지. 혼자 공부하는 것보다 강합니다.',
  },
  {
    icon: BarChart2,
    title: '전국 모의고사 + 문항별 데이터 분석 제공',
    description:
      '커넥츠프랩 전국 모의고사를 현장에서 응시하고, 문항별 정오답 데이터로 약점을 정확히 잡습니다.',
  },
]

export function Differentiation() {
  const ref = useScrollReveal()

  return (
    <section className="bg-background-subtle py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3 fade-in-up">
              Why SSC
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-4 fade-in-up delay-100">
              서울 가지 않아도
              <br />됩니다
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8 fade-in-up delay-200">
              노량진 프로그램, 강원도 밀착 관리 —<br />
              이게 SSC스파르타의 공식입니다
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-6">
              {features.map((f, i) => (
                <li
                  key={f.title}
                  className={`fade-in-up delay-${(i + 2) * 100} flex items-start gap-4`}
                >
                  <div className="mt-0.5 w-10 h-10 rounded-lg border border-border-color bg-background flex items-center justify-center flex-shrink-0">
                    <f.icon
                      size={18}
                      className="text-accent-blue"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary mb-1">{f.title}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual accent card */}
          <div className="fade-in-up delay-200">
            <div
              className="rounded-[12px] border bg-navy text-text-on-navy p-10 flex flex-col gap-6"
              style={{ borderWidth: '0.5px' }}
            >
              <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                SSC 합격 공식
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { label: '노량진 커리큘럼', value: '100%' },
                  { label: '강원도 관리 밀착도', value: '최고' },
                  { label: '비용 대비 효율', value: '서울의 절반' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-white/70">{item.label}</span>
                    <span className="text-lg font-bold text-accent-amber font-sans">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-px bg-white/15" />
              <p className="text-xs text-white/50 leading-relaxed">
                원주 유일 커넥츠프랩(공단기) 파트너. 노량진 직계 프로그램을 강원도에서 그대로.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
