"use client";

import Link from "next/link";
import { company } from "@/config/company";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-navy pt-24 pb-16 sm:pt-28 sm:pb-24"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            {company.tagline}
          </h1>
          <p className="mt-6 text-lg text-gray-soft sm:text-xl animate-fade-in-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
            We design and deploy AI-powered systems that scale—from custom
            machine learning models to intelligent workflow automation and
            enterprise-grade software. Partner with us for strategic
            implementation and long-term engineering excellence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <Link
              href="#contact"
              className="inline-flex rounded-lg bg-accent-blue px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-accent-blue-light hover:shadow focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy"
            >
              Book a Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex rounded-lg border border-gray-border bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:border-accent-blue hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
