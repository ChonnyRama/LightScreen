"use client";
import { useEffect, useMemo } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function ContactModal({
  isOpen,
  onClose,
  packageName,
}: {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
}) {
  const calLink = useMemo(() => {
    const map: Record<string, string> = {
      "Foundation Site": "lightscreen/foundation-site",
      "Conversion Boost": "lightscreen/conversion-boost",
      "Growth System": "lightscreen/growth-system",
    };
    return packageName && map[packageName]
      ? map[packageName]
      : "lightscreen/30min";
  }, [packageName]);

  useEffect(() => {
    if (!isOpen) return;
    let canceled = false;

    (async () => {
      const mod = await import("@calcom/embed-react");
      if (canceled) return;
      const cal = await mod.getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();

    return () => {
      canceled = true;
    };
  }, [isOpen]); // <- always exactly 1 dep

  // 3) Keydown listener; deps are always exactly 2 items
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]); // <- always exactly 2 deps

  if (!isOpen) return null;

  // 4) Render Cal only when open so it doesn't hydrate early
  //    Import dynamically so it isn't in the main bundle
  const Cal = require("@calcom/embed-react").default;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-6">
      <div
        className="max-w-4xl w-full h-[80vh] p-0 relative overflow-hidden flex flex-col
        scale-100 sm:scale-95 md:scale-90 lg:scale-100 transition-all duration-300"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white text-xl font-bold z-10"
        >
          ×
        </button>
        <div className="flex-1 min-h-0 w-full flex items-center justify-center">
          <div className="w-full h-full max-h-[70vh] sm:max-h-[60vh] md:max-h-[80vh] overflow-y-auto">
            <Cal
              namespace="30min"
              calLink={calLink}
              style={{ width: "100%", height: "100%" }}
              config={{ theme: "dark" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
