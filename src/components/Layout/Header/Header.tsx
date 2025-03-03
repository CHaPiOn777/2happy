"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/UI/Container";
import StyledTooltip from "@/components/UI/StyledTooltip";

import { iconLinks, mainLinks, subLinks } from "./consts";
import CategorySheet from "./components/CategorySheet/CategorySheet";
import SearchSheet from "./components/SearchSheet";

const Header = () => {
  return (
    <header
      className={`fixed w-full relative z-header h-[calc(var(--header-height)-1px)] bg-white`}
    >
      <div className="min-h-[56px]">
        <Container className="flex h-full items-center justify-end gap-5 py-5">
          {subLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-button-xs link-hover"
            >
              {link.title}
            </Link>
          ))}
        </Container>
      </div>
      <div className="min-h-[80px] border-t-[1px] border-main">
        <Container className="flex items-center">
          <Link href="/home">
            <Image
              width={80}
              height={80}
              src="/images/header/header-logo.jpg"
              alt="header-logo"
            />
          </Link>
          <nav className="flex-1 px-2">
            <ul className="flex justify-center gap-6 ">
              <li>
                <CategorySheet />
              </li>
              {mainLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-button-normal link-hover"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-10">
            <SearchSheet />
            <div className="flex gap-6">
              {iconLinks.map((icon) => (
                <Link
                  key={icon.tooltip.id}
                  href={icon.href}
                  data-tooltip-id={icon.tooltip.id}
                  data-tooltip-content={icon.tooltip.content}
                >
                  {icon.element}
                  <StyledTooltip id={icon.tooltip.id} />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
