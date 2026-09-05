import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variantClasses = {
  primary:   "bg-brand-blue text-white font-bold hover:bg-brand-navy transition-colors",
  secondary: "bg-transparent text-brand-navy border border-brand-line-strong font-bold hover:bg-brand-sunken transition-colors",
  ghost:     "bg-transparent text-brand-blue font-bold hover:text-brand-navy transition-colors px-0",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base = `font-body rounded inline-block ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={base}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
