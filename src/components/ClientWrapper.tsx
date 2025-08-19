"use client";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function ClientWrapper() {
  const [showContact, setShowContact] = useState(false);
  return (
    <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
  );
}
