import Button from "@/components/ui/Button";

type HeroProps = {
  headline: string;
  subline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({ headline, subline, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 gradient-navy"
      aria-labelledby="hero-heading"
    >
      {/* Geometric SVG texture */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#12B8D9" strokeWidth="0.8" />
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#12B8D9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" opacity="0.5" />
        </svg>
      </div>

      {/* Cyan glow accent */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #12B8D9, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="eyebrow !text-brand-cyan mb-4 animate-fade-up">
            Athanya Technologies
          </p>
          <h1
            id="hero-heading"
            className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up-delay-1"
            style={{ color: "white" }}
          >
            {headline}
          </h1>
          <p className="text-blue-200 font-body text-lg sm:text-xl leading-relaxed mb-10 animate-fade-up-delay-2">
            {subline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg"
                className="!text-white !border-white/30 hover:!bg-white/10">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
