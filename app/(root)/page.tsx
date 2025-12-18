import HeroSection from '@/components/ui/hero'
import { FeaturesSection } from '@/components/ui/features-section'
import { FAQSection } from '@/components/ui/faq-section'

const RootPage = () => {
  return (
    <>
      <div id="about">
        <HeroSection />
      </div>
      <div id="projects">
        <FeaturesSection />
      </div>
      <div id="contact">
        <FAQSection />
      </div>
    </>
  )
}

export default RootPage