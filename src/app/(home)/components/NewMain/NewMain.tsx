import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import MainButton from "./components/MainButton";

import * as motion from "motion/react-client";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const NewMain = () => {
  return (
    <Section className="h-[584px] md:h-[480px] xl:h-[865px] lg:h-[760px] mb-10 md:mb-0">
      <AnimatedInView
        as="div"
        viewport={{ once: true }}
        fallbackClassName="opacity-0"
        animations={{
          md: {
            initial: { opacity: 0, y: 80 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
          },
          lg: {
            initial: { opacity: 0, y: 120 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
          },
          default: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6 },
          },
        }}
        className="absolute w-full h-full border-b border-main"
      >
        <Image
          fill
          className="object-cover object-[58%_50%] sm:object-[50%_50%]"
          quality={100}
          src="/images/Home/Main/main.jpg"
          alt="main-image"
          priority
        />
      </AnimatedInView>
      <Container className="gap-6 items-center h-full">
        <motion.div
          transition={{ duration: 1, type: "spring" }}
          initial={{ x: -1000 }}
          animate={{
            x: 0,
          }}
          className="w-full max-w-[264px] sm:max-w-max -mt-32 md:-mt-10 lg:-mt-24"
        >
          <h1 className="text-h3Akira mb-6 sm:mb-8 lg:mb-10">2HAPPY</h1>
          <div className="flex gap-2 sm:gap-4">
            <span className="w-[32px] shrink-0 sm:w-[64px] mt-2 sm:mt-4 h-[1px] sm:h-[2px] bg-main" />
            <div className="flex flex-col max-w-[440px] w-full">
              <span className="text-h4 mb-10 lg:mb-20">
                Стильная и комфортная <br className="hidden sm:block" /> одежда
                на все случаи жизни!
              </span>
              <MainButton className="hidden sm:flex" />
            </div>
          </div>
          <MainButton className="absolute -bottom-14 left-0 flex sm:hidden" />
        </motion.div>
      </Container>
    </Section>
  );
};

export default NewMain;
