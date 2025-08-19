"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "@/components/ContactModal";

type Ctx = {
  openContact: (pkg?: string) => void;
};

const ContactCtx = createContext<Ctx | null>(null);

export function useContact() {
  const ctx = useContext(ContactCtx);
  if (!ctx)
    throw new Error("useContact must be used within ContactModalProvider");
  return ctx;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pkg, setPkg] = useState<string | undefined>();

  const openContact = (p?: string) => {
    setPkg(p);
    setOpen(true);
  };

  return (
    <ContactCtx.Provider value={{ openContact }}>
      {children}
      <ContactModal
        isOpen={open}
        onClose={() => setOpen(false)}
        packageName={pkg}
      />
    </ContactCtx.Provider>
  );
}
