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

const chuncheonSlides = [
  {
    id: 1,
    image: '/images/campus-chuncheon.jpg',
    title: '임용합격생의 추천으로\n이어지는 합격',
    subtitle: '매년 배출되는 합격자들이 다음 수험생을 이끌어 갑니다',
    description: '초등 · 중등 · 유아 임용 — 춘천스파르타에서 시작하세요',
    ctaLabel: '임용반 알아보기',
    ctaSecondaryLabel: '프로그램 둘러보기',
  },
  {
    id: 2,
    image: '/images/campus-chuncheon.jpg',
    title: '공무원 합격을 묻는다면?\n춘천스파르타',
    subtitle: '혼자서는 무너집니다. 관리받는 사람이 합격합니다.',
    description: '국가직 · 지방직 · 경찰 · 소방 · 군무원 전 직렬 커버',
    ctaLabel: '공무원 합격반 알아보기',
  },
  {
    id: 3,
    image: '/images/campus-chuncheon.jpg',
    title: '세무사·노무사·기사시험\n4개월 단기합격의 비밀',
    subtitle: '교시제 시간표 + 코멘터 관리 — 전문자격도 관리가 결과를 만듭니다',
    description: '세무사 · 노무사 · 회계사 · 산업기사 · 각종 기사시험 전 방향 커버',
    ctaLabel: '전문자격반 알아보기',
  },
  {
    id: 4,
    image: '/images/campus-chuncheon.jpg',
    title: '합리적 금액의 반값재수',
    subtitle: '생활 리듬이 무너지면 강의도 소용없어요. 관리가 먼저입니다.',
    description: '불필요한 실강 비용을 덜어내고 진짜 필요한 관리에만 집중',
    ctaLabel: '반값재수 알아보기',
  },
]

const chuncheonFacilities = [
  {
    id: 1,
    icon: 'BookOpen',
    image: '/images/chuncheon-facility-study.jpg',
    title: '개별 지정석 자습실',
    description: '불필요한 자극을 최소화한 공간. 모든 좌석은 개별 지정석으로 운영되며, 백색소음과 공조시스템으로 장시간 집중 환경을 유지합니다.',
  },
  {
    id: 2,
    icon: 'Users',
    image: '/images/chuncheon-facility-lounge.jpg',
    title: '스탠딩 라운지',
    description: '졸음이 오거나 집중이 끊길 때 자리를 완전히 이탈하지 않고 서서 공부하며 흐름을 회복하는 공간입니다.',
  },
  {
    id: 3,
    icon: 'Box',
    image: '/images/chuncheon-facility-locker.jpg',
    title: '개인 사물함 · 신발장',
    description: '모든 좌석에 개인 사물함이 제공됩니다. 신발장도 개인별로 배정되어 쾌적한 환경을 유지합니다.',
  },
  {
    id: 4,
    icon: 'Coffee',
    image: '/images/chuncheon-facility-surroundings.jpg',
    title: '편의시설 (병원, 카페 등)',
    description: '공부의 리듬을 잃지 않으면서 에너지를 챙길 수 있는 주변환경',
  },
]

export default function ChuncheonPage() {
  return (
    <main className="overflow-x-hidden pb-16 md:pb-0">
      <ScrollRevealInit />
      <Navbar />
      <HeroSlider slides={chuncheonSlides} />
      <TrustBar />
      <Programs />
      <Differentiation />
      <Testimonials />
      <Facilities facilities={chuncheonFacilities} />
      <Curriculum />
      <Systems />
      <Campus filter="춘천" />
      <Faq />
      <CtaBanner />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
