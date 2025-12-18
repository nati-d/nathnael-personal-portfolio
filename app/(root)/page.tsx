import HeroSection from '@/components/ui/hero'
import { FeaturesSection } from '@/components/ui/features-section'
// import { FAQSection } from '@/components/ui/faq-section'
import { ContactForm } from '@/components/ui/contact-form'

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
        {/* <FAQSection /> */}
        <ContactForm />
      </div>
    </>
  )
}

export default RootPage