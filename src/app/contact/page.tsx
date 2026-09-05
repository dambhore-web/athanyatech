import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free consultation with Athanya Technologies. Tell us about your business challenge and we'll get back to you within 24 hours.",
};

const nextSteps = [
  {
    number: "1",
    title: "We read your message the same day",
    description: "Every inquiry gets a real person reading it — not an automated response.",
  },
  {
    number: "2",
    title: "We call or email within 24 hours",
    description: "We'll reach out to understand your needs and answer any questions you have.",
  },
  {
    number: "3",
    title: "You get a free, no-obligation quote",
    description: "A clear breakdown of what we'll build and what it costs. No pressure, no hidden fees.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="gradient-navy pt-32 pb-16" aria-labelledby="contact-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel light>Get in touch</SectionLabel>
          <h1
            id="contact-heading"
            className="font-display font-bold text-white text-4xl sm:text-5xl mt-2 max-w-xl"
          >
            Let&apos;s talk about your business.
          </h1>
        </div>
      </section>

      <section className="py-16 bg-brand-paper">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionLabel>Send us a message</SectionLabel>
            <h2 className="font-display font-bold text-brand-navy text-2xl mb-8">
              Tell us what you&apos;re working on
            </h2>
            <ContactForm />
          </div>

          <div>
            <div className="mb-10">
              <SectionLabel>What happens next</SectionLabel>
              <ul className="space-y-6 mt-4">
                {nextSteps.map((step) => (
                  <li key={step.number} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full gradient-cyan-navy flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-display font-bold text-white text-sm">{step.number}</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-brand-navy mb-1">{step.title}</p>
                      <p className="text-brand-ink-soft font-body text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-sunken rounded-card border border-brand-line p-6">
              <p className="eyebrow mb-4">Prefer to reach out directly?</p>
              <a
                href="mailto:hello@athanyatechnologies.com"
                className="text-brand-blue font-body font-bold hover:text-brand-navy transition-colors block mb-2"
              >
                hello@athanyatechnologies.com
              </a>
              <p className="text-brand-ink-soft font-body text-sm">
                We read every email and respond the same business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
