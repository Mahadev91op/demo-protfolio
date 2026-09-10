"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, Activity, Box, Cpu, ChevronRight } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    // Calculate total horizontal overflow distance
    const getScrollAmount = () => {
      const sliderWidth = slider.scrollWidth;
      return -(sliderWidth - window.innerWidth + 120);
    };

    const ctx = gsap.context(() => {
      // Horizontal pinned scroll trigger
      const tween = gsap.to(slider, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollProgress(Math.round(self.progress * 100));
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const getProjectGraphic = (project: Project) => {
    switch (project.id) {
      case "aether-ai":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-spinSlow" />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-300">
                  GenAI 3D Synthesizer
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/25 text-blue-300 text-xs font-mono border border-blue-400/40">
                v2.6 Stable
              </span>
            </div>

            <div className="my-6 space-y-3 z-10">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs">
                <span className="text-slate-200">Generating: &quot;Bioluminescent Cybernetic Mesh&quot;</span>
                <span className="text-emerald-400 font-mono font-bold">100% Complete</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 rounded-xl bg-blue-600/20 border border-blue-400/40 flex flex-col items-center justify-center">
                  <Box className="w-6 h-6 text-cyan-300 animate-bounce mb-1" />
                  <span className="text-[10px] font-mono text-cyan-200">Mesh Core</span>
                </div>
                <div className="h-20 rounded-xl bg-indigo-600/20 border border-indigo-400/40 flex flex-col items-center justify-center">
                  <span className="text-sm font-bold text-indigo-300 font-mono">4K PBR</span>
                  <span className="text-[10px] font-mono text-indigo-200">Texture Map</span>
                </div>
                <div className="h-20 rounded-xl bg-sky-600/20 border border-sky-400/40 flex flex-col items-center justify-center">
                  <span className="text-sm font-bold text-sky-300 font-mono">60 FPS</span>
                  <span className="text-[10px] font-mono text-sky-200">WebGL View</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-white/10">
              <span className="font-mono text-cyan-300">Next.js 16 • Three.js • WebGL</span>
              <span className="text-slate-400 font-mono">Render Latency: 28ms</span>
            </div>
          </div>
        );

      case "novapay-fintech":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 text-white rounded-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-sky-400" />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-sky-300">
                  NovaPay Telemetry
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/25 text-emerald-300 text-xs font-mono border border-emerald-400/40">
                Live Engine
              </span>
            </div>

            <div className="my-6 space-y-3 z-10">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium">Daily Transaction Volume</span>
                  <p className="text-3xl font-extrabold text-white tracking-tight font-display">
                    $2,419,830.00
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-md border border-emerald-400/30">
                  +24.6% Velocity
                </span>
              </div>

              <div className="flex items-end gap-2 h-16 pt-2">
                {[35, 60, 48, 85, 65, 95, 75, 100, 80, 92, 88, 96].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-600 via-sky-400 to-cyan-300 rounded-t-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-white/10">
              <span className="font-mono text-sky-300">GSAP Charts • PostgreSQL • Node.js</span>
              <span className="text-slate-400 font-mono">99.99% Guaranteed SLA</span>
            </div>
          </div>
        );

      case "omnistore-3d":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Box className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-blue-300">
                  Spatial E-Commerce
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/25 text-blue-300 text-xs font-mono border border-blue-400/40">
                Interactive WebGL
              </span>
            </div>

            <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-around z-10">
              <div className="w-24 h-24 border-2 border-dashed border-cyan-400/70 rounded-2xl flex items-center justify-center animate-spinSlow">
                <div className="w-12 h-12 border-2 border-blue-400 bg-blue-500/30 rounded-lg" />
              </div>
              <div className="text-xs space-y-2 font-mono">
                <div className="text-cyan-300">✦ Dynamic 360° Inspection</div>
                <div className="text-slate-300">✦ PBR Shader Materials</div>
                <div className="text-blue-300">✦ 1-Click Stripe Checkout</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-white/10">
              <span className="font-mono text-cyan-300">Three.js • Next.js • Stripe</span>
              <span className="text-slate-400 font-mono">Butter-Smooth 60 FPS</span>
            </div>
          </div>
        );

      case "devpulse-cloud":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 text-white rounded-2xl relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-60 h-60 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-teal-400" />
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-teal-300">
                  DevPulse Observability
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-500/25 text-teal-300 text-xs font-mono border border-teal-400/40">
                Live WebSockets
              </span>
            </div>

            <div className="my-6 p-4 rounded-xl bg-black/50 border border-teal-500/30 font-mono text-xs space-y-2 z-10">
              <div className="flex justify-between text-teal-300">
                <span>[CLUSTER-PROD-01] Health</span>
                <span className="text-emerald-400 font-bold">ACTIVE (200)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Latency P99</span>
                <span className="text-cyan-300 font-bold">1.2ms</span>
              </div>
              <div className="flex justify-between text-teal-200">
                <span>Distributed Microservices</span>
                <span className="text-sky-300 font-bold">54 Connected</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 z-10 pt-2 border-t border-white/10">
              <span className="font-mono text-teal-300">TypeScript • Docker • WebSockets</span>
              <span className="text-slate-400 font-mono">Zero Memory Leaks</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#f8faff] via-[#edf4fd] to-[#f8faff] overflow-hidden flex flex-col justify-center py-16"
    >
      {/* Top Header & Progress HUD */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>GSAP Pinned Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-gradient-blue">Architectures</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Scroll down to explore projects sliding horizontally via GSAP ScrollTrigger.
          </p>
        </div>

        {/* Scroll Progress Bar & Counter */}
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-blue-200/70 shadow-sm">
          <span className="text-xs font-mono font-bold text-slate-700">
            {scrollProgress}% SCROLLED
          </span>
          <div className="w-28 sm:w-40 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-75 rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal Sliding Track (Pinned by GSAP) */}
      <div className="w-full overflow-visible">
        <div
          ref={sliderRef}
          className="flex items-stretch gap-8 px-6 sm:px-12 w-max will-change-transform pb-6"
        >
          {portfolioData.projects.map((project: Project, idx: number) => (
            <div
              key={project.id}
              className="w-[88vw] sm:w-[580px] md:w-[680px] lg:w-[740px] flex-shrink-0 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-blue-200/70 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group"
            >
              <div>
                {/* Visual Simulation Area */}
                <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-300/60 relative">
                  {getProjectGraphic(project)}
                </div>

                {/* Header & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-medium">
                    {project.metrics}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-blue-500 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-xl bg-blue-50/80 text-blue-800 font-semibold border border-blue-200/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-blue-100 flex items-center justify-between">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 text-xs font-mono font-semibold transition-all"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}

          {/* End Card - Call to Action in Slider */}
          <div className="w-[80vw] sm:w-[400px] flex-shrink-0 glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-blue-300 shadow-lg bg-gradient-to-br from-blue-50/80 to-white">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 mb-5">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Want to see more?</h3>
            <p className="text-sm text-slate-600 mb-6 max-w-xs">
              I have built over 24+ custom enterprise, SaaS, and 3D web solutions.
            </p>
            <a
              href="#contact"
              className="btn-primary px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Discuss Your Project</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
