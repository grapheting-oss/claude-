import { SiteHeader } from "@/components/SiteHeader";
import { BackgroundFX } from "@/components/BackgroundFX";
import { HeroSection } from "@/components/HeroSection";
import { FounderSection } from "@/components/FounderSection";
import { QuoteBanner } from "@/components/QuoteBanner";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import { ServicesList } from "@/components/ServicesList";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { DesignerSection } from "@/components/DesignerSection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <div id="about">
          <FounderSection />
        </div>
        <QuoteBanner />
        <ServicesMarquee />
        <div id="services">
          <ServicesList />
        </div>
        <div id="work">
          <ProjectsShowcase />
        </div>
        <DesignerSection />
        {/* Blue zone continues to the bottom of the page */}
        <div className="bg-gradient-to-b from-[#256ba0] to-[#153f66]">
          <div id="cta">
            <CtaSection />
          </div>
          <FaqSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
