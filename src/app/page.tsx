import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ContactModalProvider } from "@/components/contact/ContactModalProvider";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() =>
  import("@/sections/Services").then((mod) => mod.ServicesSection)
);
const PackagesSection = dynamic(() =>
  import("@/sections/Packages").then((mod) => mod.PackagesSection)
);
const CaseStudySection = dynamic(() =>
  import("@/sections/CaseStudy").then((mod) => mod.CaseStudySection)
);
const TapeSection = dynamic(() =>
  import("@/sections/Tape").then((mod) => mod.TapeSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/sections/Testimonials").then((mod) => mod.TestimonialsSection)
);
const AboutSection = dynamic(() =>
  import("@/sections/About").then((mod) => mod.AboutSection)
);
const ContactSection = dynamic(() =>
  import("@/sections/Contact").then((mod) => mod.ContactSection)
);
const Footer = dynamic(() =>
  import("@/sections/Footer").then((mod) => mod.Footer)
);

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
