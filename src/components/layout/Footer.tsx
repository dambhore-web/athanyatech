import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Athanya_Symbol_Mono.svg"
                alt="Athanya Technologies"
                width={36}
                height={32}
                className="text-white brightness-0 invert"
              />
              <div>
                <p className="font-display font-bold text-white text-base tracking-widest leading-none">ATHANYA</p>
                <p className="font-body text-blue-300 text-[10px] tracking-[3px] uppercase mt-0.5">Technologies</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              IT solutions for growing businesses — explained in plain English, built to last.
            </p>
          </div>

          <div>
            <p className="eyebrow text-blue-300 mb-4">Pages</p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-brand-cyan transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-blue-300 mb-4">Get in touch</p>
            <a
              href="tel:+918530333588"
              className="text-blue-200 hover:text-brand-cyan transition-colors text-sm font-body block mb-1"
            >
              +91 85303 33588
            </a>
            <a
              href="mailto:hello@athanyatechnologies.com"
              className="text-blue-200 hover:text-brand-cyan transition-colors text-sm font-body block"
            >
              hello@athanyatechnologies.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-blue-300 text-xs font-body">
          &copy; {new Date().getFullYear()} Athanya Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
