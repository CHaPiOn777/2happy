"use client";

import { paths } from "@/config/paths";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/components/UI/Sheet";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CookieDialog = () => {
  const [isAccepted, setIsAccepted] = useLocalStorage("cookie-policy", false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isMobile = useMediaCustom("small");

  const handleAccept = () => {
    setIsAccepted(true);
    setOpen(false);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    if (!isAccepted) setOpen(true);
    else setOpen(false);
  }, [pathname, isAccepted, isLoaded]);

  if (!isLoaded) return null;

  return (
    <Sheet open={open} modal={false}>
      <SheetContent
        className="bg-cookie-gradient px-4 py-8 border-none z-over-header"
        side="bottom"
        overlayClassName="hidden"
      >
        <SheetHeader className="sr-only">
          <SheetTitle className="sr-only">Cookies</SheetTitle>
          <SheetDescription className="sr-only">
            Политика использования Cookies
          </SheetDescription>
        </SheetHeader>
        <Container className="justify-between px-0 gap-4 items-center">
          <p className="max-w-[500px] w-full text-white">
            Мы используем cookies для корректной работы сайта. Продолжая
            использовать сайт, вы соглашаетесь с их применением.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Button
              variant="tertiary"
              className="text-white md:w-min hover:bg-white hover:text-main"
              size={isMobile ? "small" : "normal"}
              asChild
            >
              <Link href={paths.policy.getHref()}>Подробнее</Link>
            </Button>
            <Button
              variant="secondary"
              className="text-white border-white hover:bg-white hover:text-main"
              size={isMobile ? "small" : "normal"}
              onClick={handleAccept}
            >
              Принять все
            </Button>
          </div>
          <SheetClose
            className="absolute sm:relative -top-4 -right-2 sm:top-auto sm:right-auto [&_svg]:fill-white"
            onClick={() => setOpen(false)}
          />
        </Container>
      </SheetContent>
    </Sheet>
  );
};

export default CookieDialog;
