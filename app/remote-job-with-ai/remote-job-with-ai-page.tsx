import { AcademyTestimonials } from "./_components/academy-testimonials";
import { AudienceFitSection } from "./_components/audience-fit-section";
import { CoursePhasesSection } from "./_components/course-phases-section";
import { FaqSection } from "./_components/faq-section";
import { FinalCtaSection } from "./_components/final-cta-section";
import { HeroSection } from "./_components/hero-section";
import { InstructorSection } from "./_components/instructor-section";
import { LegalFooter } from "./_components/legal-footer";
import { MidPageCtaSection } from "./_components/mid-page-cta-section";
import { MobileStickyCta } from "./_components/mobile-sticky-cta";
import { PageHeader } from "./_components/page-header";
import { PricingSection } from "./_components/pricing-section";
import { ToolkitSection } from "./_components/toolkit-section";

export function RemoteJobWithAIPageContent() {
  return (
    <main
      id="top"
      className="bg-[var(--rt-cream)] pb-24 text-[var(--rt-green)] md:pb-0"
    >
      <PageHeader />
      <HeroSection />
      <AudienceFitSection />
      <CoursePhasesSection />
      <MidPageCtaSection />
      <ToolkitSection />
      <PricingSection />
      <AcademyTestimonials />
      <InstructorSection />
      <FaqSection />
      <FinalCtaSection />
      <LegalFooter />
      <MobileStickyCta />
    </main>
  );
}
