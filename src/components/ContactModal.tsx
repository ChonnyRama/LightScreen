"use client";
import { useEffect } from "react";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-xl max-w-xl w-full p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-serif mb-4">Let’s Work Together</h2>
        <p className="text-white/70 mb-6">
          Send me a message and I’ll get back to you shortly.
        </p>
        {/* 👉 Drop in your ContactForm component here */}
      </div>
    </div>
  );
}
