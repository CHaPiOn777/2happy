import { RefObject, useCallback, useEffect, useRef } from "react";

const useObserver = <T extends Element>(
  ref: RefObject<T | null>,
  onObserve?: (entry: IntersectionObserverEntry) => void,
  onLeave?: (entry: IntersectionObserverEntry) => void
) => {
  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onObserve?.(entry);
      } else {
        onLeave?.(entry);
      }
    });

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [ref, onObserve, onLeave]);
};

export const useIntersection = (onIntersect: () => void) => {
  const unsubscribe = useRef(() => {});
  return useCallback((el: HTMLDivElement | null) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          onIntersect();
        }
      });
    });

    if (el) {
      observer.observe(el);
      unsubscribe.current = () => observer.disconnect();
    } else {
      unsubscribe.current();
    }
  }, []);
};

export default useObserver;
