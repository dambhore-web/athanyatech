type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p className={`eyebrow mb-3 block ${light ? "!text-brand-cyan" : ""}`}>
      {children}
    </p>
  );
}
