"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, Activity, Box, Cpu } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      projectCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: (index % 2) * 0.15,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getProjectGraphic = (project: Project) => {
    switch (project.id) {
      case "aether-ai":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 text-white rounded-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            {/* Background glowing rings */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-500/20 blur-2xl" />
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-spinSlow" />
                <span className="text-xs font-mono tracking-wider uppercase text-cyan-300">Generative 3D Canvas</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-mono border border-blue-400/30">
                v2.4 Active
              </span>
            </div>
            
            {/* Visual Node simulation */}
            <div className="my-6 space-y-3 z-10">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs">
                <span className="text-slate-300">Prompt: &quot;Futuristic glowing cybernetic orb&quot;</span>
                <span className="text-emerald-400 font-mono">Synthesizing 100%</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Box className="w-6 h-6 text-cyan-300 animate-bounce" />
                </div>
                <div className="h-16 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                  <span className="text-xs font-mono text-indigo-200">Mesh 3D</span>
                </div>
                <div className="h-16 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                  <span className="text-xs font-mono text-sky-200">60 FPS</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 z-10">
              <span>Next.js App Router • Three.js</span>
              <span className="text-cyan-400 font-mono">Render Latency: 32ms</span>
            </div>
          </div>
        );

      case "novapay-fintech":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 text-white rounded-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-cyan-500/15 blur-2xl" />
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-sky-400" />
                <span className="text-xs font-mono tracking-wider uppercase text-sky-300">NovaPay Ledger</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono border border-emerald-400/30">
                Live Gateway
              </span>
            </div>

            {/* Financial telemetry graphic */}
            <div className="my-6 space-y-3 z-10">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400">Total Volume Processed</span>
                  <p className="text-2xl font-bold text-white tracking-tight">$2,419,830.00</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  +18.4% this week
                </span>
              </div>
              {/* Simulated bars */}
              <div className="flex items-end gap-1.5 h-14 pt-2">
                {[40, 65, 50, 85, 70, 95, 80, 100, 75, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 z-10">
              <span>GSAP Motion Charts • PostgreSQL</span>
              <span className="text-sky-300 font-mono">99.99% Uptime</span>
            </div>
          </div>
        );

      case "omnistore-3d":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute bottom-0 left-0 w-44 h-44 rounded-full bg-blue-600/20 blur-2xl" />
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Box className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-mono tracking-wider uppercase text-blue-300">Spatial Commerce</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-mono border border-blue-400/30">
                WebGL 2.0
              </span>
            </div>

            {/* 3D Wireframe perspective simulation */}
            <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-around z-10">
              <div className="w-20 h-20 border-2 border-dashed border-cyan-400/60 rounded-xl flex items-center justify-center animate-spinSlow">
                <div className="w-10 h-10 border border-blue-400 bg-blue-500/20 rounded-md" />
              </div>
              <div className="text-xs space-y-1.5 font-mono">
                <div className="text-cyan-300">FOV: 45° Camera</div>
                <div className="text-slate-300">Textures: PBR 4K</div>
                <div className="text-blue-300">Real-time Raytracing</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 z-10">
              <span>Three.js • Stripe Checkout</span>
              <span className="text-blue-300 font-mono">Lenis 60fps</span>
            </div>
          </div>
        );

      case "devpulse-cloud":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 text-white rounded-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-1/2 right-1/4 w-44 h-44 rounded-full bg-teal-500/15 blur-2xl" />
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-teal-400" />
                <span className="text-xs font-mono tracking-wider uppercase text-teal-300">Telemetry Engine</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-mono border border-teal-400/30">
                WebSocket Stream
              </span>
            </div>

            {/* Telemetry live log simulation */}
            <div className="my-6 p-3.5 rounded-xl bg-black/40 border border-teal-500/20 font-mono text-[11px] space-y-1.5 z-10">
              <div className="flex justify-between text-teal-300">
                <span>[CLUSTER 01] health_check</span>
                <span className="text-emerald-400">OK 200</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>[AUTH] token_verify latency</span>
                <span className="text-cyan-300">1.4ms</span>
              </div>
              <div className="flex justify-between text-teal-200">
                <span>[QUEUE] active_workers: 24</span>
                <span className="text-sky-400">Idle: 0</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 z-10">
              <span>TypeScript • Docker Clusters</span>
              <span className="text-teal-300 font-mono">50+ Microservices</span>
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
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Featured Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Crafted With <span className="text-gradient-blue">Precision &amp; Code</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          A selection of full-stack platforms, 3D WebGL experiences, and high-performance web applications built by Mahadev.
        </p>
      </div>

      {/* Projects Grid: 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {portfolioData.projects.map((project: Project, idx: number) => (
          <div
            key={project.id}
            ref={(el) => {
              projectCardsRef.current[idx] = el;
            }}
            className="group glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-blue-100/90 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div>
              {/* Graphic Mockup Area */}
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-200/50 relative">
                {getProjectGraphic(project)}
              </div>

              {/* Category & Metrics */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/50">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {project.metrics}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 mt-1 mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-blue-50/70 text-slate-700 border border-blue-100 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links & CTA footer */}
            <div className="pt-4 border-t border-blue-100/60 flex items-center justify-between">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group/link"
              >
                <span>Live Interactive Demo</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
