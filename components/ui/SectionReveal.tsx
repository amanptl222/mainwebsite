"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.05,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export const itemReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const defaultEase = [0.25, 0.46, 0.45, 0.94];
