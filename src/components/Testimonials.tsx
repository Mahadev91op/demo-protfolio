"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquareQuote, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Client &amp; Peer Praise</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          What Collaborators <span className="text-gradient-blue">Say About Working With Me</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Delivering real impact through high communication, technical precision, and reliability.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {portfolioData.testimonials.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-blue-100/80 shadow-card hover:shadow-card-hover transition-all"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-blue-100/60">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                {item.avatar}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{item.author}</h4>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
