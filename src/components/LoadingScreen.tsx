"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when loading is active
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 1800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#101828] text-white"
        >
          <div className="text-center px-4">
            {/* Elegant Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 flex justify-center"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-xl bg-[#0B3158] border border-[#C9A227]/30 shadow-[0_20px_40px_rgba(11,49,88,0.3)]">
                <span className="font-poppins text-3xl font-extrabold tracking-tight text-white">
                  C<span className="text-[#C9A227]">N</span>R
                </span>
                <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#C9A227] animate-pulse" />
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-poppins text-2xl md:text-3xl font-bold tracking-wider uppercase text-white"
            >
              CNR ASSET
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-2 font-inter text-xs md:text-sm tracking-widest text-[#C9A227] font-semibold uppercase"
            >
              Valuers & Engineers
            </motion.p>

            {/* Loading animation bar */}
            <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-slate-800 mx-auto">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut"
                }}
                className="h-full w-full bg-gradient-to-r from-[#0B3158] via-[#C9A227] to-[#0B3158]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-3 font-inter text-[10px] text-slate-400 tracking-wider"
            >
              ESTABLISHED TRUST & PROFESSIONAL INTEGRITY
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
