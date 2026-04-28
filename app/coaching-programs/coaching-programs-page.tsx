import { AcademyFooter } from "../_components/academy-footer";
import { AcademyHeader } from "../_components/academy-header";
import { HomeTrustStrip } from "../_home/_components/home-trust-strip";
import { CoachingHeroSection } from "./_components/coaching-hero-section";
import { CoachingInterestSection } from "./_components/coaching-interest-section";
import { CoachingWhySection } from "./_components/coaching-why-section";
import { coachingProgramsContent } from "./_content/coaching-programs-content";

export function CoachingProgramsPage() {
  return (
    <main className="min-h-screen bg-[var(--rt-cream)] text-[var(--rt-green)]">
      <AcademyHeader {...coachingProgramsContent.header} />
      <CoachingHeroSection {...coachingProgramsContent.hero} />
      <HomeTrustStrip {...coachingProgramsContent.trustStrip} />
      <CoachingWhySection {...coachingProgramsContent.why} />
      <CoachingInterestSection {...coachingProgramsContent.interest} />
      <AcademyFooter description="RemotelyTalents Academy is testing demand for remote-job coaching for professionals who want more personal guidance than a self-paced course." />
    </main>
  );
}
