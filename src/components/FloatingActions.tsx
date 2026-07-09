"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[900] flex flex-col items-center space-y-3">
      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-[#0B3158] hover:bg-[#C9A227] text-white hover:text-white shadow-luxury hover:shadow-gold-glow transition-all duration-300 cursor-pointer border border-[#C9A227]/25"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Telephone Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        href="tel:9160531072"
        className="p-4 rounded-full bg-[#0B3158] text-white hover:bg-slate-900 hover:scale-105 shadow-luxury hover:shadow-gold-glow transition-all duration-300 border border-[#C9A227]/20 flex items-center justify-center"
        aria-label="Call support"
      >
        <Phone className="h-5 w-5" />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 }}
        href="https://wa.me/919160531072"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-green-500 hover:bg-green-600 hover:scale-105 text-white shadow-luxury hover:shadow-green-500/35 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 fill-current" />
      </motion.a>
    </div>
  );
}
