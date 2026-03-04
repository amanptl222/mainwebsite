"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/config/company";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-navy pt-24 pb-20 sm:pt-28 sm:pb-28 overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.25),transparent_50%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[3.5rem] leading-[1.1]"
          >
            {company.tagline}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-lg text-gray-soft sm:text-xl max-w-2xl leading-relaxed"
          >
            We design and deploy AI-powered systems that scale—from custom
            machine learning models to intelligent workflow automation and
            enterprise-grade software. Partner with us for strategic
            implementation and long-term engineering excellence.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center rounded-xl bg-accent-blue px-6 py-3.5 text-base font-medium text-white shadow-lg shadow-accent-blue/25 transition-all duration-300 hover:bg-accent-blue-light hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy"
            >
              Book a Consultation
              <span className="ml-2 transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </Link>
            <Link
              href="#services"
              className="inline-flex rounded-xl border border-gray-border bg-white/5 px-6 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-accent-blue/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
