"use client";

import { SectionReveal } from "./SectionReveal";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
  id?: string;
};

export function SectionHeading({
  title,
  subtitle,
  className = "",
  light = false,
  id,
}: SectionHeadingProps) {
  const titleClass = light
    ? "text-white"
    : "text-navy";
  const subtitleClass = light
    ? "text-gray-soft"
    : "text-gray-muted";

  return (
    <SectionReveal className={className}>
      <h2
        id={id}
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] ${titleClass}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </SectionReveal>
  );
}
