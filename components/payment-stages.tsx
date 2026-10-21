"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { value: 40, title: "Before work starts" },
  { value: 48, title: "At the agreed 80% progress milestone" },
  { value: 12, title: "After project submission" },
];

export default function PaymentStages() {
  const section = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !section.current || !window.IntersectionObserver)
      return;
    let frame = 0;
    let started = false;
    let start: number | undefined;
    const finish = () => {
      if (preference.matches) {
        cancelAnimationFrame(frame);
        setProgress(1);
        observer.disconnect();
      }
    };
    const animate = (time: number) => {
      start ??= time;
      const elapsed = Math.min((time - start) / 1000, 1);
      setProgress(1 - Math.pow(1 - elapsed, 3));
      if (elapsed < 1) frame = requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((entry) => entry.isIntersecting)) return;
        started = true;
        observer.disconnect();
        if (!preference.matches) {
          setProgress(0);
          frame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(section.current);
    preference.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", finish);
    };
  }, []);

  return (
    <div className="payment-note" ref={section}>
      <p className="eyebrow">Payment stages</p>
      <ol className="payment-stages">
        {stages.map((stage) => (
          <li key={stage.value}>
            <strong>
              <span aria-hidden="true" className="payment-value">
                {Math.round(stage.value * progress)}
              </span>
              <span className="sr-only">{stage.value}</span>
              <span className="payment-percent">%</span>
            </strong>
            <span>{stage.title}</span>
          </li>
        ))}
      </ol>
      <p>
        Each percentage is part of the total project fee. Your quote defines the
        progress milestone and handover terms.
      </p>
    </div>
  );
}
