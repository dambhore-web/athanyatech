import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemStrip from "@/components/sections/ProblemStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import SocialProof from "@/components/sections/SocialProof";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Athanya Technologies — IT Solutions for Small Businesses in Pune",
  description:
    "Athanya Technologies helps small and medium businesses in Pune get online, automate their work, and understand their data. No tech jargon. Fixed prices. Real results.",
  alternates: {
    canonical: "https://www.athanyatechnologies.com",
  },
  openGraph: {
    title: "Athanya Technologies — IT Solutions for Small Businesses in Pune",
    description:
      "Athanya Technologies helps small and medium businesses in Pune get online, automate their work, and understand their data. No tech jargon. Fixed prices. Real results.",
    url: "https://www.athanyatechnologies.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.athanyatechnologies.com/#business",
  name: "Athanya Technologies",
  url: "https://www.athanyatechnologies.com",
  telephone: "+91-85303-33588",
  email: "hello@athanyatechnologies.com",
  image: "https://www.athanyatechnologies.com/Athanya_Logo_Horizontal.svg",
  description:
    "Athanya Technologies builds AI tools, mobile apps, web automation, data dashboards, and websites for small and medium businesses in Pune, Maharashtra.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5204,
    longitude: 73.8567,
  },
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "State", name: "Maharashtra" },
  ],
  priceRange: "₹₹",
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: ["https://gupo.in"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero
        headline="Your business runs on people — we handle the technology."
        subline="We help small and medium businesses get online, automate repetitive work, and make sense of their data. No tech jargon. No surprises. Just results."
        primaryCta={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "See What We Do", href: "/services" }}
      />
      <ProblemStrip
        problems={[
          "Losing hours to manual data entry and spreadsheets every week?",
          "Customers can't find your business online — or don't trust what they see?",
          "No idea what your numbers are actually telling you about your business?",
        ]}
      />
      <ServicesGrid />
      <WhyUs />
      <SocialProof />
      <CtaBanner
        heading="Ready to stop worrying about technology?"
        ctaLabel="Talk to us today — it's free"
        ctaHref="/contact"
      />
    </>
  );
}
