import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import { ServicesList } from "@/components/ServicesList";
import { Testimonials } from "@/components/Testimonials";
import { ClientLogos } from "@/components/ClientLogos";
import { TrustSection } from "@/components/TrustSection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <div id="projects">
          <ProjectsShowcase />
        </div>
        <ServicesMarquee />
        <div id="services">
          <ServicesList />
        </div>
        <Testimonials />
        <ClientLogos />
        <TrustSection />
        <div id="cta">
          <CtaSection />
        </div>
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
