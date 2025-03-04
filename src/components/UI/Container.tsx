"use client";

import useIsTablet from "@/hooks/useIsTablet";
import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  column = false,
  className,
}: {
  children: React.ReactNode;
  column?: boolean;
  className?: string;
}) => {
  const isTablet = useIsTablet();
  return (
    <div
      className={cn(
        `w-full flex ${column ? "flex-col" : "flex-row"} ${
          isTablet ? "max-w-[100%]" : "max-w-[1224px]"
        } mx-auto px-2`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
