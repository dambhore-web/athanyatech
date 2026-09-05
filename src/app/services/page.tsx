import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceFieldEntry from "@/components/sections/ServiceFieldEntry";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website creation, web app automation, data analysis, AI solutions, and mobile apps — built for small and medium businesses in plain English.",
};

const services = [
  {
    icon: "🌐",
    name: "Website Creation",
    definition:
      "A professional website is your business's front door on the internet. We design and build websites that look trustworthy, load fast, and help customers find you.",
    triggers: [
      "You don't have a website yet, or your current one looks outdated",
      "Customers are having trouble finding you online",
      "You want to accept bookings, inquiries, or orders through your site",
    ],
    outcome: "A live, professional website within 2–4 weeks, fully owned by you.",
  },
  {
    icon: "⚙️",
    name: "Web App Automation",
    definition:
      "Automation means getting software to do repetitive tasks instead of your team doing them by hand. We build web applications that handle your workflows automatically.",
    triggers: [
      "Your team spends hours copying data between spreadsheets or systems",
      "You're managing orders, inventory, or requests through WhatsApp or email manually",
      "A process happens the same way every time and could easily be automated",
    ],
    outcome: "Hours saved every week — work that used to take half a day runs automatically.",
  },
  {
    icon: "📊",
    name: "Data Analysis & Reporting",
    definition:
      "Your business generates data every day — sales, customers, stock, staff. We turn that raw data into simple, clear reports so you can make better decisions.",
    triggers: [
      "You don't have a clear picture of how your business is actually performing",
      "You're making decisions based on gut feeling rather than real numbers",
      "Reports take too long to produce and are out of date before you read them",
    ],
    outcome: "A live dashboard or regular report you can check in minutes, not hours.",
  },
  {
    icon: "🤖",
    name: "AI Solutions",
    definition:
      "AI (Artificial Intelligence) tools can read documents, answer questions, sort data, and handle tasks that used to require a person. We build practical AI tools for real business problems.",
    triggers: [
      "You receive lots of emails, forms, or documents and sorting them is slow",
      "You want to offer customers instant answers without hiring more staff",
      "You have large amounts of data you'd like to search or summarise quickly",
    ],
    outcome: "A working AI tool that saves measurable time on a specific, real task.",
  },
  {
    icon: "📱",
    name: "Mobile Applications",
    definition:
      "A mobile app lets your customers or staff do things from their phone — place orders, check status, raise requests, or access information on the go.",
    triggers: [
      "Your customers or field staff need to do things while away from a computer",
      "You want a branded app your customers can download and use regularly",
      "You need to manage deliveries, field teams, or remote work from a central app",
    ],
    outcome: "A working mobile app on iOS and/or Android, tested and ready to publish.",
  },
];

const deliverySteps = [
  {
    number: "1",
    title: "Discover",
    description:
      "We listen to your business needs, ask the right questions, and agree on exactly what we'll build.",
  },
  {
    number: "2",
    title: "Build",
    description:
      "We design and build your solution, keeping you updated at every stage in plain language.",
  },
  {
    number: "3",
    title: "Hand Over",
    description:
      "We deliver the finished product, train your team to use it, and make sure everything works perfectly.",
  },
  {
    number: "4",
    title: "Support",
    description:
      "We're available after delivery for questions, fixes, and future improvements.",
  },
];

const faqs = [
  {
    question: "Do I need to understand the technical stuff?",
    answer:
      "Not at all. Our job is to handle the technical side so you don't have to. We'll explain what we're doing in plain English at every step — no jargon, no confusion.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the scope. A simple website takes 2–4 weeks. A web application or data reporting project typically takes 4–8 weeks. We'll give you a realistic timeline before we start — and stick to it.",
  },
  {
    question: "What if something breaks after you finish?",
    answer:
      "We offer support after every project. If something breaks due to our work, we fix it at no extra charge. We're not the type to disappear after delivery.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every project is priced individually based on what you need. We give you a fixed price upfront — no hourly billing, no surprise invoices. Contact us and we'll give you a free quote.",
  },
  {
    question: "Will I actually own what you build?",
    answer:
      "Yes, completely. Once the project is paid for, everything — the code, the designs, the domain, the data — belongs to you. No ongoing fees to keep what you paid for.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-dark pt-32 pb-16" aria-labelledby="services-page-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel light>Our services</SectionLabel>
          <h1
            id="services-page-heading"
            className="font-display font-bold text-white text-4xl sm:text-5xl mt-2 max-w-2xl"
          >
            We handle the technology. You run your business.
          </h1>
        </div>
      </section>

      {/* Service Field Guide */}
      <section className="py-16 bg-brand-cream" aria-label="Service details">
        <div className="max-w-6xl mx-auto px-6">
          {services.map((service) => (
            <ServiceFieldEntry key={service.name} {...service} />
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-brand-surface" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>How we work</SectionLabel>
            <h2
              id="how-heading"
              className="font-display font-bold text-brand-dark text-3xl sm:text-4xl"
            >
              A simple, clear process from start to finish
            </h2>
          </div>
          <ProcessTimeline steps={deliverySteps} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-cream" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <SectionLabel>Common questions</SectionLabel>
            <h2
              id="faq-heading"
              className="font-display font-bold text-brand-dark text-3xl sm:text-4xl"
            >
              Questions we get asked a lot
            </h2>
          </div>
          <div className="max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Not sure which service you need? Let's talk it through."
        ctaLabel="Get a free consultation"
        ctaHref="/contact"
      />
    </>
  );
}
