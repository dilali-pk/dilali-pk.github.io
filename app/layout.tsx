// Root layout for dilali-pk.github.io. Author: Dilshad Ali.
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import { site, contact } from "@/content/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const SITE_URL = "https://dilali-pk.github.io";
const TITLE = "Dilshad Ali | NetSuite Solution Architect and Technical Consultant";
const DESCRIPTION =
  "NetSuite administration, SuiteScript, integrations, SuiteCommerce and finance automation, handled end to end by one senior consultant.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Dilshad Ali, NetSuite Consultant" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dilshad Ali",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dilshad Ali, NetSuite Solution Architect" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.png"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfe" },
    { media: "(prefers-color-scheme: dark)", color: "#070d18" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": SITE_URL + "/#person",
      name: "Dilshad Ali",
      jobTitle: site.title,
      url: SITE_URL,
      image: SITE_URL + "/dilshad-ali.png",
      email: "mailto:" + contact.email,
      sameAs: [site.links.linkedin, site.links.github, site.links.upwork, contact.fiverr],
      knowsAbout: ["NetSuite", "SuiteScript", "SuiteQL", "SuiteCommerce Advanced", "ERP integrations", "Finance automation"],
    },
    {
      "@type": "ProfessionalService",
      "@id": SITE_URL + "/#service",
      name: "Dilshad Ali, NetSuite consulting and development",
      url: SITE_URL,
      description: DESCRIPTION,
      founder: { "@id": SITE_URL + "/#person" },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NetSuite services",
        itemListElement: site.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.short } })),
      },
    },
  ],
};

const THEME_SCRIPT =
  "try{var t=localStorage.getItem('da-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}";

const FOOT = [
  ["/services/", "Services"],
  ["/capabilities/", "Capabilities"],
  ["/work/", "Work"],
  ["/agencies/", "Agencies"],
  ["/skills/", "Skills"],
  ["/insights/", "Insights"],
  ["/about/", "About"],
  ["/contact/", "Contact"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <footer className="wrap foot">
          <div>
            <div style={{ fontWeight: 600, color: "var(--ink)" }}>Dilshad Ali</div>
            <div style={{ maxWidth: "46ch", marginTop: 6 }}>From a one-line fix to a full implementation, I handle it end to end.</div>
          </div>
          <nav aria-label="Footer">
            {FOOT.map(([href, label]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <a href={site.links.linkedin}>LinkedIn</a>
            <a href={site.links.github}>GitHub</a>
            <a href={site.links.upwork}>Upwork</a>
            <a href={contact.fiverr}>Fiverr</a>
          </nav>
          <div style={{ width: "100%" }}>Copyright 2026 Dilshad Ali</div>
        </footer>
      </body>
    </html>
  );
}
