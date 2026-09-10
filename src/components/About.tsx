"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Check, Copy, Sparkles, Code, ShieldCheck, Zap, ArrowRight, Play } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState<string>("overview");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const terminalOutputs: Record<string, string> = {
    overview: `// [COMMAND]: mahadev --overview
{
  "name": "Mahadev",
  "role": "Creative Full-Stack & 3D Web Engineer",
  "experience": "3+ Years of Production Systems",
  "location": "India • Open for Global Remote Roles",
  "philosophy": "Every micro-interaction matters. 60 FPS motion without compromise.",
  "availability": "Ready to join high-velocity engineering teams"
}`,
    stack: `// [COMMAND]: mahadev --stack
{
  "frontend": ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
  "creativeMotion": ["Three.js", "WebGL Shaders", "GSAP ScrollTrigger", "Lenis Scroll"],
  "backend": ["Node.js", "Express", "PostgreSQL", "Prisma", "MongoDB", "REST/GraphQL"],
  "performance": ["Lighthouse 99/100", "Zero Memory Leaks", "Edge Function Caching"]
}`,
    architecture: `// [COMMAND]: mahadev --architecture
{
  "codebaseStandards": [
    "Strict TypeScript typing with zero 'any' escapes",
    "Modular component design pattern with clean separation of concerns",
    "GPU-accelerated transform & opacity CSS for 60+ FPS animations",
    "Server-side rendering (SSR) & incremental static regeneration (ISR)"
  ]
}`,
    hire: `// [COMMAND]: mahadev --hire
{
  "status": "AVAILABLE IMMEDIATELY",
  "idealRoles": ["Lead Frontend Engineer", "Creative Developer", "Full-Stack Engineer"],
  "contractTypes": ["Full-Time Remote", "High-Impact Freelance Consulting"],
  "email": "mahadev.dev01@gmail.com",
  "action": "Click 'Let's Talk' in navigation to schedule an intro call!"
}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalOutputs[selectedCommand]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      title: "60+ FPS Butter-Smooth Motion",
      desc: "Deep mastery of GSAP ScrollTrigger timelines, scrub parallax, and GPU composite layers.",
    },
    {
      icon: <Code className="w-5 h-5 text-sky-500" />,
      title: "Next.js 16 App Router",
      desc: "Modern server actions, streaming SSR, optimized layouts, and edge performance.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-cyan-600" />,
      title: "Three.js 3D WebGL",
      desc: "Creating immersive 3D geometries, interactive shaders, and spatial web canvases.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: "Scalable Full-Stack",
      desc: "Resilient backend microservices with Node.js, PostgreSQL, and secure API auth pipelines.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Inside The Mind</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Engineering With <span className="text-gradient-blue">Obsessive Craft</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Bridging design sophistication and rock-solid software architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column - Narrative & 4 Pillars */}
        <div ref={leftColRef} className="lg:col-span-6 space-y-6">
          <div className="space-y-4 text-slate-600 text-base leading-relaxed">
            <p className="text-lg text-slate-800 font-medium">
              I don&apos;t just write code — I sculpt digital experiences.
            </p>
            <p>
              As a developer named <strong>Mahadev</strong>, my mission is to banish boring, static websites.
              By integrating <strong>Three.js</strong> 3D visuals with <strong>GSAP ScrollTrigger</strong> animations,
              every interface I build feels alive, responsive, and tactile.
            </p>
            <p>
              Under the hood, everything is powered by modern <strong>Next.js 16</strong>, TypeScript, and clean cloud architecture.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-blue-100/90 hover:border-blue-300 transition-all shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{pillar.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Interactive Dev CLI Terminal */}
        <div ref={rightColRef} className="lg:col-span-6">
          <div className="rounded-3xl bg-slate-950 text-slate-200 shadow-2xl shadow-blue-500/15 border-2 border-slate-800 overflow-hidden">
            {/* Window Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">mahadev@terminal:~</span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Copy Terminal Output"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Command Runner Pills */}
            <div className="p-3 bg-slate-900/60 border-b border-slate-800 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-slate-500 text-[11px]">Run Command:</span>
              {[
                { id: "overview", label: "--overview" },
                { id: "stack", label: "--stack" },
                { id: "architecture", label: "--architecture" },
                { id: "hire", label: "--hire" },
              ].map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => setSelectedCommand(cmd.id)}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                    selectedCommand === cmd.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 font-bold"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  <Play className="w-2.5 h-2.5" />
                  <span>{cmd.label}</span>
                </button>
              ))}
            </div>

            {/* Code output */}
            <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed text-blue-200 bg-slate-950 min-h-[260px]">
              <pre className="text-slate-300 whitespace-pre-wrap">
                <code>{terminalOutputs[selectedCommand]}</code>
              </pre>
            </div>

            {/* Status Footer */}
            <div className="px-5 py-2.5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Process 0: PID 4821 Active
              </span>
              <span className="text-blue-400">Next.js 16 + React 19</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
