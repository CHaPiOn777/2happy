"use client";

// import { motion, MotionProps } from "framer-motion";
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
  const isMobile = useMediaCustom("mobile");
  const isMd = useMediaCustom("md");
  const isLg = useMediaCustom("lg");
  const isXl = useMediaCustom("xl");

  if (isMobile) return "mobile";
  if (isMd) return "md";
  if (isLg) return "lg";
  if (isXl) return "xl";
  return "default";
}

const AnimatedInView = forwardRef(
  <T extends ElementType = "div">(
    {
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

    // Отрисовываем только на клиенте, чтобы избежать ошибки гидрации
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    if (!isClient) {
      // Можно вернуть null или базовую версию без motion
      return createElement(
        Tag,
        { className: cn(className, fallbackClassName), ...rest },
        children
      );
    }

    const variant: MotionProps =
      animations?.[currentBreakpoint] || animations?.default || {};

    const MotionTag = motion.create(Tag);

    return createElement(
      MotionTag,
      {
        ref,
        className: clsx(className),
        initial: variant.initial ?? initial,
        animate: variant.animate ?? animate,
        whileInView: variant.whileInView ?? whileInView,
        viewport: variant.viewport ?? viewport,
        transition: variant.transition ?? transition,
        ...rest,
      },
      children
    );
  }
);

AnimatedInView.displayName = "AnimatedInView";

export default AnimatedInView;
