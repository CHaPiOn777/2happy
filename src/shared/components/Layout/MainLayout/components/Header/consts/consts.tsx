import { paths } from "@/config/paths";
import CartIcon from "@/shared/components/icons/CartIcon";
import HeartIcon from "@/shared/components/icons/HeartIcon";

export const HEADER_HEIGHT = "138px";

export const subLinks = [
  {
    title: "Покупателям",
    href: "/",
  },
  {
    title: "Контакты",
    href: "/",
  },
];

export const mainLinks: { title: string; href: string; disabled?: boolean }[] =
  [
    {
      title: "Новинки",
      href: paths.catalog.new_collection.getHref("Новая коллекция"),
    },
    {
      title: "Бестселлеры",
      href: paths.catalog.bestsellers.getHref(),
    },
    {
      title: "Коллекции",
      href: paths.catalog.collections.getHref("Готовые образы"),
    },
    {
      title: "Final Sale",
      href: paths.catalog.final_sale.getHref(),
    },
    {
      title: "О нас",
      href: paths.about.getHref(),
    },
  ];

export const iconLinks = [
  {
    href: "/",
    element: (
      <HeartIcon className="hover:fill-main transition-[colors,transform]" />
    ),
    tooltip: {
      id: "favorite-tooltip",
      content: `Посмотреть список \n отложенных товаров`,
    },
  },
  {
    href: "/",
    element: <CartIcon className="hover:fill-main" />,
    tooltip: {
      id: "cart-tooltip",
      content: `Корзина`,
    },
  },
];
