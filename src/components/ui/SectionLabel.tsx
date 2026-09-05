type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className={`font-display text-xs font-semibold uppercase tracking-[0.12em] mb-3 inline-block border-b-2 border-brand-gold pb-0.5 ${
        light ? "text-brand-gold" : "text-brand-slate"
      }`}
    >
      {children}
    </p>
  );
}
