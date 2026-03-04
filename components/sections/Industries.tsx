"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

const industries = [
  {
    name: "Fintech",
    description:
      "Compliance, risk, and intelligent automation for financial services.",
  },
  {
    name: "Healthcare",
    description:
      "Clinical workflows, diagnostics support, and secure health data systems.",
  },
  {
    name: "SaaS",
    description:
      "Scalable platforms, analytics, and AI-powered product features.",
  },
  {
    name: "E-commerce",
    description:
      "Recommendations, demand forecasting, and customer experience automation.",
  },
  {
    name: "Logistics",
    description:
      "Routing, inventory, and supply chain optimization.",
  },
  {
    name: "EdTech",
    description:
      "Personalized learning, assessment, and content delivery at scale.",
  },
];

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="industries"
      className="relative bg-navy py-24 sm:py-32 overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="industries-heading"
          title="Industries We Serve"
          subtitle="We bring domain-aware AI and software expertise to regulated and high-stakes verticals."
          light
        />
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={itemReveal}
              className="rounded-2xl border border-gray-border bg-navy-light/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-accent-blue/50 hover:bg-navy-light/60"
            >
              <h3 className="text-lg font-semibold text-white">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-soft">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
