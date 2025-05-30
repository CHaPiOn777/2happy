import Link from "next/link";
import { helpLinks, mainBlocks, storeLinks } from "../consts/consts";
import AccountList from "./AccountList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";

const FooterMain = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 lg:py-12 border-t-[0px] border-b-[0px] lg:border-t-[1px] lg:border-b-[1px] lg:border-white">
      <AccountList />
      {/* Footer Links */}

      <li className="basis-full hidden lg:block">
        <h4 className="text-h4 text-white pb-4">Помощь</h4>
        <ul className="space-y-2 text-white-secondary">
          {helpLinks.map((link, index) => (
            <li key={index}>
              <Link className="text-button-xs link-hover" href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="basis-full hidden lg:block">
        <h4 className="text-h4 text-white pb-4">Магазин</h4>
        <ul className="space-y-2 text-white-secondary">
          {storeLinks.map((link, index) => (
            <li key={index}>
              <Link className="text-button-xs link-hover" href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="basis-full hidden lg:block">
        <h4 className="text-h4 text-white pb-4">Контакты</h4>
        <ul className="space-y-2 text-button-xs text-white-secondary">
          <li>
            <a className="text-button-xs link-hover" href="tel:+77021657378">
              +7-702-165-73-78
            </a>
          </li>
          <li>
            <a
              className="text-button-xs link-hover"
              href="mailto:2happykz@mail.ru"
            >
              2happykz@mail.ru
            </a>
          </li>
          <li>
            <span className="text-button-xs">Самал 1, дом 31, Алматы</span>
          </li>
          <li>
            <span className="text-button-xs">Пн-Вс 10.00 - 20.00</span>
          </li>
          <li>
            <a
              className="text-button-xs link-hover"
              target="_blank"
              href="https://yandex.ru/maps/-/CHC56AzE"
            >
              Посмотреть на карте
            </a>
          </li>
        </ul>
      </li>

      <Accordion type="multiple" className="flex flex-col gap-8">
        <AccordionItem value="help" className="lg:hidden">
          <AccordionTrigger className="text-white" iconClassName="fill-white">
            Помощь
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-4 text-white-secondary pt-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link className="text-button-xs link-hover" href={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="store" className="lg:hidden">
          <AccordionTrigger className="text-white" iconClassName="fill-white">
            Магазин
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-4 text-white-secondary pt-2">
              {storeLinks.map((link, index) => (
                <li key={index}>
                  <Link className="text-button-xs link-hover" href={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contacts" className="lg:hidden">
          <AccordionTrigger className="text-white" iconClassName="fill-white">
            Контакты
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-4 text-white-secondary pt-2">
              <li>
                <a
                  className="text-button-xs link-hover"
                  href="tel:+77021657378"
                >
                  +7-702-165-73-78
                </a>
              </li>
              <li>
                <a
                  className="text-button-xs link-hover"
                  href="mailto:2happykz@mail.ru"
                >
                  2happykz@mail.ru
                </a>
              </li>
              <li>
                <span className="text-button-xs">Самал 1, дом 31, Алматы</span>
              </li>
              <li>
                <span className="text-button-xs">Пн-Вс 10.00 - 20.00</span>
              </li>
              <li>
                <a
                  className="text-button-xs link-hover"
                  target="_blank"
                  href="https://yandex.ru/maps/-/CHC56AzE"
                >
                  Посмотреть на карте
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ul>
  );
};

export default FooterMain;
