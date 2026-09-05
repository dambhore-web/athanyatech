import Button from "@/components/ui/Button";

type CtaBannerProps = {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function CtaBanner({ heading, ctaLabel, ctaHref }: CtaBannerProps) {
  return (
    <section className="gradient-cyan-navy py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-8 max-w-2xl mx-auto" style={{ color: "white" }}>
          {heading}
        </h2>
        <Button href={ctaHref} size="lg" className="!bg-white !text-brand-navy hover:!bg-brand-paper">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
