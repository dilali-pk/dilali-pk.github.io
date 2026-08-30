import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dilali-pk.github.io"),
  title: "Dilshad Ali — NetSuite Developer",
  description: "Portfolio of Dilshad Ali, a NetSuite developer specializing in SuiteScript, automation, reporting and ERP integrations.",
  openGraph: {
    title: "Dilshad Ali — NetSuite Developer",
    description: "Reliable NetSuite customization, automation, reporting and ERP integrations.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dilshad Ali — NetSuite Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilshad Ali — NetSuite Developer",
    description: "Reliable NetSuite customization, automation, reporting and ERP integrations.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
