import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`container mx-auto px-4 md:px-12 ${className}`}>
    {children}
  </div>
);
