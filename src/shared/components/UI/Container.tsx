"use client";

import { cn } from "@/shared/utils/cn";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `relative w-full flex max-w-[1280px] mx-auto px-4 md:px-6`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
