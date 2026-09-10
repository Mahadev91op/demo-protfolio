"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Check, Copy, Sparkles, Code, ShieldCheck, Zap, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "goals">("profile");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyCode = () => {
    const codeSnippet = `const developer = {
  name: "${portfolioData.personal.name}",
  role: "${portfolioData.personal.title}",
  coreStack: ["Next.js", "Three.js", "GSAP", "Tailwind CSS", "TypeScript"],
  status: "Available for ambitious projects",
  buildPhilosophy: "Zero compromise on UX, 60 FPS silky smooth motion."
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const terminalSnippets = {
    profile: `const mahadev = {
  name: "Mahadev",
  focus: "Full-Stack & Creative Web Engineering",
  experienceYears: 3+,
  location: "India • Available Worldwide",
  loves: [
    "Butter-smooth GSAP ScrollTriggers",
    "Interactive Three.js 3D WebGL scenes",
    "Clean & Scalable Next.js Architecture"
  ],
  readyToHire: true
};`,
    stack: `const techEcosystem = {
  frontend: ["Next.js 14/15", "React", "TypeScript", "Tailwind CSS"],
  creative3D: ["Three.js", "WebGL Shaders", "GSAP", "Lenis Scroll"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  workflow: ["Git", "Docker", "Figma", "Lighthouse 99+ Audits"]
};`,
    goals: `const currentMission = {
  objective: "Building next-generation digital platforms",
  motto: "Make it clean, make it fast, make it unforgettable.",
  nextStep: "Collaborate with high-growth teams and founders",
  availability: "Freelance / Full-Time Contract"
};`,
  };

  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      title: "Silky 60+ FPS Motion",
      desc: "Choreographed GSAP animations that guide user attention without ever slowing the browser down.",
    },
    {
      icon: <Code className="w-5 h-5 text-sky-500" />,
      title: "Clean Modern Architecture",
      desc: "Modular TypeScript, reusable design patterns, and maintainable Next.js App Router codebases.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: "Production Performance",
      desc: "Optimized asset delivery, server-side caching, and responsive cross-device reliability.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-600" />,
      title: "Creative 3D Experiences",
      desc: "Interactive Three.js canvas components that elevate products beyond standard flat interfaces.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Mahadev</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Obsessed With Crafting <span className="text-gradient-blue">Exceptional Web</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Bridging the gap between creative visual design and scalable engineering principles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Narrative & Pillars */}
        <div ref={leftColRef} className="lg:col-span-6 space-y-6">
          <div className="space-y-4 text-slate-600 text-base leading-relaxed">
            <p>
              I am a developer who believes the web shouldn&apos;t just be functional — it should be inspiring to interact with.
              Every click, scroll, and transition should feel natural, responsive, and tactile.
            </p>
            <p>
              Over the years, I have built production-ready applications utilizing the modern React &amp; Next.js ecosystem,
              marrying them with WebGL 3D graphics and butter-smooth GSAP ScrollTrigger interactions.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-2xl border border-blue-100/80 hover:border-blue-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{pillar.title}</h4>
                <p className="text-xs text-slate-500 leading-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal */}
        <div ref={rightColRef} className="lg:col-span-6">
          <div className="rounded-2xl bg-slate-950 text-slate-200 shadow-2xl shadow-blue-500/10 border border-slate-800 overflow-hidden">
            {/* Terminal Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">mahadev.config.ts</span>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Copy code"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Tabs */}
            <div className="flex border-b border-slate-800/80 bg-slate-900/40 px-3 text-xs font-mono">
              {(["profile", "stack", "goals"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-400 font-semibold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab === "profile" ? "developer.ts" : tab === "stack" ? "tech-stack.ts" : "mission.ts"}
                </button>
              ))}
            </div>

            {/* Terminal Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed text-blue-100 bg-slate-950/90 min-h-[220px]">
              <pre className="text-slate-300">
                <code>{terminalSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Terminal Footer status */}
            <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Compiled successfully in 12ms
              </span>
              <span>TypeScript 5.6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
