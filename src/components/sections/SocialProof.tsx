import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "We used to spend almost 2 hours every morning just sending out commodity price updates and farming tips to our farmer network on WhatsApp. It was manual, repetitive, and took up valuable time we needed elsewhere. Athanya built us a tool that does the same work in minutes. Our team now focuses on the business, not the phone.",
    name: "Praveen Shelke",
    business: "Director, Deccan Farms Agro Samruddhi Pvt. Ltd",
  },
];

const clients = [
  {
    src: "/deccanfarms-logo.svg",
    alt: "Deccan Farms Agro Samruddhi Pvt. Ltd",
  },
];

const industries = ["Agriculture", "Hospitality", "Retail", "Logistics", "Manufacturing", "Healthcare clinics"];

export default function SocialProof() {
  return (
    <section className="py-20 bg-brand-paper" aria-labelledby="proof-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Client stories</SectionLabel>
          <h2
            id="proof-heading"
            className="font-display font-bold text-brand-navy text-3xl sm:text-4xl"
          >
            Businesses that trust Athanya
          </h2>
        </div>

        {/* Testimonials */}
        <div className="max-w-2xl mb-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Client logos strip */}
        <div className="mb-12">
          <p className="eyebrow mb-6">Clients we&apos;ve worked with</p>
          <div className="flex flex-wrap items-center gap-10">
            {clients.map((client) => (
              <div
                key={client.alt}
                className="h-14 flex items-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <p className="eyebrow mb-4">Industries we serve</p>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="bg-brand-blue/10 text-brand-blue font-body text-sm font-bold px-4 py-2 rounded-full"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
