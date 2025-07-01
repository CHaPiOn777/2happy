"use client";

import { paths } from "@/config/paths";
import { HELP_TABS } from "@/features/User/utils/isValidHelpTab";
import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import MailIcon from "@/shared/components/icons/MailIcon";
import PhoneIcon from "@/shared/components/icons/PhoneIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import WhatsAppIcon from "@/shared/components/icons/Social/WhatsAppIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { IconButton } from "@/shared/components/UI/IconButton";
import { Separator } from "@/shared/components/UI/Separator";
import Link from "next/link";
import { ReactNode, useState } from "react";

const HelpDialog = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild onClick={onClick}>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[1224px] gap-8 w-full p-20">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-h3">Помощь покупателю</DialogTitle>
          <DialogDescription>
            Здесь вы найдёте ответы на популярные вопросы о доставке, оплате,
            возврате и других аспектах покупки. Если не нашли нужной
            информации — мы всегда готовы помочь вам лично.
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4">
          <Link
            className="w-full"
            href={paths.help.getHref({ tab: HELP_TABS.REFUNDS })}
            onClick={() => setOpen(false)}
          >
            <div className="flex-1 space-y-6 border border-main p-6 hover:bg-gray-light transition-colors">
              <h5 className="text-h5">Возврат и обмен</h5>
              <ul className="space-y-2 pl-6 list-disc">
                <li>Условия возврата/обмена</li>
                <li>Как оформить возврат/обмен</li>
              </ul>
              <span className="link-hover text-button-xs">
                Подробнее
                <ArrowRightIcon />
              </span>
            </div>
          </Link>
          <Link
            className="w-full"
            href={paths.help.getHref({ tab: HELP_TABS.DELIVERY })}
            onClick={() => setOpen(false)}
          >
            <div className="flex-1 space-y-6 border border-main p-6 hover:bg-gray-light transition-colors">
              <h5 className="text-h5">Доставка и оплата</h5>
              <ul className="space-y-2 pl-6 list-disc">
                <li>Регионы доставки</li>
                <li>Сроки и стоимость</li>
              </ul>
              <span className="link-hover text-button-xs">
                Подробнее
                <ArrowRightIcon />
              </span>
            </div>
          </Link>
          <Link
            className="w-full"
            href={paths.help.getHref({ tab: HELP_TABS.KASPI })}
            onClick={() => setOpen(false)}
          >
            <div className="flex-1 space-y-6 border border-main p-6 hover:bg-gray-light transition-colors">
              <h5 className="text-h5">Рассрочка от KASPI RED</h5>
              <ul className="space-y-2 pl-6 list-disc">
                <li>Условия рассрочки</li>
                <li>Как оформить рассрочку</li>
              </ul>
              <span className="link-hover text-button-xs">
                Подробнее
                <ArrowRightIcon />
              </span>
            </div>
          </Link>
        </div>
        <Separator />
        <div className="space-y-6">
          <p className="text-h5">
            Мы всегда на связи — ежедневно с 10:00 до 20:00 (время Астаны)
          </p>
          <div className="flex justify-between">
            <a
              className="inline-flex items-center gap-4"
              href="tel:77021657378"
            >
              <IconButton
                size="extraSmall"
                variant="secondary"
                className="p-1 border border-main"
              >
                <PhoneIcon className="!size-6" />
              </IconButton>
              <span className="link-hover">+7-702-165-73-78</span>
            </a>

            <a
              className="inline-flex items-center gap-4"
              href="mailto:2happy.almaty@gmail.com"
            >
              <IconButton
                size="extraSmall"
                variant="secondary"
                className="p-1 border border-main"
              >
                <MailIcon className="!size-6" />
              </IconButton>
              <span className="link-hover">2happy.almaty@gmail.com</span>
            </a>
            <a className="inline-flex items-center gap-4" href="">
              <IconButton
                size="extraSmall"
                variant="secondary"
                className="p-1 border border-main"
              >
                <WhatsAppIcon className="!size-6" />
              </IconButton>
              <span className="link-hover">Whats App</span>
            </a>
            <a
              className="inline-flex items-center gap-4"
              href="https://www.threads.com/@2happy_kz?xmt=AQGzMZWkT7UYpN1SCaa_anIFujS1QnrnyGe2VTcy2_Ky76Y"
            >
              <IconButton
                size="extraSmall"
                variant="secondary"
                className="p-1 border border-main"
              >
                <InstagramIcon className="!size-6 fill-main" />
              </IconButton>
              <span className="link-hover">@2happy_kz</span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
