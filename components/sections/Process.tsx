"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your goals, constraints, and success criteria.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Define architecture, roadmap, and delivery approach.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build with iterative cycles and regular demos.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Quality assurance, security, and performance validation.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Production rollout with monitoring and documentation.",
  },
  {
    number: "06",
    title: "Continuous Optimization",
    description:
      "Iterate based on usage, feedback, and new requirements.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="process"
      className="bg-white py-24 sm:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="process-heading"
          title="Our Process"
          subtitle="A structured, transparent approach from first conversation to ongoing optimization."
        />
        <motion.ol
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
        >
          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={itemReveal}
              className="relative rounded-2xl border border-gray-200 bg-gray-50/50 p-6 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-card-hover"
            >
              <span className="text-3xl font-bold text-accent-blue/25">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
