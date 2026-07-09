"use client";

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight 
} from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Corporate Numbers",
      desc: "For general queries or urgent estimations:",
      links: [
        { label: "+91 91605 31072", url: "tel:9160531072" },
        { label: "+91 95429 40292", url: "tel:9542940292" }
      ],
      icon: Phone,
    },
    {
      title: "Electronic Mail",
      desc: "Email us for banking schedules or corporate agreements:",
      links: [
        { label: "cnrvaluers@gmail.com", url: "mailto:cnrvaluers@gmail.com" }
      ],
      icon: Mail,
    },
    {
      title: "Business Hours",
      desc: "Office open days & timings:",
      details: "Mon - Sat: 9:00 AM - 6:00 PM (Sunday Closed)",
      icon: Clock,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-[#101828] transition-colors duration-300 page-fade-in flex flex-col min-h-[calc(100vh-80px)]">
      
      {/* Fixed Navbar Spacer */}
      <div className="h-32 bg-[#101828] w-full shrink-0" />

      {/* Header Banner */}
      <section className="relative py-20 bg-[#101828] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,49,88,0.4),transparent)]" />
        <div className="absolute inset-0 bg-[#0B3158]/10" />
        <div className="relative w-full px-6 md:px-12 lg:px-16 text-center space-y-4">
          <span className="font-inter text-xs font-bold tracking-widest text-[#C9A227] uppercase">
            Let&apos;s Connect
          </span>
          <h1 className="font-poppins text-4xl md:text-5xl font-extrabold">
            Contact Our Advisors
          </h1>
          <p className="font-inter text-slate-350 text-sm max-w-2xl mx-auto">
            Get in touch with our IBBI registered engineering valuer team in Hyderabad. Schedule a face-to-face meeting or call for immediate valuations.
          </p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 w-full px-6 md:px-12 lg:px-16 flex-grow">
        <div className="flex flex-col gap-12 w-full mx-auto">
          
          {/* Corporate Location Card & Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Box: Office Location Details */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-slate-50 dark:bg-[#1E293B] border border-slate-205 dark:border-slate-800 shadow-luxury flex flex-col gap-4">
              <span className="font-inter text-xs font-bold tracking-widest text-[#C9A227] uppercase block">
                Office Information
              </span>
              <h2 className="font-poppins text-2xl font-extrabold text-[#0B3158] dark:text-white leading-tight">
                CNR Headquarters
              </h2>
              <div className="flex items-start gap-3 pt-2">
                <MapPin className="h-6 w-6 text-[#C9A227] shrink-0 mt-0.5" />
                <div className="font-inter text-sm flex flex-col gap-1">
                  <p className="font-semibold text-slate-800 dark:text-white">Corporate Location</p>
                  <p className="text-slate-505 dark:text-slate-400 leading-relaxed text-xs">
                    3rd Floor, LPT/350, Lpt Market, H.No. 3-8-106, Chintalkunta X Road, Saraswati Nagar, Chandrapuri Colony, L. B. Nagar, Hyderabad, Telangana 500074
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-850">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3rd+Floor,+LPT%2F350,+Lpt+Market,+H.No.+3-8-106,+Chintalkunta+X+Road,+Saraswati+Nagar,+Chandrapuri+Colony,+L.+B.+Nagar,+Hyderabad,+Telangana+500074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#C9A227] hover:text-[#0B3158] dark:hover:text-white transition-colors"
                >
                  <span>Directions on Google Maps</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Box: 3-column contact cards grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 h-full">
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <div 
                    key={i}
                    className="p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col gap-4 justify-between"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#C9A227]/10 dark:bg-slate-850 text-[#C9A227] flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-poppins text-xs font-bold text-[#0B3158] dark:text-white uppercase tracking-wider">
                        {method.title}
                      </h4>
                      <p className="font-inter text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                        {method.desc}
                      </p>
                    </div>
                    {method.links ? (
                      <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                        {method.links.map((link) => (
                          <a 
                            key={link.label}
                            href={link.url}
                            className="block font-inter text-xs font-bold text-[#0B3158] dark:text-[#C9A227] hover:underline"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="font-inter text-xs font-bold text-slate-700 dark:text-[#C9A227] pt-2 border-t border-slate-100 dark:border-slate-800/60 leading-relaxed">
                        {method.details}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Full-width Map Frame */}
          <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-luxury h-[450px]">
            <iframe
              title="CNR Office Google Map Location"
              src="https://maps.google.com/maps?q=3rd%20Floor,%20LPT/350,%20Lpt%20Market,%20H.No.%203-8-106,%20Chintalkunta%20X%20Road,%20Saraswati%20Nagar,%20Chandrapuri%20Colony,%20L.%20B.%20Nagar,%20Hyderabad,%20Telangana%20500074&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
