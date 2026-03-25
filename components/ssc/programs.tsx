'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { ChevronRight, X, Check } from 'lucide-react'
import { CAMPUS_CONFIG } from '@/lib/campus-config'

// ============================================================
// ▼▼▼ 블로그 URL 수정 영역 ▼▼▼
// 각 지점(원주 / 춘천 / 충주)과 프로그램별 버튼을 여기서 관리합니다.
// url: '#' 인 항목은 나중에 실제 URL로 교체하세요.
// ============================================================
type BlogButton = { label: string; url: string }
const PROGRAM_BLOG_URLS: Record<string, Record<string, BlogButton[]>> = {
  // ── 공무원 합격반 ──────────────────────────────────────────
  gwanmuwon: {
    원주: [
      { label: '공무원 더 알아보기', url: 'https://blog.naver.com/guy0701/224221788388' },
    ],
    춘천: [
      { label: '공무원 더 알아보기', url: '#' }, // TODO: 춘천 공무원 URL로 교체
    ],
    충주: [
      { label: '공무원 더 알아보기', url: 'https://blog.naver.com/sscchungju/224021149574' },
      { label: '경찰 더 알아보기',   url: 'https://blog.naver.com/sscchungju/224147704850' },
      { label: '소방 더 알아보기',   url: 'https://blog.naver.com/sscchungju/223920273672' },
    ],
  },
  // ── 임용고시 합격반 ───────────────────────────────────────
  imdong: {
    원주: [
      { label: '임용 더 알아보기', url: 'https://blog.naver.com/PostView.naver?blogId=guy0701&logNo=224174015002&categoryNo=0&parentCategoryNo=0&viewDate=&currentPage=3&postListTopCurrentPage=&from=postList' },
    ],
    춘천: [
      { label: '임용 더 알아보기', url: '#' }, // TODO: 춘천 임용 URL로 교체
    ],
    충주: [
      { label: '임용 더 알아보기', url: 'https://blog.naver.com/sscchungju/224229215194' },
    ],
  },
  // ── 전문자격 집중반 ───────────────────────────────────────
  jagyeok: {
    원주: [
      { label: '전문자격 더 알아보기', url: 'https://blog.naver.com/PostView.naver?blogId=guy0701&logNo=224121357028&categoryNo=0&parentCategoryNo=0&viewDate=&currentPage=4&postListTopCurrentPage=1&from=postList&userTopListOpen=true&userTopListCount=5&userTopListManageOpen=false&userTopListCurrentPage=4' },
    ],
    춘천: [
      { label: '전문자격 더 알아보기', url: '#' }, // TODO: 춘천 전문자격 URL로 교체
    ],
    충주: [
      { label: '전문자격 더 알아보기', url: 'https://blog.naver.com/sscchungju/223562434007' },
    ],
  },
  // ── 독학재수 관리형 ───────────────────────────────────────
  jaesu: {
    원주: [
      { label: '재수 더 알아보기', url: 'https://blog.naver.com/guy0701/224128950623' },
    ],
    춘천: [
      { label: '재수 더 알아보기', url: '#' }, // TODO: 춘천 재수 URL로 교체
    ],
    충주: [
      { label: '재수 더 알아보기', url: 'https://blog.naver.com/sscchungju/224155599490' },
    ],
  },
}
// ▲▲▲ 블로그 URL 수정 영역 끝 ▲▲▲
// ============================================================

const cardColors: Record<string, string> = {
  gwanmuwon: '#0F1C3F',
  imdong: '#1a2744',
  jagyeok: '#0d1f3c',
  jaesu: '#1e1040',
}

const programsTabs = [
  {
    id: 'gwanmuwon',
    badge: '원주 유일 커넥츠프랩',
    title: '공무원\n합격반',
    subtitle: '노량진 합격 시스템을 원주에서 그대로 경험합니다',
    stat: '56% 합격률',
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
  },
  {
    id: 'imdong',
    badge: '매년 합격자 배출',
    title: '임용고시\n합격반',
    subtitle: '임용은 꾸준한 암기가 당락 가릅니다',
    stat: '매년 배출',
    description: `매일 12시간의 공부만이 합격을 만듭니다.
혼자서는 무너지는 루틴과 멘탈을,
SSC스파르타의 3단계 관리 시스템이 끝까지 잡아드립니다.`,
    steps: [
      { title: '① 출결 + 순찰', description: '순공 시간 확보' },
      { title: '② 1:1 루틴 점검', description: '멘탈 케어' },
      { title: '③ 매일 학습 마무리', description: '복습 완료 인증' },
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
    ],
  },
  {
    id: 'jagyeok',
    badge: '단기합격 시스템',
    title: '전문자격\n집중반',
    subtitle: '4개월 단기합격, 관리가 만든 결과입니다',
    stat: '4개월 합격',
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
    pullquote: '정해진 시간표에 맞춰 공부와 휴식이 나뉘어 있었고,\n반드시 채워야 하는 시간이 있어서\n공부량 확보에 결정적이었습니다.',
    author: '세무사 1차 4개월 단기합격자',
    timeline: [
      { month: '1개월', desc: '루틴 정착 + 기초 과목 완성' },
      { month: '2개월', desc: '심화 + 취약점 분석' },
      { month: '3개월', desc: '실전 모의고사 + 오답 정리' },
      { month: '4개월', desc: '최종 마무리 + 시험 직전 전략' },
    ],
  },
  {
    id: 'jaesu',
    badge: '합리적인 반값재수',
    title: '독학재수\n관리형',
    subtitle: '생활 리듬이 무너지면 강의도 소용없어요',
    stat: '기존대비 절반',
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
    },
  },
]

type Program = typeof programsTabs[number]

function ProgramDetail({ program, onClose, blogUrls, naverMapUrl }: { program: Program; onClose: () => void; blogUrls: Array<{ label: string; url: string }>; naverMapUrl: string }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="absolute inset-x-0 bottom-0 bg-background rounded-t-3xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'slideUp 0.4s ease-out' }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="px-6 pt-2 pb-4 flex items-start justify-between">
          <div>
            <span className="eyebrow text-accent-blue">{program.badge}</span>
            <h2 className="text-2xl font-bold text-navy dark:text-foreground mt-1 -tracking-tight whitespace-pre-line">
              {program.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-background-subtle mt-1 ml-4 flex-shrink-0"
            aria-label="닫기"
          >
            <X size={18} className="text-text-secondary" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-72 space-y-6">
          {/* Description */}
          <p className="text-text-secondary leading-relaxed whitespace-pre-line">
            {program.description}
          </p>

          {/* Steps */}
          {'steps' in program && program.steps && (
            <div className="space-y-4 border-t border-border-color pt-6">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">3단계 시스템</p>
              {(program.steps as Array<{title: string; description: string}>).map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-navy">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm mb-0.5">{step.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-line">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Subject Pills */}
          {'subjects' in program && program.subjects && (
            <div className="border-t border-border-color pt-6">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">커버 자격증</p>
              <div className="flex flex-wrap gap-2">
                {(program.subjects as string[]).map((subject, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Management items (jaesu) */}
          {'management' in program && program.management && (
            <div className="border-t border-border-color pt-6">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">관리 시스템</p>
              <div className="grid grid-cols-2 gap-3">
                {(program.management as Array<{icon: string; text: string}>).map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-background-subtle">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-xs text-text-secondary leading-tight">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="border-t border-border-color pt-6 space-y-3">
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">포함 혜택</p>
            {program.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={16} className="text-accent-blue flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-sm text-text-primary leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          {/* Timeline */}
          {'timeline' in program && program.timeline && (
            <div className="border-t border-border-color pt-6 space-y-2">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">합격 타임라인</p>
              {(program.timeline as Array<{month: string; desc: string}>).map((item, i) => (
                <div key={i} className="flex items-start gap-4 px-4 py-3 rounded-xl bg-background-subtle">
                  <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-navy/10 text-navy font-bold whitespace-nowrap">
                    {item.month}
                  </span>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Pull Quote */}
          {'pullquote' in program && program.pullquote && (
            <blockquote className="px-6 py-6 rounded-2xl bg-accent-blue/5 border-l-4 border-accent-blue">
              <p className="text-sm font-semibold text-navy dark:text-white leading-relaxed mb-2 whitespace-pre-line">
                &ldquo;{program.pullquote as string}&rdquo;
              </p>
              {'author' in program && <p className="text-xs text-text-secondary">— {program.author as string}</p>}
            </blockquote>
          )}

          {/* Single Testimonial */}
          {'testimonial' in program && program.testimonial && (
            <div className="px-6 py-6 rounded-2xl bg-navy/5 border border-navy/10">
              <blockquote className="text-sm font-semibold text-navy dark:text-white mb-2 whitespace-pre-line">
                &ldquo;{(program.testimonial as {quote: string; author: string}).quote}&rdquo;
              </blockquote>
              <p className="text-xs text-text-secondary">— {(program.testimonial as {quote: string; author: string}).author}</p>
            </div>
          )}

          {/* Multiple Testimonials */}
          {'testimonials' in program && program.testimonials && (
            <div className="space-y-3">
              {(program.testimonials as Array<{quote: string; author: string}>).map((t, i) => (
                <div key={i} className="px-6 py-5 rounded-2xl bg-navy/5 border border-navy/10">
                  <blockquote className="text-sm font-semibold text-navy dark:text-white mb-2 whitespace-pre-line">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="text-xs text-text-secondary">— {t.author}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-0 inset-x-0 p-4 bg-background border-t border-border-color flex flex-col gap-2">
          <a
            href={naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3.5 rounded-2xl bg-accent-amber text-navy font-bold text-base text-center"
          >
            좌석 예약하기 →
          </a>
          {blogUrls.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-2xl border border-navy text-navy font-semibold text-sm text-center dark:border-accent-blue dark:text-accent-blue"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const campusKeyMap = { '원주': 'wonju', '춘천': 'chuncheon', '충주': 'chungju' } as const

export function Programs({ location = '원주' }: { location?: '원주' | '춘천' | '충주' }) {
  const [selected, setSelected] = useState<string | null>(null)
  const ref = useScrollReveal()
  const selectedProgram = programsTabs.find((p) => p.id === selected)
  const selectedBlogUrls: BlogButton[] = selected
    ? (PROGRAM_BLOG_URLS[selected]?.[location] ?? [{ label: '더 알아보기', url: '#' }])
    : []
  const naverMapUrl = CAMPUS_CONFIG[campusKeyMap[location]].naverMapUrl

  return (
    <section id="programs" className="bg-background py-16 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="mb-10 text-center fade-in-up">
          <p className="eyebrow text-accent-blue mb-3">Programs</p>
          <h2 className="display-title text-3xl md:text-5xl font-bold text-navy dark:text-foreground">
            하나의 목표, 네 가지 길
          </h2>
          <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-xl mx-auto">
            어떤 시험이든 — SSC스파르타의 시스템이 함께합니다
          </p>
        </div>

        {/* Card stack */}
        <div className="flex flex-col gap-4">
          {programsTabs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setSelected(prog.id)}
              className="relative w-full text-left rounded-2xl p-8 min-h-[240px] flex flex-col justify-between overflow-hidden transition-transform duration-200 active:scale-[0.98] fade-in-up"
              style={{ backgroundColor: cardColors[prog.id] }}
            >
              {/* Badge */}
              <span className="inline-flex px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold w-fit mb-4">
                {prog.badge}
              </span>

              {/* Title + subtitle */}
              <div>
                <h3 className="text-white font-bold text-4xl md:text-5xl display-title whitespace-pre-line">
                  {prog.title}
                </h3>
                <p className="text-white/60 text-sm mt-2">{prog.subtitle}</p>
              </div>

              {/* Stat + arrow row */}
              <div className="flex items-end justify-between mt-6">
                <span className="text-2xl font-bold text-accent-amber font-sans">
                  {prog.stat}
                </span>
                <ChevronRight className="text-white/40" size={24} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail overlay */}
      {selected && selectedProgram && (
        <ProgramDetail
          program={selectedProgram}
          onClose={() => setSelected(null)}
          blogUrls={selectedBlogUrls}
          naverMapUrl={naverMapUrl}
        />
      )}
    </section>
  )
}
