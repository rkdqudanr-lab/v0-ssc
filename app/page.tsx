import { Navbar } from '@/components/ssc/navbar'
import { HeroSlider } from '@/components/ssc/hero-slider'
import { TrustBar } from '@/components/ssc/trust-bar'
import { Programs } from '@/components/ssc/programs'
import { Differentiation } from '@/components/ssc/differentiation'
import { Testimonials } from '@/components/ssc/testimonials'
import { Subsidy } from '@/components/ssc/subsidy'
import { Facilities } from '@/components/ssc/facilities'
import { Curriculum } from '@/components/ssc/curriculum'
import { Systems } from '@/components/ssc/systems'
import { Campus } from '@/components/ssc/campus'
import { Faq } from '@/components/ssc/faq'
import { CtaBanner } from '@/components/ssc/cta-banner'
import { Footer } from '@/components/ssc/footer'
import { MobileCtaBar } from '@/components/ssc/mobile-cta-bar'
import { ScrollRevealInit } from '@/components/ssc/scroll-reveal-init'

export default function Home() {
  return (
    <main className="overflow-x-hidden pb-16 md:pb-0">
      <ScrollRevealInit />
      <Navbar />
      <HeroSlider />
      <TrustBar />
      <Programs />
      <Differentiation />
      <Testimonials />
      <Subsidy />
      <Facilities />
      <Curriculum />
      <Systems />
      <Campus />
      <Faq />
      <CtaBanner />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
