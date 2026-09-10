"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Boxes, Server, Cpu, CheckCircle } from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 45,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case "Boxes":
        return <Boxes className="w-5 h-5 text-sky-500" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-600" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background soft blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Technologies &amp; <span className="text-gradient-blue">Core Capabilities</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Mastering modern web tools to build lightning-fast, visually captivating digital products.
        </p>
      </div>

      {/* Skills Grid: 4 Modern Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {portfolioData.skills.map((category: SkillCategory, catIdx: number) => (
          <div
            key={category.title}
            ref={(el) => {
              cardsRef.current[catIdx] = el;
            }}
            className="glass-card rounded-3xl p-6 sm:p-8 relative border border-blue-100/90 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            {/* Header with Icon */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-100/60">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center shadow-sm">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {category.skills.length} core proficiencies
                  </span>
                </div>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group/item">
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800 group-hover/item:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium border border-blue-200/50">
                        {skill.badge}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Meter */}
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden relative">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
