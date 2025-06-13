import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import ItemCard from "@/features/Products/components/Cards/ItemCard";
import { Button } from "@/shared/components/UI/Button";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import Link from "next/link";
import { paths } from "@/config/paths";

import * as motion from "motion/react-client";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const ComplementFashion = () => {
  return (
    <Section className="bg-main">
      <Container className="my-20">
        <div className="grid grid-cols-addition-lg lg:grid-cols-addition grid-rows-addition-lg lg:grid-rows-addition gap-6 h-full overflow-hidden">
          <div className="relative w-[80px] h-[640px] col-start-2 lg:col-start-auto row-start-2 lg:row-start-auto">
            <Image
              src="/images/2happy-white-logo-90.png"
              alt="white-logo"
              fill
              className="object-cover"
            />
          </div>

          <AnimatedInView
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
            as="div"
            viewport={{ once: true, amount: 0.4 }}
            animations={{
              default: {
                initial: { opacity: 0, y: 150 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween", delay: 0.3 },
              },
            }}
            className="col-start-3 lg:col-start-auto row-start-1 row-end-3 lg:row-span-2 mt-[104px] lg:mt-0"
          >
            <ItemCard
              className="w-full h-full"
              href="/"
              src="/images/Home/ComplementFashion/2.jpg"
            />
          </AnimatedInView>

          <AnimatedInView
            as="div"
            viewport={{ once: true, amount: "all" }}
            animations={{
              lg: {
                initial: { opacity: 0, y: 150 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, type: "tween", delay: 0.6 },
                viewport: { once: true, amount: 0.3 },
              },
              default: {
                viewport: { once: true, amount: "all" },
                initial: { opacity: 0, y: 150 },
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
            <Button
              variant="tertiary"
              className="lg:w-full text-white [&_svg]:fill-white"
              asChild
            >
              <Link href={paths.catalog.getHref()}>
                Перейти в каталог
                <ArrowUpRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ComplementFashion;
