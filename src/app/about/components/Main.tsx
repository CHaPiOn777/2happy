import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const Main = () => {
  return (
    <Section className="pt-12 pb-14 md:pb-20 border-b border-main h-[480px] xl:h-[865px] lg:h-[760px]">
      <AnimatedInView
        as="div"
        id="about-main-bg"
        className="absolute w-full h-full top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        fallbackClassName="opacity-0"
      >
        <Image
          fill
          className="object-cover -z-10 object-[65%_50%] md:object-[50%_50%]"
          quality={90}
          src="/images/About/Main/bg.png"
          alt="main-image"
        />
        <div className="absolute w-full h-full bg-about-main-gradient" />
      </AnimatedInView>

      <Container className="flex-col gap-6 items-start md:items-center justify-end lg:justify-center h-full">
        <div>
          <AnimatedInView
            as="h2"
            id="about-main-title"
            className="text-h3Akira text-white mb-6 md:mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
          >
            2HAPPY
          </AnimatedInView>

          <AnimatedInView
            as="div"
            id="about-main-desc"
            className="flex gap-2.5 sm:gap-4 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            fallbackClassName="opacity-0"
          >
            <span className="w-[24px] sm:w-[40px] md:w-[64px] mt-3 sm:mt-4 h-[1px] sm:h-[2px] bg-white" />
            <p className="text-h4 md:text-h3 max-w-[330px] w-full text-white">
              Одежда,
              <br className="block md:hidden" /> которая{" "}
              <br className="hidden md:block" /> говорит за тебя
            </p>
          </AnimatedInView>
        </div>
      </Container>
    </Section>
  );
};

export default Main;
