"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Clock,
  Quote,
  Phone,
  Mail,
  X,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState<null | number>(null);

  const leaders = [
    {
      name: "Bhukya Chandrashekar",
      role: "Founder & Managing Director",
      initials: "BC",
      phone: "+91 91605 31072",
      email: "cnrvaluers@gmail.com",
      license: "IBBI/RV/07/2026/16107",
      licensingBrief: "IBBI Registered Valuer (Land & Building)",
      summary:
        "Chartered Engineer (India), and AMIE with more than 7 years of professional valuation experience in residential, commercial, industrial, and institutional valuation.",
      qualifications: [
        "M.Tech Highway Engineering",
        "B.Tech Civil Engineering",
        "IBBI Registered Valuer (Land & Building)",
        "Chartered Engineer (India)",
        "AMIE Member",
      ],
      memberships: [
        "PVAI (Practising Valuers Association of India)",
        "Institution of Engineers India (IEI)",
      ],
      message:
        "We believe every valuation should be accurate, transparent, and technically defendable.",
      skills: [
        { name: "Property Valuation", percentage: 95 },
        { name: "Engineering Consultancy", percentage: 90 },
        { name: "Project Monitoring", percentage: 88 },
        { name: "Market Analysis", percentage: 85 },
        { name: "Construction Estimation", percentage: 92 },
        { name: "Technical Inspection", percentage: 94 },
      ],
      timeline: [
        {
          role: "Assistant Valuer",
          company: "Scecon Engineering Consultants LLP",
          period: "2016 - 2019",
          desc: "Assisted in land surveys, industrial layout valuations, and initial drafting of structural assessment files.",
        },
        {
          role: "Valuation Engineer",
          company: "Sreenidhi Management Consultancy",
          period: "2020 - 2022",
          desc: "Conducted physical due diligence, structural evaluations, and municipal zoning analysis for housing loan securities.",
        },
        {
          role: "Assistant Valuer",
          company: "Kruthika Associates",
          period: "2023 - 2025",
          desc: "Managed high-end retail, commercial site valuations, and capital gains fair market value reports.",
        },
        {
          role: "Branch Valuation Officer",
          company: "Sreenidhi Valuation Research & Analytics",
          period: "2025 - 2026",
          desc: "Authorized and reviewed property reports, banking security valuations, and led regional engineer inspector teams.",
        },
        {
          role: "Founder & Managing Director",
          company: "CNR Asset Valuers & Engineers",
          period: "2026 - Present",
          desc: "Steering the firm's strategic growth, IBBI regulatory approvals, and corporate client portfolio management.",
        },
      ],
    },
    {
      name: "Bhukya Naresh",
      role: "Co-Founder & Technical Manager",
      initials: "BN",
      phone: "+91 95429 40292",
      email: "cnrvaluers@gmail.com",
      license: "Technical Director",
      licensingBrief:
        "Key Expertise: Real Estate Assessment & Quantity Surveys",
      image: "/naresh.png",
      summary:
        "Technical Manager with more than four years of experience in valuation consulting, technical due diligence, market research, asset assessment, and investment advisory.",
      qualifications: [
        "M.Tech Highway Engineering",
        "B.Tech Civil Engineering",
        "Diploma in Civil Engineering",
        "Expert in Financial Modelling & DRC",
      ],
      memberships: [
        "Civil Engineering Association",
        "Highway & Asset Infrastructure Research Forum",
      ],
      message:
        "Deliver technically accurate, data-driven, and client-focused valuation services using modern engineering practices.",
      skills: [
        { name: "Real Estate Valuation", percentage: 92 },
        { name: "Financial Modelling (DCF/DRC)", percentage: 94 },
        { name: "Market Research", percentage: 88 },
        { name: "Quantity Surveying", percentage: 90 },
        { name: "AutoCAD & ETABS", percentage: 85 },
        { name: "Asset Analysis", percentage: 89 },
      ],
      timeline: [
        {
          role: "Technical Manager",
          company: "Srinidhi Valuation Research & Analytics",
          period: "2021 - 2024",
          desc: "Coordinated quantitative analysis, quantity surveys, and built mathematical valuation worksheets.",
        },
        {
          role: "Technical Manager",
          company: "SMR Engineers & Valuers",
          period: "2024 - 2025",
          desc: "Directed building material audits, stability analyses, and estimated reconstruction costs (DRC method).",
        },
        {
          role: "Technical Manager",
          company: "Valfin Advisory",
          period: "2025",
          desc: "Headed loan assessment valuations, collateral audits, and corporate capital asset reviews.",
        },
        {
          role: "Senior Executive",
          company: "Savills Property Services",
          period: "2025 - Present",
          desc: "Performing corporate appraisals, asset advisory, and market trend forecasts for multi-national portfolios.",
        },
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-[#101828] transition-colors duration-300 page-fade-in flex flex-col min-h-[calc(100vh-80px)]">
      {/* Fixed Navbar Spacer */}
      <div className="h-32 bg-[#101828] w-full shrink-0" />

      {/* Header Banner */}
      <section className="relative py-16 bg-[#101828] text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,49,88,0.4),transparent)]" />
        <div className="absolute inset-0 bg-[#0B3158]/10" />
        <div className="relative w-full px-6 md:px-12 lg:px-16 text-center space-y-4">
          <span className="font-inter text-xs font-bold tracking-widest text-[#C9A227] uppercase">
            Executive Leadership
          </span>
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            Meet Our Founders
          </h1>
        </div>
      </section>

      {/* Leadership Cards Section */}
      <section className="py-16 w-full px-4 sm:px-6 md:px-10 lg:px-12 flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto max-w-6xl">
          {leaders.map((leader, index) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              key={leader.name}
              onClick={() => setSelectedLeader(index)}
              className="cursor-pointer group flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-[#1E293B] border border-slate-200/50 dark:border-slate-800/80 shadow-luxury hover:border-[#C9A227]/40 dark:hover:border-[#C9A227]/40 transition-all duration-300 w-full"
            >
              <div className="flex flex-col gap-6 w-full items-center text-center">
                {/* Visual Image/Initials Avatar */}
                <div className="relative h-28 w-28 mx-auto rounded-full bg-[#0B3158] dark:bg-[#101828] border-2 border-[#C9A227] flex items-center justify-center text-white shadow-md shadow-[#C9A227]/10 group-hover:scale-105 transition-transform duration-300 overflow-hidden shrink-0">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-poppins text-5xl font-black text-white">
                      {leader.initials}
                    </span>
                  )}
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-white dark:border-[#1E293B]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-poppins text-2xl font-extrabold text-[#0B3158] dark:text-white leading-tight">
                    {leader.name}
                  </h3>
                  <p className="font-inter text-sm text-[#C9A227] tracking-widest uppercase font-bold">
                    {leader.role}
                  </p>
                  <p className="font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {leader.licensingBrief}
                  </p>
                </div>

                {/* Direct Contact Info */}
                <div className="w-full pt-6 border-t border-slate-200/60 dark:border-slate-800 flex flex-col gap-3 font-inter text-sm items-center justify-center">
                  <a
                    href={`tel:${leader.phone.replace(/\s+/g, "")}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-3 text-slate-655 dark:text-slate-350 hover:text-[#C9A227] transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#C9A227] shrink-0" />
                    <span className="font-medium">{leader.phone}</span>
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-3 text-slate-655 dark:text-slate-355 hover:text-[#C9A227] transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#C9A227] shrink-0" />
                    <span className="font-medium">{leader.email}</span>
                  </a>
                  {leader.license && (
                    <div className="flex items-center gap-3 text-slate-655 dark:text-slate-350">
                      <ShieldCheck className="h-5 w-5 text-[#C9A227] shrink-0" />
                      <span className="font-mono text-sm bg-slate-200/50 dark:bg-slate-900 py-1.5 px-4 rounded-xl">
                        {leader.license}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Click Notice */}
              <div className="w-full mt-8 pt-5 border-t border-slate-200/60 dark:border-slate-800 text-center">
                <span className="font-inter text-sm font-bold text-[#0B3158] dark:text-[#C9A227] uppercase tracking-widest group-hover:underline">
                  Click to View Full Profile →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Profile Modals Overlay */}
      <AnimatePresence>
        {selectedLeader !== null && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 lg:p-12">
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Scrollable Card Container - Redesigned to match Site max-w-6xl width constraints */}
            <motion.div
              initial={{ scale: 0.97, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="relative w-full max-w-6xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#1E293B] rounded-3xl border border-slate-200 dark:border-slate-850 shadow-luxury p-8 sm:p-10 md:p-12 lg:p-16 z-10 flex flex-col gap-10 scrollbar-thin text-slate-800 dark:text-slate-100"
            >
              {/* 1. Header (Avatar, Name, Role + Close Button) */}
              <div className="flex justify-between items-start shrink-0 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-5">
                  {leaders[selectedLeader].image ? (
                    <div className="h-20 w-20 rounded-full border-2 border-[#C9A227] overflow-hidden shrink-0">
                      <img
                        src={leaders[selectedLeader].image}
                        alt={leaders[selectedLeader].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-[#0B3158] flex items-center justify-center text-white font-poppins text-2xl font-bold border-2 border-[#C9A227] shrink-0">
                      {leaders[selectedLeader].initials}
                    </div>
                  )}
                  <div className="space-y-1">
                    <span className="font-inter text-xs font-bold tracking-widest text-[#C9A227] uppercase">
                      Executive Profile Card
                    </span>
                    <h2 className="font-poppins text-2xl md:text-3xl font-extrabold text-[#0B3158] dark:text-white leading-tight">
                      {leaders[selectedLeader].name}
                    </h2>
                    <p className="font-inter text-base font-semibold text-slate-600 dark:text-slate-400">
                      {leaders[selectedLeader].role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200/50 dark:border-slate-800"
                  aria-label="Close profile card"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* 2. Credentials & Licensing Stamps */}
              <div className="flex flex-wrap items-center gap-4 text-sm font-inter">
                <div className="flex items-center gap-2 bg-[#C9A227]/10 dark:bg-[#C9A227]/5 py-2 px-4 rounded-xl border border-[#C9A227]/20 text-[#0B3158] dark:text-[#C9A227] font-bold font-mono">
                  <ShieldCheck className="h-5 w-5" />
                  <span>{leaders[selectedLeader].license}</span>
                </div>
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  {leaders[selectedLeader].licensingBrief}
                </span>
              </div>

              {/* 3. Immersive 2-column Grid with Spacious Layout Alignment */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
                {/* Left Column: Quote, Bio, and Education (lg:span-5) */}
                <div className="lg:col-span-5 flex flex-col gap-8 w-full">
                  {/* Quote block */}
                  <div className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-start gap-4">
                    <Quote className="h-8 w-8 text-[#C9A227] shrink-0 mt-0.5" />
                    <blockquote className="font-inter italic text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-light">
                      &ldquo;{leaders[selectedLeader].message}&rdquo;
                    </blockquote>
                  </div>

                  {/* Biography Narrative */}
                  <div className="space-y-3">
                    <h4 className="font-poppins text-xs font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest">
                      Professional Biography
                    </h4>
                    <p className="font-inter text-base text-slate-655 dark:text-slate-300 leading-relaxed font-light">
                      {leaders[selectedLeader].summary}
                    </p>
                  </div>

                  {/* Academic Credentials */}
                  <div className="space-y-4">
                    <h4 className="font-poppins text-base font-bold text-[#0B3158] dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <GraduationCap className="h-5.5 w-5.5 text-[#C9A227]" />
                      <span>Academic Credentials</span>
                    </h4>
                    <ul className="flex flex-col gap-3 text-sm md:text-base text-slate-600 dark:text-slate-350">
                      {leaders[selectedLeader].qualifications.map(
                        (qual, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="h-4.5 w-4.5 text-[#C9A227] shrink-0" />
                            <span className="font-light">{qual}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* Professional Affiliations */}
                  <div className="space-y-4">
                    <h4 className="font-poppins text-base font-bold text-[#0B3158] dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <Award className="h-5.5 w-5.5 text-[#C9A227]" />
                      <span>Professional Affiliations</span>
                    </h4>
                    <ul className="flex flex-col gap-3 text-sm md:text-base text-slate-655 dark:text-[#C9A227]">
                      {leaders[selectedLeader].memberships.map((memb, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 text-[#C9A227] shrink-0" />
                          <span className="font-light text-slate-655 dark:text-slate-300">
                            {memb}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Skill Meters & Timeline (lg:span-7) */}
                <div className="lg:col-span-7 flex flex-col gap-10 w-full">
                  {/* Skill Progress */}
                  <div className="space-y-4">
                    <h4 className="font-poppins text-xs font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest">
                      Technical Skills & Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {leaders[selectedLeader].skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between text-sm font-inter">
                            <span className="font-semibold text-slate-705 dark:text-slate-300">
                              {skill.name}
                            </span>
                            <span className="font-bold text-[#C9A227]">
                              {skill.percentage}%
                            </span>
                          </div>
                          <div className="h-2.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                            <div
                              style={{ width: `${skill.percentage}%` }}
                              className="h-full bg-gradient-to-r from-[#0B3158] to-[#C9A227]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Timeline */}
                  <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="font-poppins text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#C9A227]" />
                      <span>Professional Timeline</span>
                    </h4>
                    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-3.5 space-y-8">
                      {leaders[selectedLeader].timeline.map((item, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full bg-white dark:bg-[#1E293B] border-2 border-[#C9A227]" />
                          <div className="space-y-1.5">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <span className="font-poppins font-bold text-slate-800 dark:text-white text-base md:text-lg leading-tight">
                                {item.role}
                              </span>
                              <span className="font-inter font-bold text-xs text-[#C9A227] bg-[#C9A227]/10 py-1 px-3 rounded-full whitespace-nowrap shrink-0 w-fit">
                                {item.period}
                              </span>
                            </div>
                            <p className="font-inter font-semibold text-sm text-[#0B3158] dark:text-[#C9A227]">
                              {item.company}
                            </p>
                            <p className="font-inter text-slate-505 dark:text-slate-355 leading-relaxed text-sm font-light pt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
