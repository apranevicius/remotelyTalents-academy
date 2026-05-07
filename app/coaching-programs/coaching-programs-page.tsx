import { AcademyFooter } from "../_components/academy-footer";
import { AcademyHeader } from "../_components/academy-header";
import { HomeTrustStrip } from "../_home/_components/home-trust-strip";
import { CoachingApproachSection } from "./_components/coaching-approach-section";
import { CoachingCoachSection } from "./_components/coaching-coach-section";
import { CoachingFaqSection } from "./_components/coaching-faq-section";
import { CoachingFinalCtaSection } from "./_components/coaching-final-cta-section";
import { CoachingFitSection } from "./_components/coaching-fit-section";
import { CoachingHeroSection } from "./_components/coaching-hero-section";
import { CoachingProcessSection } from "./_components/coaching-process-section";
import { CoachingProgramsSection } from "./_components/coaching-programs-section";
import { CoachingProblemSection } from "./_components/coaching-problem-section";
import { CoachingTestimonialsSection } from "./_components/coaching-testimonials-section";
import { CoachingVideoSection } from "./_components/coaching-video-section";
import { coachingProgramsContent } from "./_content/coaching-programs-content";

export function CoachingProgramsPage() {
  return (
    <main className="min-h-screen bg-[var(--rt-cream)] text-[var(--rt-green)]">
      <AcademyHeader {...coachingProgramsContent.header} />
      <CoachingHeroSection {...coachingProgramsContent.hero} />
      <HomeTrustStrip {...coachingProgramsContent.trustStrip} />
      <CoachingVideoSection {...coachingProgramsContent.video} />
      <CoachingProblemSection {...coachingProgramsContent.problem} />
      <CoachingApproachSection {...coachingProgramsContent.approach} />
      <CoachingProgramsSection {...coachingProgramsContent.programs} />
      <CoachingProcessSection {...coachingProgramsContent.process} />
      <CoachingCoachSection {...coachingProgramsContent.coach} />
      <CoachingFitSection {...coachingProgramsContent.fit} />
      <CoachingTestimonialsSection {...coachingProgramsContent.testimonials} />
      <CoachingFaqSection {...coachingProgramsContent.faq} />
      <CoachingFinalCtaSection {...coachingProgramsContent.finalCta} />
      <AcademyFooter description="RemotelyTalents Academy helps professionals improve their remote job search through education, tools, and coaching. Results vary and depend on your experience, market conditions, and execution." />
    </main>
  );
}
