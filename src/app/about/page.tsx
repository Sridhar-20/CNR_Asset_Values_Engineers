"use client";

import { motion } from "framer-motion";
import { 
  Compass, 
  Target, 
  CheckCircle2 
} from "lucide-react";

export default function AboutPage() {
  const missionPoints = [
    "Provide accurate and reliable valuation reports.",
    "Maintain the highest standards of professional ethics.",
    "Deliver exceptional quality within committed timelines.",
    "Support informed financial, legal, and operational decisions.",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-[#101828] transition-colors duration-300 page-fade-in flex flex-col min-h-[calc(100vh-80px)]">
      
      {/* Fixed Navbar Spacer */}
      <div className="h-32 bg-[#101828] w-full shrink-0" />

      {/* 1. Header Banner */}
      <section className="relative py-20 bg-[#101828] text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,49,88,0.4),transparent)]" />
        <div className="absolute inset-0 bg-[#0B3158]/20" />
        <div className="relative w-full px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center gap-4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-inter text-xs font-bold tracking-widest text-[#C9A227] uppercase"
          >
            Established Trust
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            About CNR Asset Valuers
          </motion.h1>
        </div>
      </section>

      {/* 2. Centered Narrative */}
      <section className="py-24 w-full px-6 md:px-12 lg:px-16 flex-grow flex items-center justify-center text-center">
        <div className="max-w-4xl w-full flex flex-col items-center justify-center gap-8 mx-auto">
          
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="font-inter text-xs font-bold tracking-widest text-[#C9A227] uppercase block">
              Who We Are
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl font-extrabold text-[#0B3158] dark:text-white leading-tight">
              A Trusted Partner in Valuation & Engineering Advisory
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 text-slate-655 dark:text-slate-355 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            <p>
              CNR Asset Valuers & Engineers is a professional valuation consultancy specializing in Land & Building valuation, engineering consultancy, and technical advisory services. We provide independent, unbiased, and technically sound valuation reports.
            </p>
            <p>
              Our founding engineers are registered with the Insolvency and Bankruptcy Board of India (IBBI) as Registered Valuers and are certified Chartered Engineers (India). This professional standing guarantees that all assignments are handled with maximum technical proficiency and in strict conformity with national laws.
            </p>
          </div>
          
        </div>
      </section>

      {/* 3. Centered Side-by-Side Vision & Mission Layout */}
      <section className="py-24 bg-[#F5F6F8] dark:bg-[#0F172A] transition-colors duration-300 flex items-center justify-center">
        <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 w-full max-w-6xl mx-auto">
            
            {/* Vision Card */}
            <div className="flex-1 p-8 md:p-12 rounded-3xl bg-white dark:bg-[#1E293B] border border-slate-200/50 dark:border-slate-800/80 shadow-luxury flex flex-col justify-between items-center text-center gap-6 hover:shadow-gold-glow/5 hover:border-[#C9A227]/30 transition-all duration-300">
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="h-14 w-14 rounded-2xl bg-[#0B3158]/5 dark:bg-slate-900 text-[#0B3158] dark:text-[#C9A227] flex items-center justify-center border border-slate-100 dark:border-slate-850">
                  <Compass className="h-7 w-7" />
                </div>
                <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-[#0B3158] dark:text-white">
                  Our Corporate Vision
                </h3>
                <p className="font-inter text-slate-655 dark:text-slate-355 text-sm md:text-base leading-relaxed font-light max-w-md">
                  To become India&apos;s most trusted valuation consultancy delivering accurate, transparent, and technically sound valuation services.
                </p>
              </div>
              <span className="text-[10px] tracking-widest font-bold text-slate-400 dark:text-slate-550 uppercase">
                CNR BRAND OBJECTIVE
              </span>
            </div>

            {/* Mission Card */}
            <div className="flex-1 p-8 md:p-12 rounded-3xl bg-white dark:bg-[#1E293B] border border-slate-200/50 dark:border-slate-800/80 shadow-luxury flex flex-col justify-between items-center text-center gap-6 hover:shadow-gold-glow/5 hover:border-[#C9A227]/30 transition-all duration-300">
              <div className="flex flex-col gap-4 items-center justify-center w-full">
                <div className="h-14 w-14 rounded-2xl bg-[#C9A227]/10 dark:bg-slate-900 text-[#C9A227] flex items-center justify-center border border-slate-100 dark:border-slate-850">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="font-poppins text-2xl md:text-3xl font-extrabold text-[#0B3158] dark:text-white">
                  Our Corporate Mission
                </h3>
                <ul className="flex flex-col gap-4 font-inter text-sm md:text-base text-slate-655 dark:text-slate-355 items-center w-full max-w-md">
                  {missionPoints.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 py-1.5 border-b border-slate-100 dark:border-slate-800/60 w-full justify-center">
                      <CheckCircle2 className="h-5 w-5 text-[#C9A227] shrink-0" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-[10px] tracking-widest font-bold text-slate-400 dark:text-slate-550 uppercase">
                OUR DAILY COMMITMENT
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
