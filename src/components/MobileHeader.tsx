"use client";

import React from "react";
import ContactTrigger from "@/components/contact/ContactTrigger";
import { IoMenu } from "react-icons/io5";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function MobileHeader() {
  const [compact, setCompact] = React.useState(false); // false = show nav, true = show CTA + dropdown
  const [open, setOpen] = React.useState(false); // dropdown open

  React.useEffect(() => {
    const sentinel = document.getElementById("hero-end-sentinel");
    if (!sentinel) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // While the sentinel is visible => we're in/near hero --> show nav
        // Once it's out of view (scrolled past hero) => compact mode (CTA + dropdown)
        setCompact(!entry.isIntersecting);
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0 }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  const handleJump = (id: string) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={
        "z-20 px-3 md:hidden" +
        (compact ? " fixed top-2 right-3" : " fixed top-3 inset-x-0")
      }
    >
      <div
        className={[
          "mx-auto max-w-lg rounded-full border border-white/15 backdrop-blur bg-white/10",
          "transition-[padding,background,transform] duration-300",
          compact ? "px-2 py-1" : "px-1.5 py-1.5",
        ].join(" ")}
      >
        {/* Mode A: Nav pills (shown while hero is visible) */}
        {!compact && (
          <nav className="flex gap-1 overflow-x-auto no-scrollbar">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleJump(l.id)}
                className="nav-item whitespace-nowrap h-9 px-3 text-sm rounded-full bg-white/0 hover:bg-white/15 transition"
              >
                {l.label}
              </button>
            ))}
          </nav>
        )}

        {/* Mode B: CTA + dropdown (after hero) */}
        {compact && (
          <div className="flex items-center justify-center gap-4">
            <ContactTrigger className="relative ml-4 inline-flex items-center justify-center px-6 h-10 overflow-hidden font-medium transition-all bg-white rounded-xl hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-sky-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Book a Call
              </span>
            </ContactTrigger>

            {/* Simple dropdown using <details>, or roll your own */}
            <div className="relative">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-haspopup="menu"
                className="h-12 w-12 flex items-center justify-center rounded-full bg-white/0 hover:bg-white/15 transition"
              >
                <IoMenu className="w-10 h-10" />
              </button>
              {open && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-44 rounded-2xl border border-white/15 bg-zinc-950/75 backdrop-blur shadow-xl p-1"
                >
                  {links.map((l) => (
                    <button
                      key={l.id}
                      role="menuitem"
                      onClick={() => handleJump(l.id)}
                      className="block w-full text-left px-3 py-2 rounded-xl hover:bg-white"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
