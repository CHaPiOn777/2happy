import Image from "next/image";
import Link from "next/link";

import MasterCardIcon from "@/shared/components/icons/Payment/MasterCardIcon";
import PaypalIcon from "@/shared/components/icons/Payment/PayPalIcon";
import Container from "@/shared/components/UI/Container";
import VisaIcon from "@/shared/components/icons/Payment/VisaIcon";
import { mainBlocks, socialIcons } from "./consts/consts";
import AccountList from "./components/AccountList";
import FooterMain from "./components/FooterMain";

const Footer = () => {
  return (
    <footer className="bg-main">
      <Container className="flex-col">
        {/* Footer Header */}

        <div className="w-full flex justify-between items-center pb-12 pt-20 lg:pt-16">
          <Link href="/">
            <Image
              src="/images/2happy-white-logo.png"
              width={480}
              height={46}
              alt="footer_logo"
            />
          </Link>
          <ul className="gap-4 hidden lg:flex">
            {/* Порядок элементов в массиве не изменяется, поэтому можно использовать index, как ключ */}
            {socialIcons.map((icon, index) => (
              <li
                key={index}
                className="hover:icon-glass-hover transition-colors"
              >
                <Link href={icon.href}>{icon.element}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Main */}

        <FooterMain />

        <div>
          <ul className="flex gap-4 lg:hidden">
            {/* Порядок элементов в массиве не изменяется, поэтому можно использовать index, как ключ */}
            {socialIcons.map((icon, index) => (
              <li
                key={index}
                className=" hover:icon-glass-hover transition-colors"
              >
                <Link
                  className="inline-flex items-center justify-center w-[48px] h-[48px]"
                  href={icon.href}
                >
                  {icon.element}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Bottom */}

        <div className="w-full flex justify-between items-end py-12 ">
          <span className="text-white text-description">
            © 2018 - 2025 2HAPPY. Все права защищены.
          </span>
          <ul className="flex gap-2">
            <li>
              <PaypalIcon />
            </li>
            <li>
              <VisaIcon />
            </li>
            <li>
              <MasterCardIcon />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
