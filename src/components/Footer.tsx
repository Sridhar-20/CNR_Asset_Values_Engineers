"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Residential Valuation", href: "/services" },
    { name: "Commercial Valuation", href: "/services" },
    { name: "Industrial Valuation", href: "/services" },
    { name: "Educational & Healthcare Institutions", href: "/services" },
    { name: "Project Finance Advisory", href: "/services" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Leadership Team", href: "/leadership" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#101828] text-slate-300 border-t border-slate-800">
      {/* Upper Footer section */}
      <div className="w-full px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Company Profile */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-5 group w-fit">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0B3158] text-white border-2 border-[#C9A227]/30 shrink-0">
                <span className="font-poppins text-4xl font-black tracking-tighter">
                  C<span className="text-[#C9A227]">N</span>R
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins text-3xl font-black leading-none tracking-wider text-white">
                  CNR ASSET
                </span>
                <span className="font-inter text-sm font-bold tracking-[0.2em] text-[#C9A227] uppercase mt-2 leading-none">
                  Valuers & Engineers
                </span>
              </div>
            </Link>
            <p className="font-inter text-sm text-slate-400 leading-relaxed">
              Professional asset valuation and engineering consultancy firm based in Hyderabad. We deliver independent, transparent, and technically sound advisory services.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/cnr-asset-valuers-engineers"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-800/80 hover:bg-[#0B3158] border border-slate-700/60 hover:border-[#C9A227]/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/cnrvaluers"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-800/80 hover:bg-[#0B3158] border border-slate-700/60 hover:border-[#C9A227]/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/cnrvaluers"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-slate-800/80 hover:bg-[#0B3158] border border-slate-700/60 hover:border-[#C9A227]/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-800/65 w-fit">
              Company Directories
            </h3>
            <ul className="flex flex-col gap-3 font-inter text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C9A227] flex items-center group transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C9A227]/50 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-800/65 w-fit">
              Featured Expertise
            </h3>
            <ul className="flex flex-col gap-3 font-inter text-sm">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C9A227] flex items-center group transition-colors duration-200 text-slate-450"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C9A227]/50 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    <span className="line-clamp-1">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details & Office */}
          <div className="flex flex-col gap-4">
            <h3 className="font-poppins text-sm font-semibold text-white uppercase tracking-wider mb-2 pb-2 border-b border-slate-800/65 w-fit">
              Corporate Office
            </h3>
            <ul className="flex flex-col gap-3 font-inter text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  3rd Floor, LPT/350, Lpt Market, H.No. 3-8-106, Chintalkunta X Road, Saraswati Nagar, Chandrapuri Colony, L. B. Nagar, Hyderabad, Telangana 500074
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#C9A227] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9160531072" className="hover:text-white transition-colors block">
                    +91 91605 31072
                  </a>
                  <a href="tel:9542940292" className="hover:text-white transition-colors block">
                    +91 95429 40292
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#C9A227] shrink-0" />
                <a href="mailto:cnrvaluers@gmail.com" className="hover:text-white transition-colors">
                  cnrvaluers@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#C9A227] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=3rd+Floor,+LPT%2F350,+Lpt+Market,+H.No.+3-8-106,+Chintalkunta+X+Road,+Saraswati+Nagar,+Chandrapuri+Colony,+L.+B.+Nagar,+Hyderabad,+Telangana+500074"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C9A227] hover:text-white transition-colors"
              >
                <span>Navigate on Google Maps</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright row */}
      <div className="bg-[#0b0e14] py-8 border-t border-slate-900">
        <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-slate-500 text-center md:text-left">
            &copy; {currentYear} CNR Asset Valuers & Engineers. All Rights Reserved. Valuations comply with IBBI guidelines, IVS, & Companies Act 2013.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 font-inter">
            <Link href="/services" className="hover:text-white transition-colors">
              IBBI Regulatory Guidelines
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Disclaimer & Terms
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
