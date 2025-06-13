import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import MainButton from "./components/MainButton";

import * as motion from "motion/react-client";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const NewMain = () => {
  return (
    <Section className=" h-[480px] xl:h-[865px] lg:h-[760px]">
      <AnimatedInView
        as="div"
        viewport={{ once: true }}
        fallbackClassName="opacity-0"
        animations={{
          mobile: {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            viewport: { once: true },
          },
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
          className="object-cover"
          src="/images/Home/Main/main.jpg"
          alt="main-image"
        />
      </AnimatedInView>
      <Container className="gap-6 items-center h-full">
        <motion.div
          transition={{ duration: 1, type: "spring" }}
          initial={{ x: -1000 }}
          animate={{
            x: 0,
          }}
          className="-mt-10 lg:-mt-24"
        >
          <h1 className="text-h3Akira mb-8 lg:mb-10">2HAPPY</h1>
          <div className="flex gap-4">
            <span className="w-[64px] mt-4 h-[2px] bg-main" />
            <div className="flex flex-col max-w-[440px] w-full">
              <span className="text-h4 mb-10 lg:mb-20">
                Стильная и комфортная <br /> одежда на все случаи жизни!
              </span>
              <MainButton />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default NewMain;
