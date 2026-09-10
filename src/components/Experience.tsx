"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin, CheckCircle2, Workflow, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const workflowCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline items staggered reveal
      gsap.from(timelineItemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: -40,
        opacity: 0,
        stagger: 0.18,
        duration: 0.8,
        ease: "power3.out",
      });

      // Workflow cards reveal
      gsap.from(workflowCardsRef.current, {
        scrollTrigger: {
          trigger: "#workflow-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Experience &amp; <span className="text-gradient-blue">Workflow Philosophy</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Proven history of building robust products with high velocity and engineering rigor.
        </p>
      </div>

      {/* Career Timeline */}
      <div className="max-w-4xl mx-auto mb-24 relative">
        {/* Glowing vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-sky-400 to-blue-200 -translate-x-1/2" />

        <div className="space-y-12">
          {portfolioData.experience.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                ref={(el) => {
                  timelineItemsRef.current[idx] = el;
                }}
                className="relative flex flex-col sm:flex-row items-start"
              >
                {/* Center Node Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 shadow-md shadow-blue-500/30 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>

                {/* Content Card (alternates left/right on desktop) */}
                <div
                  className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${
                    isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto"
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 border border-blue-100/80 shadow-card hover:shadow-card-hover transition-all">
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-2 ${
                        isEven ? "sm:justify-end" : "justify-start"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/50">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                    <h4 className="text-sm font-semibold text-blue-600 mb-3">{item.company}</h4>

                    <ul
                      className={`space-y-2 text-xs sm:text-sm text-slate-600 mb-4 ${
                        isEven ? "sm:text-right" : "text-left"
                      }`}
                    >
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Pills */}
                    <div
                      className={`flex flex-wrap gap-1.5 ${
                        isEven ? "sm:justify-end" : "justify-start"
                      }`}
                    >
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4-Step Engineering Workflow */}
      <div className="mt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>Process</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How I Bring Ideas To Life
          </h3>
        </div>

        <div id="workflow-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.workflowSteps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => {
                workflowCardsRef.current[idx] = el;
              }}
              className="glass-card rounded-2xl p-6 border border-blue-100/80 hover:border-blue-300 relative flex flex-col justify-between group"
            >
              <div>
                <span className="text-3xl font-extrabold font-mono text-blue-200 group-hover:text-blue-500 transition-colors">
                  {step.number}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-2 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-medium">
                <span>Phase {step.number}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
