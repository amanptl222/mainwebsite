"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

const expertise = [
  {
    title: "AI Systems Development",
    description: "Custom models, NLP, computer vision, and intelligent automation.",
    icon: "◇",
  },
  {
    title: "SaaS Platform Architecture",
    description: "Multi-tenant, scalable, and secure product foundations.",
    icon: "◆",
  },
  {
    title: "Real-Time Applications",
    description: "WebSockets, live collaboration, and event-driven systems.",
    icon: "▸",
  },
  {
    title: "Data Engineering Pipelines",
    description: "ETL, warehousing, and real-time analytics.",
    icon: "◈",
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS, containers, orchestration, and DevOps.",
    icon: "⬡",
  },
  {
    title: "High Performance Frontends",
    description: "React, Next.js, and optimized user experiences.",
    icon: "◉",
  },
];

export function DevelopmentExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="expertise"
      className="bg-gray-50 py-24 sm:py-32"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="expertise-heading"
          title="Engineering Expertise"
          subtitle="Deep capabilities across the full stack—from AI and data to cloud and frontend."
        />
        <motion.ul
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
          {expertise.map((item) => (
            <motion.li
              key={item.title}
              variants={itemReveal}
              className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-soft transition-all duration-300 hover:border-accent-blue/30 hover:shadow-card-hover"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue transition-colors group-hover:bg-accent-blue/20">
                {item.icon}
              </span>
              <div>
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-muted">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
