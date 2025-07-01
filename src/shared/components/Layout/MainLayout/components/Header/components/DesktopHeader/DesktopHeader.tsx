"use client";

import Container from "@/shared/components/UI/Container";
import UpperHeader from "./UpperHeader";
import Link from "next/link";
import Image from "next/image";
import CategorySheet from "@/features/Categories/components/CategorySheet/CategorySheet";
import { mainLinks } from "../../consts/consts";
import NavLink from "@/shared/components/UI/NavLink";
import useObserver from "@/shared/hooks/useObserver";
import { ReactNode, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { categoryIds } from "@/features/Categories/consts/consts";

import { motion } from "motion/react";

const DesktopHeader = ({ rightSlot }: { rightSlot?: ReactNode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const upperHeaderRef = useRef<HTMLDivElement>(null);

  useObserver(
    upperHeaderRef,
    () => setIsSticky(false),
    () => setIsSticky(true)
  );

  useQuery(
    getCategoriesQueryOptions({ parent: categoryIds["clothes"], per_page: 20 })
  );

  useQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["accessories"],
      per_page: 20,
    })
  );

  useQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["outerwear"],
      per_page: 20,
    })
  );

  return (
    <>
      {/* Это подложка под sticky header, чтобы при скролле была тень и border, но скрывались под CategorySheet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed h-[calc(var(--sticky-header-height)+1px)] left-0 top-0 w-full z-[49] shadow-header border-b-[1px] border-main hidden lg:block"
      />
      {/* Это подложка под большой header, чтобы была тень и border, но скрывались под CategorySheet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute h-[var(--full-header-height)] left-0 top-0 w-full z-[49] shadow-header border-b-[1px] border-main hidden lg:block"
      />

      <UpperHeader ref={upperHeaderRef} className="hidden lg:block" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 min-h-[80px] bg-white z-header hidden lg:block"
      >
        <Container className="items-center">
          <Link href="/">
            <Image
              width={80}
              height={80}
              src="/images/Header/header-logo.jpg"
              alt="header-logo"
              priority
            />
          </Link>
          <nav className="flex-1 px-2">
            <ul className="flex justify-center gap-6 ">
              <li>
                <CategorySheet isSticky={isSticky} />
              </li>
              {mainLinks.map(({ title, ...props }) => (
                <li key={title}>
                  <NavLink {...props}>{title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-10">
            {/* <SearchSheet /> */}
            {rightSlot}
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default DesktopHeader;
