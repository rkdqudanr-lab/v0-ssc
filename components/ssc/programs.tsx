'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Check } from 'lucide-react'

const programsTabs = [
  {
    id: 'gwanmuwon',
    label: '공무원 합격반 · 원주유일',
    badge: '원주 유일 커넥츠프랩',
    title: '커넥츠프랩(공단기) 공무원 합격반',
    subtitle: '노량진 합격 시스템을 원주에서 그대로 경험합니다',
    description: `원주 지역 유일 커넥츠프랩 파트너 학원.
공단기 콘텐츠 기반 합격 시스템 + 코멘터 밀착 관리로
필기부터 면접까지 전 과정을 함께 설계합니다.
커버 직렬: 국가직 / 지방직 / 경찰 / 소방 / 군무원`,
    steps: [
      {
        title: '① 취약점 분석',
        description: '커넥츠프랩 + 모의고사 데이터로\n과목별 약점을 정밀 파악'
      },
      {
        title: '② 루틴 고정',
        description: '교시제 시간표 + 코멘터 담임관리로\n하루 순공 10시간+ 구조화'
      },
      {
        title: '③ 실전 마무리',
        description: '전국 단위 모의고사 + 면접 코칭\n필기 합격 후 최종 합격까지 연계'
      },
    ],
    features: [
      '커넥츠프랩 전국모의고사 + 취약점 분석 리포트',
      '교시제 시간표 (08:20–22:00 / 순공 10시간+)',
      '코멘터 담임제 1:1 밀착 관리',
      '경찰·소방 체력학원 연계 (필기+체력+면접 원스톱)',
      '필기 합격 후 면접 코칭까지 자동 연계',
    ],
    testimonial: {
      quote: '학원에서 확보해주는 시간에만\n공부해도 남들보다 두 배 이상 집중하게 된다',
      author: '경찰직 합격자 이○○님'
    },
    stat: '공단기 합격자의 68.4%\n2021~2024 국가직 9급 기준'
  },
  {
    id: 'imdong',
    label: '임용반 · 매년배출',
    badge: '매년 합격자 배출',
    title: '초등·중등·유아 임용고시 합격반',
    subtitle: '임용은 꾸준한 암기가 당락 가릅니다',
    description: `매일 12시간의 공부만이 합격을 만듭니다.
혼자서는 무너지는 루틴과 멘탈을,
SSC스파르타의 3단계 관리 시스템이 끝까지 잡아드립니다.`,
    steps: [
      {
        title: '① 출결 + 순찰',
        description: '순공 시간 확보'
      },
      {
        title: '② 1:1 루틴 점검',
        description: '멘탈 케어'
      },
      {
        title: '③ 매일 학습 마무리',
        description: '복습 완료 인증'
      },
    ],
    features: [
      '교시제 운영 — 하루 3시간→11시간 순공 전환 사례',
      '코멘터 멘탈 케어 + 주간 피드백',
      '플래너 인증 (지켜졌는지 기준으로 관리)',
      '초등/중등/유아 전 직렬 학습',
      '임용 전용 스터디실 대여',
    ],
    testimonials: [
      { quote: '하루 3시간 → 11시간 순공\nSSC에서 시간관리 루틴 잡아줘서\n3배 이상 공부시간 늘었어요', author: '24년 중등특수 최○○' },
      { quote: '의지 없이 떠밀리듯 공부하던 제가\n스파르타 덕분에 합격까지 완주했어요', author: '25년 유아임용 전○○' },
    ]
  },
  {
    id: 'jagyeok',
    label: '전문자격 · 단기합격',
    badge: '단기합격 시스템',
    title: '전문자격증 집중 합격반',
    subtitle: '4개월 단기합격, 관리가 만든 결과입니다',
    description: `세무사, 노무사, 회계사, 각종 기사시험.
단기간 압축 학습이 필요한 전문자격 시험에서
교시제 시간표 + 코멘터 관리가 결정적 차이를 만듭니다.`,
    subjects: ['세무사', '노무사', '회계사', '산업기사', '기사시험', '그 외 전 자격증'],
    features: [
      '전담 코멘터 일일·주간 계획 관리',
      '교시제 — 공부와 휴식의 명확한 분리',
      '넓은 개인 지정석 + 백색소음 환경',
      '단기간 집중을 위한 생활 전반 관리',
      '취약점 집중 관리 + 반복 실수 방지',
    ],
    pullquote: '정해진 시간표에 맞춰 공부와 휴식이 나뉘어 있었고,\n반드시 채워야 하는 시간이 있어서\n공부량 확보에 결정적이었습니다.\n혼자였다면 절대 지키기 힘들었을 텐데,\n관리가 있어서 가능했다고 생각합니다.',
    author: '세무사 1차 4개월 단기합격자',
    timeline: [
      { month: '1개월', desc: '루틴 정착 + 기초 과목 완성' },
      { month: '2개월', desc: '심화 + 취약점 분석' },
      { month: '3개월', desc: '실전 모의고사 + 오답 정리' },
      { month: '4개월', desc: '최종 마무리 + 시험 직전 전략' },
    ]
  },
  {
    id: 'jaesu',
    label: '재수반 · 월30만원대',
    badge: '월 30만원대 반값재수',
    title: '독학재수 / 관리형 자습',
    subtitle: '생활 리듬이 무너지면 강의도 소용없어요',
    description: `재수가 실패하는 가장 큰 이유는 멘탈이 아니라
생활의 무너짐입니다.
SSC스파르타는 불필요한 실강 비용을 덜어내고,
진짜 필요한 것 — 환경·일정·출결·휴대폰 통제·상담 —
에만 집중한 월 30만원대 반값 구조입니다.`,
    management: [
      { icon: '📋', text: '매일 기상 시간 체크' },
      { icon: '📱', text: '휴대폰 제출 (집중력 극대화)' },
      { icon: '📓', text: '플래너 인증 + 코멘터 피드백' },
      { icon: '💬', text: '주간 상담 (루틴 붕괴 즉시 대응)' },
    ],
    features: [
      '현강 없이 온라인 강의 + 관리만 — 비용 최소화',
      '수능 재수생·N수생이 이미 많은 분위기',
      '비교 없는, 조용히 자기 페이스대로 공부하는 환경',
      '대학 재수 / 자격증 / 취준 전 방향 수용',
      '주간 상담 + 루틴 붕괴 즉시 대응',
    ],
    testimonial: {
      quote: '여긴 비교하는 분위기가 아니라,\n그냥 자기 공부만 하게 되는 공간이었어요.\n그게 제일 좋았습니다.',
      author: 'K대 수의예과 합격자 지○○님'
    }
  },
]

export function Programs() {
  const [active, setActive] = useState('gwanmuwon')
  const ref = useScrollReveal()
  const program = programsTabs.find((p) => p.id === active)!

  return (
    <section id="programs" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="mb-16 fade-in-up text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-foreground mb-3">
            하나의 목표, 네 가지 길
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            어떤 시험이든 — SSC스파르타의 시스템이 함께합니다
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-3 mb-12 fade-in-up overflow-x-auto pb-2">
          {programsTabs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActive(prog.id)}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-colors ${
                active === prog.id
                  ? 'bg-navy text-white'
                  : 'border border-border-color text-text-secondary hover:text-text-primary'
              }`}
            >
              {prog.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid md:grid-cols-3 gap-8 fade-in-up">
          {/* Left: Description */}
          <div className="md:col-span-1">
            <div
              className="rounded-[12px] border border-border-color bg-white dark:bg-background-subtle p-8 flex flex-col gap-6"
              style={{ borderWidth: '0.5px' }}
            >
              {/* Badge */}
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-accent-amber/15 text-accent-amber border border-accent-amber/30">
                {program.badge}
              </span>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy dark:text-white mb-2">
                  {program.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary">{program.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-base text-text-secondary leading-relaxed whitespace-pre-line">
                {program.description}
              </p>

              {/* Steps (if available) */}
              {program.steps && (
                <div className="space-y-4 border-t border-border-color pt-6">
                  {program.steps.map((step, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-text-primary text-sm mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-line">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Management items (for jaesu) */}
              {(program as any).management && (
                <div className="grid grid-cols-2 gap-3 border-t border-border-color pt-6">
                  {(program as any).management.map((item: any, i: number) => (
                    <div key={i} className="text-sm">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <p className="text-xs text-text-secondary leading-tight">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <button className="w-full px-4 py-3 rounded-lg bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-colors mt-auto">
                상담 신청하기 →
              </button>
            </div>
          </div>

          {/* Right: Features + Testimonials */}
          <div className="md:col-span-2 space-y-8">
            {/* Features */}
            <div className="space-y-3">
              {program.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-border-color bg-background-subtle"
                  style={{ borderWidth: '0.5px' }}
                >
                  <Check
                    size={18}
                    className="text-accent-blue flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm sm:text-base font-medium text-text-primary leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stat (gwanmuwon) */}
            {(program as any).stat && (
              <div className="px-6 py-6 rounded-lg bg-accent-blue/5 border border-accent-blue/20">
                <p className="text-sm font-semibold text-accent-blue whitespace-pre-line">
                  {(program as any).stat}
                </p>
              </div>
            )}

            {/* Single Testimonial */}
            {(program as any).testimonial && (
              <div className="px-4 sm:px-6 py-4 sm:py-6 rounded-lg bg-navy/5 border border-navy/10">
                <blockquote className="text-sm sm:text-base font-semibold text-navy dark:text-white mb-2 sm:mb-3 whitespace-pre-line">
                  "{(program as any).testimonial.quote}"
                </blockquote>
                <p className="text-xs sm:text-sm text-text-secondary">
                  — {(program as any).testimonial.author}
                </p>
              </div>
            )}

            {/* Multiple Testimonials */}
            {(program as any).testimonials && (
              <div className="space-y-2 sm:space-y-3">
                {(program as any).testimonials.map((t: any, i: number) => (
                  <div key={i} className="px-4 sm:px-6 py-4 sm:py-6 rounded-lg bg-navy/5 border border-navy/10">
                    <blockquote className="text-xs sm:text-sm font-semibold text-navy dark:text-white mb-1 sm:mb-2 whitespace-pre-line">
                      "{t.quote}"
                    </blockquote>
                    <p className="text-xs text-text-secondary">— {t.author}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Pull Quote */}
            {(program as any).pullquote && (
              <blockquote className="px-4 sm:px-6 py-6 sm:py-8 rounded-lg bg-accent-blue/5 border-l-4 border-accent-blue">
                <p className="text-sm sm:text-base font-semibold text-navy dark:text-white leading-relaxed mb-2 sm:mb-3 whitespace-pre-line">
                  "{(program as any).pullquote}"
                </p>
                <p className="text-xs sm:text-sm text-text-secondary">
                  — {(program as any).author}
                </p>
              </blockquote>
            )}

            {/* Timeline */}
            {(program as any).timeline && (
              <div className="space-y-2">
                {(program as any).timeline.map((item: any, i: number) => (
                  <div key={i} className="flex items-start gap-4 px-4 py-3 rounded-lg bg-background-subtle border border-border-color">
                    <div className="font-bold text-navy dark:text-accent-blue whitespace-nowrap text-sm">
                      {item.month}
                    </div>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Subject Pills */}
            {(program as any).subjects && (
              <div className="flex flex-wrap gap-2">
                {(program as any).subjects.map((subject: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
