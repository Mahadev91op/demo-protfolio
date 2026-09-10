"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowRight, Sparkles, Code2, Layers, CheckCircle2 } from "lucide-react";
import ThreeCanvas from "./ThreeCanvas";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          titleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          descRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          statsRef.current,
          {
            y: 35,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-gradient bg-grid-pattern"
    >
      {/* Three.js Interactive 3D Canvas */}
      <ThreeCanvas />

      {/* Decorative gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-400/15 to-cyan-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs sm:text-sm font-medium text-slate-700 mb-6 shadow-sm border border-blue-200/50"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>{portfolioData.personal.availability}</span>
        </div>

        {/* Main Headline */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
        >
          Crafting High-Performance{" "}
          <span className="text-gradient-blue inline-block">Digital Experiences</span> &amp; Modern 3D Web
        </h1>

        {/* Subtitle / Intro */}
        <p
          ref={descRef}
          className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Hi, I&apos;m <span className="font-semibold text-blue-600">Mahadev</span> — a Creative Full-Stack Developer
          merging cutting-edge <span className="text-slate-800 font-medium">Three.js</span>,{" "}
          <span className="text-slate-800 font-medium">GSAP animations</span>, and scalable{" "}
          <span className="text-slate-800 font-medium">Next.js</span> engineering.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/25"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-outline text-sm sm:text-base font-semibold"
          >
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Floating Quick Stats Pills */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl"
        >
          {portfolioData.personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center group border border-blue-100/70"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-xs pointer-events-none">
        <span className="tracking-widest uppercase text-[10px] font-semibold text-blue-500/80">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-blue-400/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-blue-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
