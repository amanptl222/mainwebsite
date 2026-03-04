"use client";

import Link from "next/link";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

const models = [
  {
    title: "Project Based Development",
    description:
      "Fixed scope and timeline. Ideal for MVPs, integrations, or well-defined features. We deliver in sprints with clear milestones.",
  },
  {
    title: "Dedicated Developer",
    description:
      "A senior engineer embedded on your team. Flexible capacity for ongoing product development, refactors, or scaling.",
  },
  {
    title: "AI Consulting",
    description:
      "Strategy, readiness assessment, and proof-of-concept. We help you identify use cases and build a roadmap for AI adoption.",
  },
];

export function EngagementModels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="engagement"
      className="bg-white py-24 sm:py-32"
      aria-labelledby="engagement-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="engagement-heading"
          title="How We Work"
          subtitle="Choose the engagement model that fits your stage and goals."
        />
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {models.map((model) => (
            <motion.div
              key={model.title}
              variants={itemReveal}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-gray-50/50 p-8 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-card-hover"
            >
              <h3 className="text-xl font-semibold text-navy">{model.title}</h3>
              <p className="mt-4 flex-1 text-gray-muted">{model.description}</p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center text-sm font-medium text-accent-blue transition-colors hover:text-accent-blue-dark focus:outline-none focus:ring-2 focus:ring-accent-blue"
              >
                Discuss your project
                <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
