"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const timer = window.setTimeout(() => {
      setMounted(true);
      setIsDark(document.documentElement.classList.contains("dark"));
    }, 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[990] transition-all duration-300 ${
        scrolled ? "glass-effect shadow-luxury py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B3158] text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(201,162,39,0.35)] border border-[#C9A227]/30 shrink-0">
              <span className="font-poppins text-[1.15rem] font-black tracking-tighter">
                C<span className="text-[#C9A227]">N</span>R
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins text-[1.05rem] sm:text-xl font-black leading-none tracking-wider text-[#0B3158] dark:text-white transition-colors duration-300">
                CNR ASSET
              </span>
              <span className="font-inter text-[0.68rem] sm:text-[0.72rem] font-bold tracking-[0.2em] text-[#C9A227] uppercase mt-1 leading-none">
                Valuers & Engineers
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-inter text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-[#C9A227]"
                      : "text-slate-700 dark:text-slate-200 hover:text-[#0B3158] dark:hover:text-[#C9A227]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A227]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions (Call, WhatsApp, Theme Switcher) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark/Light mode Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {mounted && isDark ? (
                <Sun className="h-5 w-5 text-[#C9A227]" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919160531072"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-50/10 hover:bg-green-500/10 text-green-600 dark:text-green-400 font-inter text-xs font-bold uppercase tracking-wider transition-all"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Phone dialer */}
            <a
              href="tel:9160531072"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B3158] hover:bg-[#0B3158]/95 text-white font-inter text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_12px_rgba(11,49,88,0.15)] hover:shadow-[#C9A227]/20 border border-[#C9A227]/20"
            >
              <Phone className="h-4 w-4 animate-bounce" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile hamburger header */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Dark Mode button on mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {mounted && isDark ? (
                <Sun className="h-5 w-5 text-[#C9A227]" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Toggle mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass-effect border-t border-slate-100 dark:border-slate-800/80 shadow-luxury overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 flex flex-col gap-4">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-inter text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-[#0B3158] text-white dark:bg-slate-800 dark:text-[#C9A227]"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919160531072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 text-green-600 dark:text-green-400 font-inter text-sm font-semibold uppercase tracking-wider transition-all w-full"
                >
                  <MessageSquare className="h-4 w-4 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href="tel:9160531072"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0B3158] hover:bg-[#0B3158]/95 text-white font-inter text-sm font-bold uppercase tracking-wider transition-all w-full text-center shadow-luxury"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call 9160531072</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
