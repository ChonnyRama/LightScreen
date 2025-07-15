"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ServicesSection } from "@/sections/Services";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
      <Header onContactClick={() => setShowContact(true)} />
      <HeroSection onContactClick={() => setShowContact(true)} />
      <ServicesSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection onContactClick={() => setShowContact(true)} />
      <Footer />
    </div>
  );
}
