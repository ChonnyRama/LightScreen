"use client";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef, useState } from "react";

export default function ClientTypewriter({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.3 } // 30% of the element in view
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {visible ? (
        <Typewriter words={[text]} loop={1} cursor cursorStyle="_" />
      ) : (
        // fallback (static text before it animates)
        text
      )}
    </span>
  );
}
