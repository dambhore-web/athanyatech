import Button from "@/components/ui/Button";

type CtaBannerProps = {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function CtaBanner({ heading, ctaLabel, ctaHref }: CtaBannerProps) {
  return (
    <section className="bg-brand-indigo py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-8 max-w-2xl mx-auto">
          {heading}
        </h2>
        <Button href={ctaHref} size="lg">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
