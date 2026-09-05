import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "Athanya built our ordering system in 3 weeks. Our staff no longer waste time on manual entries and we can see our sales data every morning.",
    name: "Ravi Sharma",
    business: "Restaurant chain owner, Pune",
  },
  {
    quote:
      "I had no idea what a website even needed. They walked me through everything and delivered exactly what I asked for — on time and on budget.",
    name: "Meena Iyer",
    business: "Retail shop owner, Bangalore",
  },
];

const industries = [
  "Hospitality",
  "Retail",
  "Logistics",
  "Manufacturing",
  "Healthcare clinics",
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-brand-cream" aria-labelledby="proof-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Client stories</SectionLabel>
          <h2
            id="proof-heading"
            className="font-display font-bold text-brand-dark text-3xl sm:text-4xl"
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
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-brand-slate mb-4">
            Industries we serve
          </p>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="bg-brand-surface text-brand-indigo font-display text-sm font-semibold px-4 py-2 rounded-full"
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
