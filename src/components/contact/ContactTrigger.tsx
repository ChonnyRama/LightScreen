"use client";

import { ReactNode } from "react";
import { useContact } from "./ContactModalProvider";

export default function ContactTrigger({
  label = "Book a Call",
  pkg,
  className,
  children,
}: {
  label?: string;
  pkg?: string;
  className?: string;
  children?: ReactNode;
}) {
  const { openContact } = useContact();
  return (
    <button className={className} onClick={() => openContact(pkg)}>
      {children || label}
    </button>
  );
}
