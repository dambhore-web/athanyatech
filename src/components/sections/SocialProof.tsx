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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

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
