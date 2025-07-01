"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/shared/utils/cn";
import Container from "./Container";

const PageTabs = TabsPrimitive.Root;

const PageTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <div className="w-full bg-light-disabled border-b border-gray-middle h-12 sm:h-16">
    <Container className="h-full">
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          "flex w-full h-full items-center justify-center text-gray-middle",
          className
        )}
        {...props}
      />
    </Container>
  </div>
));
PageTabsList.displayName = TabsPrimitive.List.displayName;

export type PageTabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
>;

const PageTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  PageTabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center flex-1 justify-center px-3 min-w-[184px] whitespace-nowrap h-full text-body1 text-gray-middle odd:border-r odd:border-l border-gray-middle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-gray-dark data-[state=active]:bg-gray-light data-[state=active]:text-main",
      className
    )}
    {...props}
  />
));
PageTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const PageTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Content>
));
PageTabsContent.displayName = TabsPrimitive.Content.displayName;

export { PageTabs, PageTabsList, PageTabsTrigger, PageTabsContent };
