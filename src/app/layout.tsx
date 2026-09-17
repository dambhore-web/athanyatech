import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.athanyatechnologies.com"),
  title: {
    default: "Athanya Technologies — IT Solutions for Small Businesses in Pune",
    template: "%s | Athanya Technologies",
  },
  description:
    "Athanya Technologies builds AI tools, mobile apps, web automation, and data dashboards for small and medium businesses in Pune, Maharashtra. Plain English. Fixed prices. Real results.",
  keywords: [
    "IT solutions Pune",
    "software development Pune",
    "AI solutions small business India",
    "mobile app development Pune",
    "web automation Pune",
    "data analysis SMB India",
    "website development Pune Maharashtra",
  ],
  authors: [{ name: "Athanya Technologies", url: "https://www.athanyatechnologies.com" }],
  creator: "Athanya Technologies",
  openGraph: {
    type: "website",
    siteName: "Athanya Technologies",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Athanya Technologies — IT Solutions for Growing Businesses" }],
  },
  twitter: { card: "summary_large_image", site: "@athanyatech", creator: "@athanyatech" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: {},
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Athanya Technologies",
  url: "https://www.athanyatechnologies.com",
  logo: "https://www.athanyatechnologies.com/Athanya_Logo_Horizontal.svg",
  description:
    "IT solutions for small and medium businesses in Pune — AI tools, mobile apps, web automation, data analysis, and website creation.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-85303-33588",
    contactType: "customer service",
    email: "hello@athanyatechnologies.com",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
  areaServed: {
    "@type": "State",
    name: "Maharashtra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
