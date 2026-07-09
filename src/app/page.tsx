"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Calendar, ShieldCheck, Home, FileCheck } from "lucide-react";

// Counter Hook for Stats
function Counter({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.min(
      Math.abs(Math.floor(totalMiliseconds / end)),
      30,
    );

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
}

export default function HomePage() {
  const stats = [
    { value: 1000, label: "Valuation Reports", icon: FileCheck, suffix: "+" },
    { value: 500, label: "Satisfied Clients", icon: Users, suffix: "+" },
    { value: 7, label: "Years Experience", icon: Calendar, suffix: "+" },
    {
      value: 100,
      label: "Professional Integrity",
      icon: ShieldCheck,
      suffix: "%",
    },
  ];

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#101828] text-white overflow-hidden page-fade-in">
      {/* Architectural grid vector background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(201, 162, 39, 0.4)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <line
            x1="0"
            y1="10%"
            x2="100%"
            y2="90%"
            stroke="#0B3158"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <line
            x1="100%"
            y1="10%"
            x2="0"
            y2="90%"
            stroke="#C9A227"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <path
            d="M 200,800 L 200,300 L 350,150 L 500,300 L 500,800 Z"
            fill="none"
            stroke="#0B3158"
            strokeWidth="1.5"
          />
          <path
            d="M 350,150 L 350,800"
            fill="none"
            stroke="#C9A227"
            strokeWidth="1"
          />
          <path
            d="M 750,800 L 750,200 L 880,100 L 1000,200 L 1000,800 Z"
            fill="none"
            stroke="#C9A227"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Ambient radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0B3158]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#C9A227]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full px-6 md:px-12 lg:px-16 py-10 z-10 flex flex-col justify-center items-center flex-grow">
        <div className="w-full text-center flex flex-col gap-6 max-w-6xl mx-auto">
          {/* Header Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-slate-900/60 border border-slate-700/50 rounded-full py-1.5 px-4 glass-effect mx-auto"
          >
            <span className="h-2 w-2 rounded-full bg-[#C9A227] animate-ping" />
            <span className="font-inter text-xs font-semibold tracking-widest text-[#C9A227] uppercase">
              IBBI Registered Valuers & Chartered Engineers
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
          >
            Professional Asset Valuation & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C9A227] to-[#C9A227]">
              Engineering Consultancy
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-inter text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Providing Independent, Transparent, and Accurate Property Valuation
            Solutions across Hyderabad, Telangana, and India.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3"
          >
            <Link
              href="/services"
              className="px-7 py-3.5 w-full sm:w-auto rounded-lg bg-[#C9A227] text-dark hover:bg-white hover:text-[#0B3158] font-inter font-bold tracking-wide transition-all duration-300 text-center shadow-luxury hover:shadow-gold-glow border border-[#C9A227]"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 w-full sm:w-auto rounded-lg bg-transparent hover:bg-slate-800/40 text-white font-inter font-bold tracking-wide transition-all duration-300 text-center border border-slate-700/80"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Overlay Statistics Counter Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 glass-effect text-center flex flex-col gap-2 hover:border-[#C9A227]/40 transition-colors"
                >
                  <div className="mx-auto h-8 w-8 rounded-lg bg-[#0B3158]/55 flex items-center justify-center text-[#C9A227] mb-2 border border-[#C9A227]/10">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="font-poppins text-xl sm:text-2xl font-extrabold text-white">
                    <Counter value={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="font-inter text-xs text-slate-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
