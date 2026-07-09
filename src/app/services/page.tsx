"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  Building, 
  Building2, 
  Map, 
  School 
} from "lucide-react";

export default function ServicesPage() {
  const servicesList = [
    {
      title: "Residential Properties",
      scope: "Apartments, Villas, Layouts",
      desc: "Market valuations and appraisal reports for individual houses, multi-family villas, apartment complexes, and residential plot layouts.",
      icon: Home,
    },
    {
      title: "Commercial Properties",
      scope: "Office Spaces, Retails, IT Parks",
      desc: "Valuation assessments for retail shopping malls, high-rise corporate workspaces, IT tech hubs, and commercial complexes.",
      icon: Building,
    },
    {
      title: "Industrial Assets",
      scope: "Factories, Warehouses",
      desc: "Appraisals for manufacturing yards, factories, distribution warehouses, industrial storage depots, and plant infrastructure.",
      icon: Building2,
    },
    {
      title: "Land Parcels",
      scope: "Agricultural / Non-Agricultural",
      desc: "Estimation reviews and boundary audits for farm holdings, developmental agricultural properties, and non-agricultural tracts.",
      icon: Map,
    },
    {
      title: "Educational & Healthcare Institutions",
      scope: "Schools, Universities, Hospitals",
      desc: "Dedicated valuation reports for healthcare hospitals, educational campuses, schools, medical facilities, and research yards.",
      icon: School,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-[#101828] transition-colors duration-300 page-fade-in flex flex-col min-h-[calc(100vh-80px)]">
      
      {/* Fixed Navbar Spacer */}
      <div className="h-32 bg-[#101828] w-full shrink-0" />

      {/* Header Banner */}
      <section className="relative py-20 bg-[#101828] text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,49,88,0.45),transparent)]" />
        <div className="absolute inset-0 bg-[#0B3158]/15" />
        <div className="relative w-full px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center gap-4">
          <span className="font-inter text-xs font-bold tracking-widest text-[#C9A227] uppercase">
            Our Portfolio
          </span>
          <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Valuation & Advisory Services
          </h1>
        </div>
      </section>

      {/* Services Grid & Controls */}
      <section className="py-24 w-full px-6 md:px-12 lg:px-16 flex-grow flex items-center justify-center">
        <div className="w-full flex flex-col gap-12 max-w-6xl mx-auto">
          
          <div className="flex flex-col gap-4 text-center items-center justify-center">
            <span className="font-inter text-xs font-bold tracking-widest text-[#C9A227] uppercase block">
              Core Categories
            </span>
            <h2 className="font-poppins text-3xl font-extrabold text-[#0B3158] dark:text-white leading-tight">
              Our Professional Areas of Valuation
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-[#1E293B] border border-slate-200/50 dark:border-slate-800/80 shadow-luxury hover:border-[#C9A227]/40 dark:hover:border-[#C9A227]/40 transition-all duration-300 flex flex-col justify-between items-center text-center gap-6"
                >
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="h-14 w-14 rounded-2xl bg-[#0B3158]/5 dark:bg-slate-900 text-[#0B3158] dark:text-[#C9A227] flex items-center justify-center border border-slate-100 dark:border-slate-850">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-poppins text-xl font-bold text-[#0B3158] dark:text-white">
                        {service.title}
                      </h3>
                      <p className="font-inter text-[10px] text-[#C9A227] tracking-wider uppercase font-semibold">
                        {service.scope}
                      </p>
                    </div>
                    <p className="font-inter text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
