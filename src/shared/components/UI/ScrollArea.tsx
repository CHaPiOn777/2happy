"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/shared/utils/cn";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  const isMedium = useMediaCustom("md");

  const viewportRef = React.useRef<HTMLDivElement>(null);

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      type={isMedium ? "always" : "auto"}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        className="h-full w-full rounded-[inherit] pb-[1px]"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="vertical" viewportRef={viewportRef} />
      <ScrollBar orientation="horizontal" viewportRef={viewportRef} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > {
  viewportRef?: React.RefObject<HTMLElement | null>;
  initialProgress?: number;
  minTriggerPercent?: number;
}

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(
  (
    {
      className,
      orientation = "vertical",
      viewportRef,
      initialProgress,
      minTriggerPercent,
      ...props
    },
    ref
  ) => {
    const isMedium = useMediaCustom("md");
    const variant =
      isMedium && orientation === "horizontal" ? "progress" : "default";

    const [progress, setProgress] = React.useState(initialProgress ?? 0);
    const hasTriggeredRef = React.useRef(false);

    React.useEffect(() => {
      if (variant !== "progress" || !viewportRef?.current) return;

      const viewport = viewportRef.current;
      const minTrigger = minTriggerPercent ?? 0;

      const handleScroll = () => {
        const scrollSize =
          orientation === "vertical"
            ? viewport.scrollHeight - viewport.clientHeight
            : viewport.scrollWidth - viewport.clientWidth;

        const scrollPos =
          orientation === "vertical" ? viewport.scrollTop : viewport.scrollLeft;

        const value = scrollSize > 0 ? (scrollPos / scrollSize) * 100 : 0;

        if (!hasTriggeredRef.current && value < minTrigger) return;
        if (!hasTriggeredRef.current) hasTriggeredRef.current = true;

        setProgress(value);
      };

      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }, [variant, viewportRef, orientation, minTriggerPercent]);

    const progressStyle =
      orientation === "vertical"
        ? { height: `${progress}%`, width: "100%" }
        : { width: `${progress}%`, height: "100%" };

    return (
      <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
          "flex touch-none select-none transition-colors",
          orientation === "vertical"
            ? "h-full w-2.5 border-l border-l-transparent p-[2px]"
            : "h-2.5 flex-col border-t border-t-transparent p-[2px]",
          className
        )}
        {...props}
      >
        {variant === "progress" ? (
          <div
            className={cn(
              "absolute z-10 pointer-events-none bg-gray-light",
              orientation === "vertical"
                ? "right-0 top-0 w-1.5 h-full"
                : "bottom-0 left-0 h-[2px] w-full"
            )}
          >
            <div
              style={progressStyle}
              className="bg-main transition-all duration-200"
            />
          </div>
        ) : (
          <ScrollAreaPrimitive.ScrollAreaThumb
            className={cn(
              "relative flex-1 rounded-[9999px] bg-gray",
              progress && "opacity-0"
            )}
          />
        )}
      </ScrollAreaPrimitive.ScrollAreaScrollbar>
    );
  }
);
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
