'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '노량진과 커리큘럼이 정말 똑같나요?',
    a: '네. SSC스파르타는 원주 유일 커넥츠프랩(공단기) 파트너 학원으로, 노량진 본원과 동일한 강의 콘텐츠와 학습 시스템을 강원도에서 그대로 제공합니다. 다른 점은 서울에 가지 않아도 된다는 것, 그리고 코멘터의 밀착 관리가 더해진다는 점입니다.',
  },
  {
    q: '10만원 지원은 어떻게 신청하나요?',
    a: '원주시 청년 지원사업을 통해 신청 가능합니다. 원주시 1개월 이상 거주 만 18~39세 청년이라면 관리형 독서실 등록 후 지원사업을 신청하면 1인 1회 10만원을 지원받을 수 있습니다. 자세한 절차는 원주 캠퍼스로 문의 주시면 안내드립니다.',
  },
  {
    q: '공무원반과 관리형 독서실의 차이는 무엇인가요?',
    a: '공무원 합격반은 커넥츠프랩 강의 수강 + 코멘터 밀착 관리 + 면접 코칭까지 전 과정을 포함한 통합 프로그램입니다. 관리형 독서실(반값재수)은 수험생이 직접 공부 계획을 세우되, 코멘터의 출결 관리와 학습 점검 시스템 안에서 자기주도 학습을 하는 방식입니다.',
  },
  {
    q: '지역특화 취업반은 어떤 분들이 오나요?',
    a: '강원도 소재 공공기관, 준정부기관, 지역 기업 취업을 목표로 하는 분들이 주로 수강합니다. 서류 작성부터 NCS, 최종 면접까지 통합적으로 준비하고 싶은 분, 강원도에서 안정적으로 취업하고 싶은 분에게 적합합니다.',
  },
  {
    q: '온라인 강의도 병행할 수 있나요?',
    a: '네. 커넥츠프랩 콘텐츠는 온라인 강의와 오프라인 자습을 병행할 수 있도록 설계되어 있습니다. 현장 수강 외에도 개인 계정으로 온라인 강의를 반복 시청하며 복습할 수 있습니다.',
  },
  {
    q: '면접 준비는 언제부터 시작하나요?',
    a: '커리큘럼 4단계(10~11월) 최종 마무리 기간에 1:1 면접 코칭 프로그램을 운영합니다. 필기 합격 발표 이후 즉시 집중 면접 준비에 돌입할 수 있도록 사전 준비 과정도 함께 제공됩니다.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useScrollReveal()

  return (
    <section className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 fade-in-up">
          <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance">
            자주 묻는 질문
          </h2>
        </div>

        {/* Accordion */}
        <ul className="flex flex-col gap-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <li
                key={i}
                className={`fade-in-up delay-${(i % 4) * 100} rounded-[12px] border overflow-hidden transition-colors ${
                  isOpen
                    ? 'border-accent-blue/40 bg-background-blue-soft'
                    : 'border-border-color bg-background'
                }`}
                style={{ borderWidth: '0.5px' }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-text-primary leading-snug">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus size={16} className="text-accent-blue flex-shrink-0" />
                  ) : (
                    <Plus size={16} className="text-text-secondary flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
