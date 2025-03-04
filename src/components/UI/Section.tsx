"use client";
import { cn } from "@/lib/utils";
import React from "react";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "relative flex w-screen min-h-[700px] justify-center",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
