import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Athanya Technologies is a small, dedicated team helping small and medium businesses get the technology they need — without the confusion.",
};

const approachSteps = [
  { number: "1", title: "Listen", description: "We start by understanding your business, your challenges, and what success looks like for you." },
  { number: "2", title: "Plan", description: "We put together a clear plan and quote. You review it and only proceed when you're comfortable." },
  { number: "3", title: "Build", description: "We build with regular check-ins. You'll always know what's happening and can give feedback." },
  { number: "4", title: "Support", description: "We hand over, train you to use it, and remain available for help and future improvements." },
];

const values = [
  {
    title: "Honesty over everything",
    body: "We tell you what's achievable and what isn't. If a simpler solution solves your problem, we'll recommend it even if it costs less. Your trust matters more than a bigger invoice.",
  },
  {
    title: "Clarity at every step",
    body: "Technology is complex. Explaining it doesn't have to be. We commit to keeping you informed and in control at every stage — no black boxes, no guesswork.",
  },
  {
    title: "Long-term thinking",
    body: "We build things that last and are easy to maintain. We don't cut corners. Your success six months after delivery matters as much as launch day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-navy pt-32 pb-16" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel light>About us</SectionLabel>
            <h1
              id="about-heading"
              className="font-display font-bold text-white text-4xl sm:text-5xl mt-2 mb-6"
            >
              Technology that works for your business — not the other way around.
            </h1>
          </div>
          <div>
            <p className="text-blue-200 font-body leading-relaxed text-lg mb-4">
              Athanya Technologies was founded with one belief: small and medium businesses deserve
              the same quality of technology that large companies take for granted — without needing
              an IT department to make sense of it.
            </p>
            <p className="text-blue-200 font-body leading-relaxed text-lg">
              We&apos;re a small team of builders who care deeply about doing good work and being
              honest partners to the businesses we work with. When you work with us, you&apos;re not
              a ticket in a queue — you&apos;re a business we&apos;re invested in helping grow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-paper" aria-labelledby="approach-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>How we work</SectionLabel>
            <h2 id="approach-heading" className="font-display font-bold text-brand-navy text-3xl sm:text-4xl">
              Our approach, from first call to final handover
            </h2>
          </div>
          <ProcessTimeline steps={approachSteps} />
        </div>
      </section>

      <section className="py-20 bg-brand-sunken" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>What we stand for</SectionLabel>
            <h2 id="values-heading" className="font-display font-bold text-brand-navy text-3xl sm:text-4xl">
              The principles we build everything on
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-brand-surface rounded-card border border-brand-line p-6 shadow-brand">
                <div className="w-10 h-1 gradient-cyan-navy mb-5 rounded" />
                <h3 className="font-display font-bold text-brand-navy text-xl mb-3">{value.title}</h3>
                <p className="text-brand-ink-soft font-body leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-paper" aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <SectionLabel>The team</SectionLabel>
            <h2 id="team-heading" className="font-display font-bold text-brand-navy text-3xl sm:text-4xl">
              The people behind your project
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Founder / Lead Developer", role: "Strategy & Full-Stack Development" },
              { name: "Designer", role: "UI/UX & Brand Design" },
              { name: "Solutions Analyst", role: "Data & Automation" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-brand-sunken border border-brand-line mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-brand-slate">👤</span>
                </div>
                <p className="font-display font-bold text-brand-navy">{member.name}</p>
                <p className="text-brand-ink-soft text-sm font-body">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Want to know more about how we work?"
        ctaLabel="Let's have a conversation"
        ctaHref="/contact"
      />
    </>
  );
}
