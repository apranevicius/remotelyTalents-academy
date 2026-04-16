import { AcademyFooter } from "../_components/academy-footer";
import { AcademyHeader } from "../_components/academy-header";
import { HomeAgencyIntroBlock } from "./_components/home-agency-intro-block";
import { HomeFeaturedCourseBlock } from "./_components/home-featured-course-block";
import { HomeHelpsBlock } from "./_components/home-helps-block";
import { HomeHeroBlock } from "./_components/home-hero-block";
import { HomeTrustStrip } from "./_components/home-trust-strip";
import { homeContent } from "./_content/home-content";

export function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--rt-cream)] text-[var(--rt-green)]">
      <AcademyHeader {...homeContent.header} />
      <HomeHeroBlock {...homeContent.hero} />
      <HomeTrustStrip {...homeContent.trustStrip} />
      <HomeHelpsBlock {...homeContent.helps} />
      <HomeAgencyIntroBlock {...homeContent.agencyIntro} />
      <HomeFeaturedCourseBlock {...homeContent.featuredCourse} />
      <AcademyFooter />
    </main>
  );
}
