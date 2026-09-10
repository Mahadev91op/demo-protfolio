"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Heart, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-blue-100 bg-white/70 backdrop-blur-md relative z-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-slate-900">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-xs shadow-sm">
              M
            </div>
            <span>
              MAHADEV<span className="text-blue-600">.</span>
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Creative Full-Stack Developer • Next.js &amp; 3D WebGL
          </p>
        </div>

        {/* Live Indian Standard Time */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/50 text-xs font-mono text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>IST: {localTime || "10:30 PM"} (UTC+5:30)</span>
        </div>

        {/* Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500">
            © {new Date().getFullYear()} Mahadev. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition-colors shadow-xs"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
