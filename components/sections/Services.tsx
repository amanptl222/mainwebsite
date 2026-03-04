"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itemReveal } from "@/components/ui/SectionReveal";

const services = [
  {
    title: "AI & Machine Learning Solutions",
    items: [
      "Custom AI model development",
      "Computer vision",
      "NLP systems",
      "Predictive analytics",
      "Recommendation engines",
    ],
  },
  {
    title: "AI Automation & Workflow Optimization",
    items: [
      "Business process automation",
      "AI chatbots",
      "Document automation",
      "Intelligent CRM/ERP workflows",
    ],
  },
  {
    title: "Custom Software Development",
    items: [
      "Web applications",
      "SaaS platforms",
      "Enterprise dashboards",
      "API development",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    items: [
      "Data pipelines",
      "Data warehousing",
      "Real-time analytics",
      "BI dashboards",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Cloud architecture",
      "CI/CD",
      "Infrastructure scaling",
      "Performance optimization",
    ],
  },
  {
    title: "AI Consulting & Strategy",
    items: [
      "AI readiness assessment",
      "Digital transformation strategy",
      "Proof-of-concept development",
    ],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="services"
      className="bg-gray-50 py-24 sm:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="services-heading"
          title="Services"
          subtitle="End-to-end capabilities from strategy and design to development and deployment. We deliver enterprise-grade solutions tailored to your industry and scale."
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
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemReveal}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-blue/30 hover:shadow-card-hover hover:shadow-glow/50"
            >
              <h3 className="text-lg font-semibold text-navy">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
