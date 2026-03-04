"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

const reasons = [
  {
    title: "Strategic Thinking",
    description:
      "We align technology with business outcomes. Every recommendation is grounded in your goals and market context.",
  },
  {
    title: "Enterprise-Grade Systems",
    description:
      "Built for reliability, security, and scale. Our solutions meet the demands of regulated and high-growth environments.",
  },
  {
    title: "Secure Architecture",
    description:
      "Security by design—from data handling and access control to compliance-ready implementations.",
  },
  {
    title: "Transparent Collaboration",
    description:
      "Clear communication, defined milestones, and no surprises. You stay informed at every stage.",
  },
];

export function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="why-us"
      className="bg-white py-24 sm:py-32"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="why-us-heading"
          title="Why Choose Us"
          subtitle="We combine technical depth with a partnership mindset. Here's what sets us apart."
        />
        <motion.ul
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {reasons.map((item) => (
            <motion.li
              key={item.title}
              variants={itemReveal}
              className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-card-hover"
            >
              <h3 className="text-lg font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-muted">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
