import { Navbar } from '@/components/ssc/navbar'
import { Hero } from '@/components/ssc/hero'
import { TrustBar } from '@/components/ssc/trust-bar'
import { Programs } from '@/components/ssc/programs'
import { Differentiation } from '@/components/ssc/differentiation'
import { Testimonials } from '@/components/ssc/testimonials'
import { Curriculum } from '@/components/ssc/curriculum'
import { Subsidy } from '@/components/ssc/subsidy'
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
      <Hero />
      <TrustBar />
      <Programs />
      <Differentiation />
      <Testimonials />
      <Curriculum />
      <Subsidy />
      <Systems />
      <Campus />
      <Faq />
      <CtaBanner />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
