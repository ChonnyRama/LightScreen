"use client";

import { useState } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { PackagesSection } from "@/sections/Packages";
import { ContactSection } from "@/sections/Contact";
import ContactModal from "@/components/ContactModal";

export default function HomeClient() {
  const [showContact, setShowContact] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

  const openContact = (pkg?: string) => {
    setSelectedPackage(pkg);
    setShowContact(true);
  };

  return (
    <>
      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
        packageName={selectedPackage}
      />
      <Header />
      <HeroSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
