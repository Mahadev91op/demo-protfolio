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
  const laserLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline laser progress draw on scroll
      if (laserLineRef.current) {
        gsap.fromTo(
          laserLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "#timeline-container",
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            },
          }
        );
      }

      // Timeline items staggered reveal
      gsap.from(timelineItemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
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
      className="py-24 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Journey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Career Milestones &amp; <span className="text-gradient-blue">Impact</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Track record of shipping production-scale web applications and leading frontend architecture.
        </p>
      </div>

      {/* Career Timeline */}
      <div id="timeline-container" className="max-w-5xl mx-auto mb-28 relative">
        {/* Glowing vertical laser line */}
        <div
          ref={laserLineRef}
          className="origin-top absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600 via-sky-400 to-cyan-300 -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(0,102,255,0.6)]"
        />

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
                {/* Glowing Node Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-4 border-blue-600 shadow-lg shadow-blue-500/40 flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                </div>

                {/* Card Container */}
                <div
                  className={`pl-14 sm:pl-0 w-full sm:w-1/2 ${
                    isEven ? "sm:pr-14 sm:text-right" : "sm:pl-14 sm:ml-auto"
                  }`}
                >
                  <div className="glass-card rounded-3xl p-7 border-2 border-blue-100 shadow-card hover:shadow-card-hover hover:border-blue-300 transition-all">
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-2 ${
                        isEven ? "sm:justify-end" : "justify-start"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900">{item.role}</h3>
                    <h4 className="text-sm font-bold text-blue-600 mb-3">{item.company}</h4>

                    <ul
                      className={`space-y-2 text-xs sm:text-sm text-slate-600 mb-5 ${
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
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-blue-50/80 text-blue-700 font-semibold border border-blue-100"
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
      <div className="mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>Architecture Protocol</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            How I Architect Scalable Systems
          </h3>
        </div>

        <div id="workflow-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.workflowSteps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => {
                workflowCardsRef.current[idx] = el;
              }}
              className="glass-card rounded-3xl p-7 border-2 border-blue-100/90 hover:border-blue-400 relative flex flex-col justify-between group shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                <span className="text-4xl font-extrabold font-mono text-blue-200 group-hover:text-blue-600 transition-colors">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-3 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>Phase {step.number}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
