import InstagramCard from "@/features/Products/components/Cards/InstagramCard";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { cn } from "@/shared/utils";

import * as motion from "motion/react-client";

const Instagram = ({ variant = "black" }: { variant?: "black" | "white" }) => {
  return (
    <Section
      className={cn("relative", variant === "black" ? "bg-main" : "bg-white")}
    >
      <Container className="flex-col gap-10 my-section">
        <motion.h2
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "tween" }}
          className={cn(
            "text-h2",
            variant === "black" ? "text-white" : "text-main"
          )}
        >
          #2happy <br />/
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="grid grid-cols-2 sm:grid-cols-instagram-md md:grid-cols-instagram-lg lg:grid-cols-4 grid-rows-[repeat(3,160px)] xs:grid-rows-[repeat(3,216px)] sm:grid-rows-instagram-md md:grid-rows-instagram-lg lg:grid-rows-[repeat(2,288px)] gap-4 sm:gap-6"
        >
          <div
            className={cn(
              "text-body2 sm:text-body1 hidden md:block",
              variant === "black" ? "text-white" : "text-main"
            )}
          >
            <span>
              Откройте для себя больше вдохновения и стильных идей в нашем
              Instagram @2happy_kz! Будьте в курсе новинок, акций и трендов
            </span>
          </div>

          <div
            className={cn(
              "flex md:hidden items-end xs:items-start text-button-xs xs:text-body2 sm:text-body1 ",
              variant === "black" ? "text-white" : "text-main"
            )}
          >
            <span>
              Откройте для себя больше вдохновения и стильных идей в нашем
              Instagram @2happy_kz! Будьте в курсе новинок, акций и трендов
            </span>
          </div>
          <InstagramCard
            href="https://www.instagram.com/2happy_kz/p/DKybgeNxDpB/?hl=ru"
            src="/images/Instagram/instagram-1.jpg"
          />
          <InstagramCard
            href="https://www.instagram.com/2happy_kz/p/DKybS1oxm0O/?hl=ru"
            className="col-start-2 sm:col-end-5 md:col-start-1 md:col-end-3 row-start-1 row-end-1 sm:row-end-3 md:row-start-2 md:row-end-4 lg:row-span-2 lg:col-span-2"
            src="/images/Instagram/instagram-2.jpg"
          />
          <InstagramCard
            className="col-start-1 md:col-start-4 lg:col-start-auto md:col-end-3 lg:col-end-auto row-start-3 md:row-start-2 lg:row-start-auto"
            href="https://www.instagram.com/2happy_kz/p/DKG2dbgTTg8/?hl=ru"
            src="/images/Instagram/instagram-3.jpg"
          />
          <InstagramCard
            className="col-start-1 md:col-start-3 lg:col-start-auto lg:col-end-auto row-start-2 md:row-start-1 lg:row-start-auto"
            href="https://www.instagram.com/2happy_kz/p/DKJe2LBC-bC/?hl=ru"
            src="/images/Instagram/instagram-4.jpg"
          />
          <Button
            className="inline-flex text-white [&_svg]:fill-white mx-auto self-end sm:hidden px-1 xs:px-3"
            variant="tertiary"
            size="small"
            asChild
          >
            <a href="http://localhost:3000/">
              Мы в Instagram <ArrowUpRightIcon />
            </a>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Instagram;
