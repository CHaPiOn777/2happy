import { useEffect, useRef, useState } from "react";

export const useScrollDirection = ({
  delayScroll,
}: {
  delayScroll: number;
}) => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const body = document.querySelector("body");

    const handleScroll = () => {
      if (!body) return;
      const currentScrollY = body.scrollTop;

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > delayScroll
      ) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    body?.addEventListener("scroll", handleScroll);

    return () => body?.removeEventListener("scroll", handleScroll);
  }, []);

  return show;
};
