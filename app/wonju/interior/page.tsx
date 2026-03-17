import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { getPublicImages } from '@/lib/images'
import { Navbar } from '@/components/ssc/navbar'
import { Facilities } from '@/components/ssc/facilities'
import { InteriorFacilities } from '@/components/ssc/interior-facilities'
import { CtaBanner } from '@/components/ssc/cta-banner'
import { Footer } from '@/components/ssc/footer'
import { MobileCtaBar } from '@/components/ssc/mobile-cta-bar'
import { ScrollRevealInit } from '@/components/ssc/scroll-reveal-init'

export default function WonjuInteriorPage() {
  // 시설 카드 이미지 (4-카드 그리드용)
  // 📁 사진 위치: public/images/facilitycard/wonju/
  //   01_자습실.jpg, 02_라운지.jpg, 03_사물함.jpg, 04_편의시설.jpg
  const facilityImages = getPublicImages('facilitycard', 'wonju')

  return (
    <main className="overflow-x-hidden pb-16 md:pb-0">
      <ScrollRevealInit />
      <Navbar />

      {/* 페이지 헤더 */}
      <div className="pt-16 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <Link
            href="/wonju"
            className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-5 transition-colors"
          >
            <ChevronLeft size={16} />
            원주 홈으로
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">내부시설</h1>
          <p className="text-white/70 text-base">공부가 유지될 수밖에 없는 구조</p>
        </div>
      </div>

      {/* 시설 4-카드 그리드 (사진 없어도 항상 표시) */}
      {/* 📁 시설카드 사진 위치: public/images/facilitycard/wonju/ */}
      <Facilities facilityImages={facilityImages} />

      {/* 실내 사진 갤러리 (사진 넣으면 자동 표시) */}
      {/* 📁 갤러리 사진 위치: public/images/interior/wonju/ */}
      <InteriorFacilities campus="wonju" />

      <CtaBanner />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
