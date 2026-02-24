import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { company } from "@/config/company";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "AI consulting",
    "machine learning",
    "artificial intelligence",
    "digital transformation",
    "enterprise AI",
    "automation",
  ],
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#hero"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:w-auto focus:h-auto focus:min-w-0 focus:min-h-0 focus:overflow-visible focus:[clip:auto] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent-blue focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
