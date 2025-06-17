import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { paths } from "@/config/paths";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "./consts";
import CategoryLink from "@/features/Categories/components/CategoryLink";

import * as motion from "motion/react-client";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const Categories = () => {
  return (
    <Section className="border-b-[1px] border-b-main">
      <Container className="flex-col md:flex-row justify-between gap-8 md:gap-24 lg:gap-[176px] my-section">
        <div className="flex flex-col gap-8 md:gap-0 justify-between w-full lg:basis-[392px]">
          <motion.h2
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "tween" }}
            className="text-h2 mt-12 lg:mt-0"
          >
            Категории <br /> /
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "tween" }}
            className="flex flex-col items-end md:items-start gap-4"
          >
            <Link
              href={paths.catalog.getHref()}
              className="link-hover col-start-2 md:col-span-2 text-button-medium"
            >
              Смотреть все <ArrowRightIcon />
            </Link>
            <div className="flex gap-6">
              <div className="relative w-[152px] h-[100px] lg:w-[184px] lg:h-[128px]">
                <Image
                  fill
                  src="/images/Home/Categories/category-1.jpg"
                  className="object-cover object-top"
                  alt="category-image"
                />
              </div>
              <div className="relative w-[152px] h-[100px] lg:w-[184px] lg:h-[128px]">
                <Image
                  fill
                  className="object-cover object-center"
                  src="/images/2happy-logo-black.jpg"
                  alt="category-image"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatedInView
          as="div"
          animations={{
            lg: {
              initial: { opacity: 0, x: 100 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, type: "tween" },
              viewport: { once: true, amount: 0.3 },
            },
            default: {
              initial: { opacity: 0, x: 100 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, type: "tween" },
              viewport: { once: true, amount: 0.8 },
            },
          }}
          className="w-full lg:basis-[600px] flex flex-col"
        >
          {CATEGORIES.map((category) => (
            <Button
              key={category.name}
              variant="tertiary"
              size="large"
              className="w-full justify-between p-4 text-h5 border-b-[1px] border-main"
              asChild
            >
              <CategoryLink
                category={category.slug}
                name={category.name}
                parent={category.parent}
              >
                {category.name} <ArrowUpRightIcon />
              </CategoryLink>
            </Button>
          ))}
        </AnimatedInView>
      </Container>
    </Section>
  );
};

export default Categories;
