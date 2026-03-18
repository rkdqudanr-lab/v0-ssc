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
import { Facilities, defaultFacilities } from '@/components/ssc/facilities'
import { Curriculum } from '@/components/ssc/curriculum'
import { Systems } from '@/components/ssc/systems'
import { Campus } from '@/components/ssc/campus'
import { Faq } from '@/components/ssc/faq'
import { CtaBanner } from '@/components/ssc/cta-banner'
import { Footer } from '@/components/ssc/footer'
import { MobileCtaBar } from '@/components/ssc/mobile-cta-bar'
import { ScrollRevealInit } from '@/components/ssc/scroll-reveal-init'

/** public/images/facility/{campus}/ 폴더에서 4-카드 시설 이미지 경로 목록을 읽어옵니다 */
function getFacilityImages(campus: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'facility', campus)
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => `/images/facility/${campus}/${f}`)
  } catch {
    return []
  }
}

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

const wonjuSlides = [
  {
    id: 1,
    image: '/images/campus-wonju.jpg',
    title: '원주 유일\n노량진 커넥츠프랩(공단기) 파트너',
    subtitle: '공무원 합격자에게 물어보세요, 합격자는 스파르타 했습니다.',
    description: '국가직 · 지방직 · 경찰 · 소방 · 군무원 전 직렬 커버',
    ctaLabel: '공무원 합격반 알아보기',
    ctaSecondaryLabel: '프로그램 둘러보기',
  },
  {
    id: 2,
    image: '/images/campus-wonju.jpg',
    title: '합리적 금액의 반값재수',
    subtitle: '생활 리듬이 무너지면 강의도 소용없어요. 관리가 먼저입니다.',
    description: '불필요한 실강 비용을 덜어내고 진짜 필요한 관리에만 집중',
    ctaLabel: '반값재수 알아보기',
  },
  {
    id: 3,
    image: '/images/campus-wonju.jpg',
    title: '임용에서 강합니다.\n매년 합격자를 배출합니다',
    subtitle: '초등·중등·유아 임용 — 마지막 60일이 합격을 가릅니다',
    description: '',
    ctaLabel: '임용반 알아보기',
  },
  {
    id: 4,
    image: '/images/campus-wonju.jpg',
    title: '세무사·노무사·기사시험\n4개월 단기합격의 비밀',
    subtitle: '교시제 시간표 + 코멘터 관리 — 전문자격도 관리가 결과를 만듭니다',
    description: '세무사 · 노무사 · 회계사 · 산업기사 · 각종 기사시험 전 방향 커버',
    ctaLabel: '전문자격반 알아보기',
  },
]

export default function WonjuPage() {
  // maincard 폴더 이미지를 슬라이드 배경으로 적용 (폴더에 이미지가 있으면 순서대로 매핑)
  const maincardImages = getMaincardImages('wonju')
  const slides = wonjuSlides.map((slide, i) => ({
    ...slide,
    image: maincardImages[i] ?? slide.image,
  }))

  const facilityImages = getFacilityImages('wonju')
  const facilitiesWithImages = facilityImages.length > 0
    ? defaultFacilities.map((f, i) => ({ ...f, image: facilityImages[i] ?? f.image }))
    : undefined

  return (
    <main className="overflow-x-hidden pb-16 md:pb-0">
      <ScrollRevealInit />
      <Navbar />
      <HeroSlider slides={slides} />

      {/* 이달의 프로그램 테이저 → /wonju/programs 페이지로 이동 */}
      {/* 📁 프로그램 사진 위치: public/images/programs/wonju/ */}
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
                매달 업데이트되는 원주 캠퍼스 합격 전략 프로그램
              </p>
            </div>
            <Link
              href="/wonju/programs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-colors whitespace-nowrap dark:bg-accent-blue"
            >
              더 알아보기
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />
      <Programs location="원주" />
      <Differentiation />
      {/* 합격후기 더보기 링크 - 원주 네이버 블로그 */}
      <Testimonials reviewUrl="https://blog.naver.com/guy0701/224198180485" />

      {/* 내부시설 미리보기 (4-카드 그리드) + 더 알아보기 → /wonju/interior 페이지로 이동 */}
      {/* 📁 4-카드 사진 위치: public/images/facility/wonju/ (01~04 번호 순서대로) */}
      <Facilities facilities={facilitiesWithImages} />
      <div className="bg-background pb-16 flex justify-center -mt-8">
        <Link
          href="/wonju/interior"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-navy text-navy text-sm font-semibold hover:bg-navy hover:text-white transition-colors dark:border-accent-blue dark:text-accent-blue dark:hover:bg-accent-blue dark:hover:text-white"
        >
          내부시설 더 알아보기
          <ChevronRight size={16} />
        </Link>
      </div>

      <Curriculum />
      <Systems />
      <Campus filter="원주" />
      <Faq />
      <CtaBanner />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
