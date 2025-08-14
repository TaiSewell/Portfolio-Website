import { useEffect, useState } from "react";

export default function IntroLoader({ initials = "TS", minDuration = 900 }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout;
    const start = performance.now();

    // Wait for fonts + onload, BUT cap it with a minimum/maximum duration
    const readyPromises = [];

    if ("fonts" in document) {
      readyPromises.push(document.fonts.ready.catch(() => {}));
    }
    readyPromises.push(
      new Promise((res) => {
        if (document.readyState === "complete") res();
        else window.addEventListener("load", () => res(), { once: true });
      })
    );

    Promise.race([
      Promise.allSettled(readyPromises),
      new Promise((res) => setTimeout(res, 2000)), // hard cap: 2s
    ]).then(() => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      timeout = setTimeout(() => setDone(true), remaining);
    });

    return () => clearTimeout(timeout);
  }, [minDuration]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={done ? "true" : "false"}
    >
      {/* Container */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48">
        {/* Center initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl sm:text-4xl font-extrabold tracking-widest text-white">
            {initials}
          </span>
        </div>

        {/* Square border that draws itself */}
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          role="img"
          aria-label="Loading"
        >
          {/* Accessible background (optional faint glow) */}
          <rect x="0" y="0" width="100" height="100" fill="none" />

          {/* Drawing square */}
          <rect
            x="8"
            y="8"
            width="84"
            height="84"
            fill="none"
            stroke="rgb(34,197,94)" /* Tailwind's green-500 */
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="100"
            className="animate-[draw_900ms_ease-out_forwards]"
          />
        </svg>
      </div>

      {/* Component-scoped keyframes */}
      <style>{`
        @keyframes draw {
          from { stroke-dasharray: 0 100; }
          to   { stroke-dasharray: 100 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[draw_900ms_ease-out_forwards] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
