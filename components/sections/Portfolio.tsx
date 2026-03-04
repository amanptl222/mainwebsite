"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard, type Project } from "@/components/ui/ProjectCard";
import { itemReveal } from "@/components/ui/SectionReveal";

const projects: Project[] = [
  {
    id: "1",
    title: "AI Video Generator Platform",
    description: "End-to-end platform for AI-generated video content with templates and export pipelines.",
    tags: ["AI", "Next.js", "Python", "AWS"],
  },
  {
    id: "2",
    title: "AI Resume Analyzer",
    description: "NLP-powered resume parsing and candidate matching for HR workflows.",
    tags: ["NLP", "React", "Node.js"],
  },
  {
    id: "3",
    title: "AI Document Processing",
    description: "Intelligent document extraction and classification for enterprise compliance.",
    tags: ["Computer Vision", "Python", "PostgreSQL"],
  },
  {
    id: "4",
    title: "AI Customer Support Automation",
    description: "Chatbots and ticket routing powered by LLMs and custom knowledge bases.",
    tags: ["LLM", "LangChain", "SaaS"],
  },
  {
    id: "5",
    title: "Real-Time Collaboration Editor",
    description: "Multi-user editing with presence, conflict resolution, and real-time sync.",
    tags: ["WebSockets", "React", "Node.js"],
  },
  {
    id: "6",
    title: "Supply Chain Analytics Dashboard",
    description: "Real-time inventory, demand forecasting, and logistics visibility.",
    tags: ["Data", "React", "Python", "BI"],
  },
  {
    id: "7",
    title: "Marketplace Platform",
    description: "Multi-vendor marketplace with payments, search, and recommendation engine.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "8",
    title: "Browser Video Editor",
    description: "In-browser video editing with timeline, effects, and export.",
    tags: ["WebAssembly", "React", "FFmpeg"],
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="portfolio"
      className="bg-gray-50 py-24 sm:py-32"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          id="portfolio-heading"
          title="Projects"
          subtitle="Selected work across AI, SaaS, and enterprise systems."
        />
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemReveal}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
