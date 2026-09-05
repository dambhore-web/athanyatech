import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemStrip from "@/components/sections/ProblemStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import SocialProof from "@/components/sections/SocialProof";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Athanya Technologies — IT Solutions for Growing Businesses",
  description:
    "We help small and medium businesses get online, automate their work, and understand their data — in plain English.",
};

export default function Home() {
  return (
    <>
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
