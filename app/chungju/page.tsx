import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/ssc/navbar'
import { HeroSlider } from '@/components/ssc/hero-slider'
import { TrustBar } from '@/components/ssc/trust-bar'
import { Programs } from '@/components/ssc/programs'
import { Differentiation } from '@/components/ssc/differentiation'
import { Testimonials } from '@/components/ssc/testimonials'
import { Facilities } from '@/components/ssc/facilities'
import { Curriculum } from '@/components/ssc/curriculum'
import { Systems } from '@/components/ssc/systems'
import { Campus } from '@/components/ssc/campus'
import { Faq } from '@/components/ssc/faq'
import { CtaBanner } from '@/components/ssc/cta-banner'
import { Footer } from '@/components/ssc/footer'
import { MobileCtaBar } from '@/components/ssc/mobile-cta-bar'
import { ScrollRevealInit } from '@/components/ssc/scroll-reveal-init'

/** public/images/maincard/{campus}/ 폴더에서 이미지 경로 목록을 읽어옵니다 */
function getMaincardImages(campus: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'maincard', campus)
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => `/images/maincard/${campus}/${f}`)
  } catch {
    return []
  }
}

const chungjuSlides = [
  {
    id: 1,
    image: '/images/campus-chungju.jpg',
    title: '대치동의 자료 그대로\n커넥츠프랩 수능관',
    subtitle: '서울 대치동 수준의 콘텐츠를 충주에서 — 거리의 차이는 없앴습니다',
    description: '수능 · 독학재수 · 전문자격 전 방향 커버',
    ctaLabel: '수능관 알아보기',
    ctaSecondaryLabel: '프로그램 둘러보기',
  },
  {
    id: 2,
    image: '/images/campus-chungju.jpg',
    title: '충주 공무원 합격의 메카',
    subtitle: '독한 관리와 커넥츠프랩 시스템으로 매년 합격자를 배출합니다',
    description: '국가직 · 지방직 · 경찰 · 소방 · 군무원 전 직렬 커버',
    ctaLabel: '공무원 합격반 알아보기',
  },
  {
    id: 3,
    image: '/images/campus-chungju.jpg',
    title: '"스파르타는 임용생에게\n빛입니다"',
    subtitle: '충주스파르타 임용 합격생의 후기 — 의지 없어도 시스템이 잡아줍니다',
    description: '초등 · 중등 · 유아 임용 매년 합격자 배출',
    ctaLabel: '임용반 알아보기',
  },
  {
    id: 4,
    image: '/images/campus-chungju.jpg',
    title: '세무사·노무사·기사시험\n4개월 단기합격의 비밀',
    subtitle: '교시제 시간표 + 코멘터 관리 — 전문자격도 관리가 결과를 만듭니다',
    description: '세무사 · 노무사 · 회계사 · 산업기사 · 각종 기사시험 전 방향 커버',
    ctaLabel: '전문자격반 알아보기',
  },
]

export default function ChungjuPage() {
  // maincard 폴더 이미지를 슬라이드 배경으로 적용 (폴더에 이미지가 있으면 순서대로 매핑)
  const maincardImages = getMaincardImages('chungju')
  const slides = chungjuSlides.map((slide, i) => ({
    ...slide,
    image: maincardImages[i] ?? slide.image,
  }))

  return (
    <main className="overflow-x-hidden pb-16 md:pb-0">
      <ScrollRevealInit />
      <Navbar />
      <HeroSlider slides={slides} />

      {/* 이달의 프로그램 테이저 → /chungju/programs 페이지로 이동 */}
      {/* 📁 프로그램 사진 위치: public/images/programs/chungju/ */}
      <section id="monthly-program" className="bg-background-subtle py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-[16px] border border-border-color bg-background p-8"
            style={{ borderWidth: '0.5px' }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-foreground mb-2">
                이달의 프로그램
              </h2>
              <p className="text-text-secondary text-sm md:text-base">
                매달 업데이트되는 충주 캠퍼스 합격 전략 프로그램
              </p>
            </div>
            <Link
              href="/chungju/programs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-colors whitespace-nowrap dark:bg-accent-blue"
            >
              더 알아보기
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />
      <Programs />
      <Differentiation />
      {/* TODO: 충주 합격후기 블로그 URL - 나중에 수정 필요 */}
      <Testimonials reviewUrl="https://blog.naver.com/guy0701/224198180485" />

      {/* 내부시설 미리보기 (4-카드 그리드) + 더 알아보기 → /chungju/interior 페이지로 이동 */}
      {/* 📁 내부시설 사진 위치: public/images/interior/chungju/ */}
      <Facilities />
      <div className="bg-background pb-16 flex justify-center -mt-8">
        <Link
          href="/chungju/interior"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-navy text-navy text-sm font-semibold hover:bg-navy hover:text-white transition-colors dark:border-accent-blue dark:text-accent-blue dark:hover:bg-accent-blue dark:hover:text-white"
        >
          내부시설 더 알아보기
          <ChevronRight size={16} />
        </Link>
      </div>

      <Curriculum />
      <Systems />
      <Campus filter="충주" />
      <Faq />
      <CtaBanner />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
