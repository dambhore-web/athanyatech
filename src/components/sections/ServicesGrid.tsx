import { Brain, Smartphone, Workflow, BarChart3, Globe } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Smart AI tools that automate decisions, extract insights, and handle tasks that used to require a person.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "iOS and Android apps that let your customers or field staff do more from their phones.",
  },
  {
    icon: Workflow,
    title: "Web App Automation",
    description:
      "Stop doing repetitive tasks by hand. We build tools that run your workflows automatically.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    description:
      "Turn your business numbers into clear reports you can actually understand and act on.",
  },
  {
    icon: Globe,
    title: "Website Creation",
    description:
      "A professional website your customers can find and trust — no tech jargon, just results.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-brand-paper" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>What we do</SectionLabel>
          <h2
            id="services-heading"
            className="font-display font-bold text-brand-navy text-3xl sm:text-4xl"
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
