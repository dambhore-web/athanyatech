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
      className="relative min-h-[90vh] flex items-center bg-brand-dark overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* SVG geometric background texture */}
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4A847" strokeWidth="0.5" />
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#D4A847" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" opacity="0.4" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up"
          >
            {headline}
          </h1>
          <p className="text-brand-slate text-lg sm:text-xl leading-relaxed mb-10 animate-fade-up-delay-1">
            {subline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
