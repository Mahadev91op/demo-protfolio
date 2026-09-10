"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    if (!track) return;

    // Continuous smooth horizontal scroll animation
    const tween = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "none",
    });

    // Speed up slightly on scroll with ScrollTrigger
    const st = ScrollTrigger.create({
      trigger: marqueeRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        // Accelerate marquee slightly based on scroll velocity
        const velocity = Math.abs(self.getVelocity());
        gsap.to(tween, {
          timeScale: 1 + velocity / 600,
          duration: 0.3,
          overwrite: "auto",
        });
      },
    });

    return () => {
      tween.kill();
      st.kill();
    };
  }, []);

  const marqueeItems = [
    "FULL-STACK DEVELOPER",
    "THREE.JS & WEBGL",
    "GSAP SCROLLTRIGGER",
    "NEXT.JS 14/15",
    "BUTTER-SMOOTH 60 FPS",
    "CREATIVE TECHNOLOGIST",
    "TAILWIND CSS",
    "TYPESCRIPT ARCHITECT",
  ];

  return (
    <div
      ref={marqueeRef}
      className="w-full py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white overflow-hidden shadow-lg shadow-blue-500/15 relative z-20 select-none -rotate-1 scale-[1.02] my-8"
    >
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-5">
            <span className="text-sm sm:text-base font-extrabold tracking-widest uppercase font-display">
              {item}
            </span>
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
