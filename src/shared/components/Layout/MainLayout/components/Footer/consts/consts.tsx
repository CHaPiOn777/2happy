import { paths } from "@/config/paths";
import { HELP_TABS } from "@/features/User/utils/isValidHelpTab";
import FacebookIcon from "@/shared/components/icons/Social/FacebookIcon";
import InstagramRoundedIcon from "@/shared/components/icons/Social/InstagramRoundedIcon";
import TwitterIcon from "@/shared/components/icons/Social/TwitterIcon";
import { ReactNode } from "react";

interface IFooterLink {
  href: string;
  text: string;
}

export const socialIcons: { href: string; element: ReactNode }[] = [
  {
    href: "/",
    element: <FacebookIcon />,
  },
  {
    href: "/",
    element: <TwitterIcon />,
  },
  {
    href: "https://www.instagram.com/2happy_kz/",
    element: <InstagramRoundedIcon />,
  },
];

export const helpLinks: IFooterLink[] = [
  {
    href: paths.help.getHref({ tab: HELP_TABS.DELIVERY }),
    text: "Доставка и оплата",
  },
  {
    href: paths.help.getHref({ tab: HELP_TABS.REFUNDS }),
    text: "Условия возврата и обмена",
  },
  {
    href: paths.help.getHref({ tab: HELP_TABS.KASPI }),
    text: "Рассрочка от KASPI RED",
  },
];

export const storeLinks: IFooterLink[] = [
  {
    href: paths.contacts.getHref(),
    text: "Обратная связь",
  },
  {
    href: paths.about.getHref(),
    text: "О нас",
  },
  {
    href: paths.about.reviews.getHref(),
    text: "Отзывы",
  },
  {
    href: paths.about.partnership.getHref(),
    text: "Партнёрам",
  },
  {
    href: paths.offert.getHref(),
    text: "Публичная оферта",
  },
  {
    href: paths.policy.getHref(),
    text: "Политика конфиденциальности",
  },
];

export const mainBlocks: { title: string; links: IFooterLink[] }[] = [
  {
    title: "Помощь",
    links: helpLinks,
  },
  {
    title: "Магазин",
    links: storeLinks,
  },
];
