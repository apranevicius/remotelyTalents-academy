import type { Metadata } from "next";

import { AcademyTestimonials } from "./_components/academy-testimonials";
import { AudienceFitSection } from "./_components/audience-fit-section";
import { CoursePhasesSection } from "./_components/course-phases-section";
import { FaqSection } from "./_components/faq-section";
import { FinalCtaSection } from "./_components/final-cta-section";
import { HeroSection } from "./_components/hero-section";
import { InstructorSection } from "./_components/instructor-section";
import { LegalFooter } from "./_components/legal-footer";
import { MidPageCtaSection } from "./_components/mid-page-cta-section";
import { PageHeader } from "./_components/page-header";
import { PricingSection } from "./_components/pricing-section";
import { ToolkitSection } from "./_components/toolkit-section";

export const metadata: Metadata = {
  title: "Remote Job With AI | RemotelyTalents Academy",
  description:
    "Find a remote job with the help of AI in 29 days with a recruiter-led system from RemotelyTalents Academy.",
};

export default function RemoteJobWithAIPage() {
  return (
    <main id="top" className="bg-[var(--rt-cream)] text-[var(--rt-green)]">
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
    </main>
  );
}
