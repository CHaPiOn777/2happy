"use client";

import {
  ElementType,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  createElement,
  useState,
  useEffect,
} from "react";
import clsx from "clsx";
import { GlobalMedia, GlobalMediaKeys } from "@/shared/styles/globalStyles";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/shared/utils";

import { motion, MotionProps } from "motion/react";

const useMediaCustom = (key: GlobalMediaKeys) =>
  useMediaQuery(GlobalMedia[key]);

type AnimationVariantsByBreakpoint = Partial<
  Record<GlobalMediaKeys | "default", MotionProps>
>;

type AnimatedInViewProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
  animations?: AnimationVariantsByBreakpoint;
  fallbackClassName?: string;
} & Omit<HTMLAttributes<HTMLElement>, "as"> &
  MotionProps;

function useCurrentBreakpoint(): GlobalMediaKeys | "default" {
  const isMobile = useMediaCustom("small");
  const isMd = useMediaCustom("md");
  const isLg = useMediaCustom("lg");
  const isXl = useMediaCustom("xl");

  if (isMobile) return "small";
  if (isMd) return "md";
  if (isLg) return "lg";
  if (isXl) return "xl";
  return "default";
}

const AnimatedInView = forwardRef(
  <T extends ElementType = "div">(
    {
      id,
      as,
      className,
      fallbackClassName,
      children,
      animations,
      initial,
      animate,
      whileInView,
      viewport,
      transition,
      ...rest
    }: AnimatedInViewProps<T>,
    ref: React.Ref<Element>
  ) => {
    const Tag: ElementType = as || "div";

    const currentBreakpoint = useCurrentBreakpoint();

    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    if (!isClient) {
      return createElement(
        Tag,
        {
          className: cn(className, fallbackClassName),
          ...rest,
        },
        children
      );
    }

    const isAnimated = sessionStorage.getItem(id ?? "undefined");

    const variant: MotionProps =
      animations?.[currentBreakpoint] || animations?.default || {};

    const MotionTag = motion.create(Tag);

    return createElement(
      MotionTag,
      {
        ref,
        className: clsx(className),
        initial: !isAnimated ? variant.initial ?? initial : false,
        animate: !isAnimated ? variant.animate ?? animate : false,
        whileInView: !isAnimated ? variant.whileInView ?? whileInView : false,
        viewport: variant.viewport ?? viewport,
        transition: variant.transition ?? transition,
        // onAnimationComplete: () =>
        //   sessionStorage.setItem(id ?? "undefined", "completed"),
        ...rest,
      },
      children
    );
  }
);

AnimatedInView.displayName = "AnimatedInView";

export default AnimatedInView;
