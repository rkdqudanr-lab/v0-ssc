import { Navbar } from '@/components/ssc/navbar'
import { HeroSlider } from '@/components/ssc/hero-slider'
import { MonthlyProgram } from '@/components/ssc/monthly-program'
import { TrustBar } from '@/components/ssc/trust-bar'
import { Programs } from '@/components/ssc/programs'
import { Differentiation } from '@/components/ssc/differentiation'
import { Testimonials } from '@/components/ssc/testimonials'
import { InteriorFacilities } from '@/components/ssc/interior-facilities'
import { Curriculum } from '@/components/ssc/curriculum'
import { Systems } from '@/components/ssc/systems'
import { Campus } from '@/components/ssc/campus'
import { Faq } from '@/components/ssc/faq'
import { CtaBanner } from '@/components/ssc/cta-banner'
import { Footer } from '@/components/ssc/footer'
import { MobileCtaBar } from '@/components/ssc/mobile-cta-bar'
import { ScrollRevealInit } from '@/components/ssc/scroll-reveal-init'

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
  return (
    <main className="overflow-x-hidden pb-16 md:pb-0">
      <ScrollRevealInit />
      <Navbar />
      <HeroSlider slides={chungjuSlides} />
      <MonthlyProgram campus="chungju" title="이달의 프로그램" />
      <TrustBar />
      <Programs />
      <Differentiation />
      {/* TODO: 충주 합격후기 블로그 URL - 나중에 수정 필요 */}
      <Testimonials reviewUrl="https://blog.naver.com/guy0701/224198180485" />
      <InteriorFacilities campus="chungju" />
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
