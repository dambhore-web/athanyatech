import ServiceCard from "@/components/ui/ServiceCard";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: "🌐",
    title: "Website Creation",
    description:
      "A professional website your customers can find and trust — no tech jargon, just results.",
  },
  {
    icon: "⚙️",
    title: "Web App Automation",
    description:
      "Stop doing repetitive tasks by hand. We build tools that do the work for you, automatically.",
  },
  {
    icon: "📊",
    title: "Data Analysis & Reporting",
    description:
      "Turn your business numbers into simple reports you can actually understand and act on.",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "Smart tools powered by AI that save time and help your team work faster and smarter.",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    description:
      "Apps for iOS and Android that let your customers or staff do more from their phones.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-brand-cream" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>What we do</SectionLabel>
          <h2
            id="services-heading"
            className="font-display font-bold text-brand-dark text-3xl sm:text-4xl"
          >
            Everything your business needs to <br className="hidden sm:block" />
            grow with technology
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
