"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from([infoCardRef.current, formCardRef.current], {
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#0066FF", "#38BDF8", "#00D2FF", "#2563EB"],
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        projectType: "Full-Stack Web App",
        message: "",
      });
    }, 4500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background soft glow */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Let&apos;s Build Something <span className="text-gradient-blue">Extraordinary</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          Have a project in mind, need a high-performance web app, or looking to collaborate? Drop me a line!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Info Column */}
        <div ref={infoCardRef} className="lg:col-span-5 space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-blue-100/90 shadow-card">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Contact Information
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Feel free to reach out directly via email or connect with me across social channels.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-500 font-medium block">Direct Email</span>
                  <span className="text-sm font-semibold text-slate-900 truncate block">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-white hover:bg-blue-100 text-blue-600 border border-blue-200 transition-colors shadow-xs flex-shrink-0"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Availability info badges */}
            <div className="space-y-3 text-sm text-slate-600 mb-8">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Average Response Time: <strong>&lt; 2 Hours</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span>Location: <strong>{portfolioData.personal.location}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>Open for: <strong>Full-time &amp; High-impact Freelance</strong></span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Connect With Me
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200"
                  title="Twitter / X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div ref={formCardRef} className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-blue-100/90 shadow-card">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  Thank you for reaching out! Mahadev has received your details and will get back to you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Project Focus
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all"
                  >
                    <option value="Full-Stack Web App">Full-Stack Web App (Next.js)</option>
                    <option value="3D WebGL / Three.js Experience">3D WebGL / Three.js Experience</option>
                    <option value="GSAP Animation & Interaction">GSAP Animation &amp; Interaction</option>
                    <option value="Full-Time Developer Role">Full-Time Developer Role</option>
                    <option value="Other Consulting">Other Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project goals, scope, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl btn-primary font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                >
                  <span>Send Message to Mahadev</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
