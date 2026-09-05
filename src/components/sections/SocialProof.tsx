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

const industries = ["Hospitality", "Retail", "Logistics", "Manufacturing", "Healthcare clinics"];

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
