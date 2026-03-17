'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Check } from 'lucide-react'

const programsTabs = [
  {
    id: 'civil',
    label: '공무원 합격반',
    badge: '노량진 직계',
    badgeColor: 'bg-accent-amber/15 text-accent-amber border-accent-amber/30',
    title: '커넥츠프랩(공단기) 공무원 합격반',
    description: [
      '원주 지역 유일 커넥츠프랩 파트너 학원.',
      '노량진 공단기의 합격 시스템을 강원도에서 그대로 경험합니다.',
      '필기부터 면접까지 담임 코멘터가 전 과정을 함께 관리합니다.',
    ],
    features: [
      '커넥츠프랩 전국모의고사 + 취약점 분석 프로그램',
      '교시제 시간표 운영 (순공 10시간+ 확보)',
      '담임 코멘터 1:1 밀착 관리',
      '필기 합격 후 면접 코칭까지 연계',
      '플래너 인증 + 월간 조회',
    ],
  },
  {
    id: 'job',
    label: '지역특화 취업반',
    badge: '강원도 특화',
    badgeColor: 'bg-accent-blue/15 text-accent-blue border-accent-blue/30',
    title: '강원도 공공기관·지역기업 취업반',
    description: [
      '강원도 공공기관 및 지역 기업 취업을 목표로 하는',
      '수험생을 위한 맞춤형 프로그램.',
      '서류·NCS·면접을 하나의 흐름으로 통합 관리합니다.',
    ],
    features: [
      'NCS 직업기초능력 집중 커리큘럼',
      '강원도 공공기관 채용 트렌드 특화 분석',
      '서류 → 필기 → 면접 단계별 통합 관리',
      '모의면접 + 그룹 스터디 정기 운영',
      '담임 코멘터 개인 취업 전략 상담',
    ],
  },
  {
    id: 'restudy',
    label: '반값재수·관독',
    badge: '관리형 자습',
    badgeColor: 'bg-blue-900/20 text-blue-900/70 border-blue-900/30 dark:bg-blue-500/15 dark:text-blue-400/70 dark:border-blue-500/30',
    title: '반값재수 / 관리형 독서실',
    description: [
      '공부 의지만으로 버티는 수험생활은 오래가지 않습니다.',
      '환경·시간표·생활관리까지,',
      '공부가 유지될 수밖에 없는 구조 안에서 시작하세요.',
    ],
    features: [
      '교시제 시간표 + 순공 10시간+ 확보',
      '개별 지정석 + 스탠딩 라운지 분리 운영',
      '수기·태블릿 2중 출결 관리',
      '플래너 인증 (공부량이 아닌 \'지켜졌는지\' 기준)',
      '수능 재수·자격증·취준생 모두 환영',
    ],
  },
]

export function Programs() {
  const [active, setActive] = useState('civil')
  const ref = useScrollReveal()
  const program = programsTabs.find((p) => p.id === active)!

  return (
    <section id="programs" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="mb-12 fade-in-up">
          <p className="text-xs font-semibold text-accent-blue uppercase tracking-widest mb-3">
            Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3">
            하나의 목표, 세 가지 길
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-xl">
            공무원이든, 취업이든, 재수든 — SSC스파르타에 답이 있습니다
          </p>
        </div>

        {/* Tab bar */}
        <div className="inline-flex gap-2 p-1.5 bg-background-subtle rounded-xl border border-border-color mb-10 fade-in-up delay-100">
          {programsTabs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActive(prog.id)}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                active === prog.id
                  ? 'bg-navy text-white dark:bg-accent-blue'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {prog.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid md:grid-cols-2 gap-8 fade-in-up delay-200">
          {/* Left: Description card */}
          <div
            className="rounded-[12px] border border-border-color bg-white dark:bg-background-subtle p-8 flex flex-col gap-5"
            style={{ borderWidth: '0.5px' }}
          >
            {/* Badge */}
            <span
              className={`inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-semibold border ${program.badgeColor}`}
            >
              {program.badge}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold text-navy dark:text-white leading-tight">
              {program.title}
            </h3>

            {/* Description */}
            <div className="space-y-2">
              {program.description.map((line, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-base">
                  {line}
                </p>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-white font-semibold text-sm hover:bg-accent-blue/90 transition-colors mt-2"
            >
              상담 신청하기 →
            </button>
          </div>

          {/* Right: Features checklist */}
          <div className="flex flex-col gap-4">
            {program.features.map((feature, i) => (
              <div
                key={i}
                className={`fade-in-up delay-${300 + i * 50} flex items-start gap-3 px-5 py-4 rounded-lg border border-border-color bg-background-subtle`}
                style={{ borderWidth: '0.5px' }}
              >
                <Check
                  size={20}
                  className="text-accent-blue flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-base font-medium text-text-primary leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
