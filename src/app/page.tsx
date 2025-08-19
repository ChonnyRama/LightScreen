import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { CaseStudySection } from "@/sections/CaseStudy";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ServicesSection } from "@/sections/Services";
import { PackagesSection } from "@/sections/Packages";
import ContactModal from "@/components/ContactModal";
import { ContactModalProvider } from "@/components/contact/ContactModalProvider";

// Interactive stuff

export default function Home() {
  return (
    <div>
      <ContactModalProvider>
        <Header />
        <HeroSection />
        <ServicesSection />
        <PackagesSection />
        {/* <ProjectsSection /> */}
        <CaseStudySection />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </ContactModalProvider>
    </div>
  );
}
