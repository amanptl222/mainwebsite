"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

const metrics = [
  { value: "10+", label: "AI Projects" },
  { value: "5+", label: "SaaS Platforms" },
  { value: "Enterprise", label: "Architecture Experience" },
  { value: "Global", label: "Serving Clients Worldwide" },
];

export function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trust"
      className="relative bg-gradient-to-b from-navy to-navy-dark py-24 sm:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(37,99,235,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="trust-heading"
          title="Trusted Engineering for AI-Driven Products"
          subtitle="Years of engineering experience building production AI systems, SaaS platforms, and enterprise architecture for clients worldwide."
          light
          className="text-center max-w-3xl mx-auto"
        />
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.2 },
            },
          }}
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={itemReveal}
              className="rounded-2xl border border-gray-border/60 bg-navy-light/30 backdrop-blur-sm px-6 py-8 text-center transition-all duration-300 hover:border-accent-blue/40 hover:bg-navy-light/50"
            >
              <div className="text-3xl font-bold text-white sm:text-4xl">{m.value}</div>
              <div className="mt-1 text-sm font-medium text-gray-soft">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
