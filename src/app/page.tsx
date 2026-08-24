import { SiteHeader } from "@/components/SiteHeader";
import { BackgroundFX } from "@/components/BackgroundFX";
import { HeroSection } from "@/components/HeroSection";
import { FounderSection } from "@/components/FounderSection";
import { QuoteBanner } from "@/components/QuoteBanner";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import { ServicesList } from "@/components/ServicesList";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { Testimonials } from "@/components/Testimonials";
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
        <Testimonials />
        <div id="cta">
          <CtaSection />
        </div>
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
