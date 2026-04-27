import { AcademyFooter } from "../_components/academy-footer";
import { AcademyHeader } from "../_components/academy-header";
import { HomeTrustStrip } from "../_home/_components/home-trust-strip";
import { AboutAgencyProofSection } from "./_components/about-agency-proof-section";
import { AboutBeliefsSection } from "./_components/about-beliefs-section";
import { AboutDirectionSection } from "./_components/about-direction-section";
import { AboutFounderSection } from "./_components/about-founder-section";
import { AboutHeroSection } from "./_components/about-hero-section";
import { aboutContent } from "./_content/about-content";

export function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--rt-cream)] text-[var(--rt-green)]">
      <AcademyHeader {...aboutContent.header} />
      <AboutHeroSection {...aboutContent.hero} />
      <HomeTrustStrip {...aboutContent.trustStrip} />
      <AboutAgencyProofSection {...aboutContent.agencyProof} />
      <AboutFounderSection {...aboutContent.founder} />
      <AboutBeliefsSection {...aboutContent.beliefs} />
      <AboutDirectionSection {...aboutContent.direction} />
      <AcademyFooter description="RemotelyTalents Academy is the education arm of RemotelyTalents, built to turn remote recruitment experience into practical guidance for professionals navigating the remote-job market." />
    </main>
  );
}
