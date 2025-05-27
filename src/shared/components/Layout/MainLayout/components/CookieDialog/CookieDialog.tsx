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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CookieDialog = () => {
  const [isAccepted, setIsAccepted] = useLocalStorage("cookie-policy", false);
  const [isLoaded, setIsLoaded] = useState(false); // ⬅️ добавляем
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleAccept = () => {
    setIsAccepted(true);
    setOpen(false);
  };

  // Ожидаем, пока useLocalStorage подгрузит значение
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Открываем баннер при смене роута, только когда localStorage загружен
  useEffect(() => {
    if (!isLoaded) return;

    console.log(isAccepted);

    if (!isAccepted) setOpen(true);
    else setOpen(false);
  }, [pathname, isAccepted, isLoaded]);

  // Если еще не загрузили данные — не рендерим баннер вообще
  if (!isLoaded) return null;

  return (
    <Sheet open={open} modal={false}>
      <SheetContent
        className="bg-cookie-gradient py-8 border-none"
        side="bottom"
        overlayClassName="hidden"
      >
        <SheetHeader className="sr-only">
          <SheetTitle className="sr-only">Cookies</SheetTitle>
          <SheetDescription className="sr-only">
            Политика использования Cookies
          </SheetDescription>
        </SheetHeader>
        <Container className="justify-between items-center">
          <p className="max-w-[500px] w-full text-white">
            Мы используем cookies для корректной работы сайта. Продолжая
            использовать сайт, вы соглашаетесь с их применением.
          </p>
          <div className="flex gap-6">
            <Button
              variant="tertiary"
              className="text-white hover:bg-white hover:text-main"
              asChild
            >
              <Link href={paths.policy.getHref()}>Подробнее</Link>
            </Button>
            <Button
              variant="secondary"
              className="text-white border-white hover:bg-white hover:text-main"
              onClick={handleAccept}
            >
              Принять все
            </Button>
          </div>
          <SheetClose
            className="relative top-auto right-auto [&_svg]:fill-white"
            onClick={() => setOpen(false)}
          />
        </Container>
      </SheetContent>
    </Sheet>
  );
};

export default CookieDialog;
