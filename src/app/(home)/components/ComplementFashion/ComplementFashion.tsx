import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import ItemCard from "@/features/Products/components/Cards/ItemCard";

import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import ComplementFashionButton from "./components/ComplementFashionButton";
import Link from "next/link";
import { Button } from "@/shared/components/UI/Button";
import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";

const ComplementFashion = () => {
  return (
    <Section className="bg-main">
      <Container className="flex-col gap-8 my-12 sm:my-20">
        <div
          className={`grid grid-cols-addition-md md:grid-cols-addition-lg lg:grid-cols-addition 
          grid-rows-addition-xs xs:grid-rows-addition-sm sm:grid-rows-addition-md md:grid-rows-addition-lg lg:grid-rows-addition 
          gap-y-4 gap-x-2 xs:gap-y-6 xs:gap-x-4 sm:gap-x-6 h-full overflow-hidden`}
        >
          <div className="relative h-[208px] xs:h-[280px] sm:h-[376px] md:h-[640px] col-start-2 lg:col-start-auto row-start-2 lg:row-start-auto">
            <Image
              src="/images/2happy-white-logo-90.png"
              alt="white-logo"
              fill
              className="object-contain"
            />
          </div>

          <AnimatedInView
            id="home-fashion-card-1"
            as="div"
            viewport={{ once: true, amount: 0.4 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 150 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween" },
              },
            }}
            className="col-start-1 lg:col-start-auto col-end-3 lg:col-end-auto lg:row-span-2"
          >
            <ItemCard
              className="w-full h-full"
              href="/"
              src="/images/Home/ComplementFashion/1.jpg"
            />
          </AnimatedInView>

          <AnimatedInView
            id="home-fashion-card-2"
            as="div"
            viewport={{ once: true, amount: 0.2 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 150 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween", delay: 0.3 },
              },
            }}
            className="col-start-3 lg:col-start-auto row-start-1 row-end-3 lg:row-span-2 mt-0 sm:mt-20 md:mt-[104px] lg:mt-0"
          >
            <ItemCard
              className="w-full h-full"
              href="/"
              src="/images/Home/ComplementFashion/2.jpg"
            />
          </AnimatedInView>

          <AnimatedInView
            id="home-fashion-card-3"
            as="div"
            viewport={{ once: true, amount: "all" }}
            animations={{
              md: {
                initial: { opacity: 0, y: 120 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween", delay: 0.6 },
                viewport: { once: true, amount: 0.2 },
              },
              lg: {
                initial: { opacity: 0, y: 150 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween", delay: 0.6 },
                viewport: { once: true, amount: 0.3 },
              },
              default: {
                viewport: { once: true, amount: 0.4 },
                initial: { opacity: 0, y: 80 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween", delay: 0.6 },
              },
            }}
            className="col-start-1 lg:col-start-auto row-start-2 lg:row-start-auto"
          >
            <ItemCard
              className="w-full h-full"
              href="/"
              src="/images/Home/ComplementFashion/3.jpg"
            />
          </AnimatedInView>
          <div className="flex flex-col justify-start items-start col-start-3 lg:col-start-4 row-start-1 lg:row-start-auto">
            <ComplementFashionButton />
          </div>
        </div>
        <AnimatedInView
          id="home-fashion-button"
          as="div"
          viewport={{ once: true, amount: 0.4 }}
          animations={{
            default: {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, type: "tween" },
            },
          }}
        >
          <Button
            className="inline-flex w-full border-white text-white [&_svg]:fill-white sm:hidden"
            variant={"secondary"}
            size={"medium"}
            asChild
          >
            <Link href={paths.catalog.collections.getHref()}>
              Смотреть все <ArrowUpRightIcon />
            </Link>
          </Button>
        </AnimatedInView>
      </Container>
    </Section>
  );
};

export default ComplementFashion;
