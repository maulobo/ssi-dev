import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ className = "", children, id }: SectionProps) => (
  <section
    id={id}
    className={`py-section-sm md:py-section relative overflow-hidden ${className}`}
  >
    {children}
  </section>
);
