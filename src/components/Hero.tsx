"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles, Terminal, Code2, Layers, Compass, CheckCircle2 } from "lucide-react";
import ThreeCanvas from "./ThreeCanvas";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          headlineRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.5"
        )
        .fromTo(
          subtextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".floating-chip",
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        );

      // Continuous gentle floating animation for tech chips
      gsap.to(".chip-1", {
        y: -10,
        x: 6,
        rotation: 2,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".chip-2", {
        y: 12,
        x: -8,
        rotation: -2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
      gsap.to(".chip-3", {
        y: -14,
        x: -5,
        rotation: 3,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
      gsap.to(".chip-4", {
        y: 10,
        x: 8,
        rotation: -1.5,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 lg:px-14 overflow-hidden bg-radial-hero bg-grid-pattern"
    >
      {/* 3D Three.js Interactive WebGL Scene */}
      <ThreeCanvas />

      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-400/15 via-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Tag & Main Content Area (Expansive Full Width) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-6">
        {/* Availability Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-pill text-xs sm:text-sm font-semibold text-slate-800 mb-6 shadow-sm border border-blue-200/70">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>Available for High-Impact Projects &amp; Roles</span>
          <span className="text-slate-300">|</span>
          <span className="text-blue-600 font-mono">India / Remote</span>
        </div>

        {/* Big Cinematic Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.05] max-w-6xl"
        >
          MAHADEV
          <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 font-bold text-gradient-blue">
            Creative Full-Stack &amp; 3D Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtextRef}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal"
        >
          Transforming complex digital concepts into buttery-smooth, high-performance web applications using{" "}
          <strong className="text-blue-600 font-semibold">Next.js</strong>,{" "}
          <strong className="text-blue-600 font-semibold">GSAP ScrollTrigger</strong>, and{" "}
          <strong className="text-cyan-600 font-semibold">Three.js 3D WebGL</strong>.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full btn-primary text-sm sm:text-base font-semibold shadow-xl shadow-blue-500/25 group"
          >
            <span>Explore Pinned Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-outline text-sm sm:text-base font-semibold"
          >
            <span>Let&apos;s Build Together</span>
          </a>
        </div>

        {/* Floating Asymmetric Tech Chips (Placed around the expansive viewport) */}
        <div ref={chipsRef} className="hidden md:block w-full max-w-6xl relative h-20 pointer-events-none mt-4">
          <div className="floating-chip chip-1 absolute left-4 top-2 glass-pill px-4 py-2 rounded-2xl shadow-md border border-blue-200/60 flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Next.js 16 App Router
          </div>

          <div className="floating-chip chip-2 absolute right-6 top-0 glass-pill px-4 py-2 rounded-2xl shadow-md border border-cyan-200/60 flex items-center gap-2 text-xs font-mono font-semibold text-cyan-700 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Three.js &amp; WebGL
          </div>

          <div className="floating-chip chip-3 absolute left-24 bottom-0 glass-pill px-4 py-2 rounded-2xl shadow-md border border-indigo-200/60 flex items-center gap-2 text-xs font-mono font-semibold text-indigo-700 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            GSAP ScrollTrigger
          </div>

          <div className="floating-chip chip-4 absolute right-28 bottom-2 glass-pill px-4 py-2 rounded-2xl shadow-md border border-sky-200/60 flex items-center gap-2 text-xs font-mono font-semibold text-sky-700 pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            60+ FPS Lenis Scroll
          </div>
        </div>
      </div>

      {/* Bottom Expansive Stats Strip */}
      <div
        ref={statsRef}
        className="relative z-10 w-full max-w-7xl mx-auto mt-10 pt-6 border-t border-blue-100/80"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl flex flex-col items-center text-center border border-blue-100/90 shadow-sm hover:shadow-md transition-all group"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 group-hover:scale-105 transition-transform font-display">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
