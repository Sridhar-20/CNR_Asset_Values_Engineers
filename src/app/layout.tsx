import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import LoadingScreen from "@/components/LoadingScreen";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CNR Asset Valuers & Engineers | Property Valuation & Engineering Consultancy Hyderabad",
  description: "CNR Asset Valuers & Engineers is a premier, IBBI registered valuation firm in Hyderabad, Telangana. We provide professional, transparent Land & Building valuations, chartered engineer certificates, and project cost estimations across India.",
  keywords: "Asset Valuation Hyderabad, Property Valuers Hyderabad, Engineering Consultancy Telangana, IBBI Registered Valuer, Land Valuation India, Chartered Engineer Certificate, Project Cost Estimation, Real Estate Advisor India, CNR Valuers Hyderabad",
  authors: [{ name: "CNR Asset Valuers & Engineers" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.cnrvaluers.com",
    title: "CNR Asset Valuers & Engineers | Valuation & Engineering Consultancy Hyderabad",
    description: "IBBI registered land and building valuer, chartered engineer certification, and engineering consultancy in Telangana and India.",
    siteName: "CNR Asset Valuers & Engineers",
  },
  alternates: {
    canonical: "https://www.cnrvaluers.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured data (Schema.org JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CNR Asset Valuers & Engineers",
    "image": "https://www.cnrvaluers.com/logo.png",
    "@id": "https://www.cnrvaluers.com/#localbusiness",
    "url": "https://www.cnrvaluers.com",
    "telephone": "+919160531072, +919542940292",
    "email": "cnrvaluers@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, LPT/350, Lpt Market, H.No. 3-8-106, Chintalkunta X Road, Saraswati Nagar, Chandrapuri Colony, L. B. Nagar",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500074",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.345686,
      "longitude": 78.552227
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/cnr-asset-valuers-engineers",
      "https://www.facebook.com/cnrvaluers",
      "https://www.instagram.com/cnrvaluers"
    ]
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} w-full h-full antialiased`} data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="w-full min-h-full flex flex-col bg-white text-[#101828] dark:bg-[#101828] dark:text-[#F5F6F8]">
        <LoadingScreen />
        <Navbar />
        <div className="flex-grow pt-[80px]">
          {children}
        </div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

