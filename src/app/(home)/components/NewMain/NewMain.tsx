import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import MainButton from "./components/MainButton";

import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const NewMain = () => {
  return (
    <Section className="h-[584px] md:h-[480px] xl:h-[865px] lg:h-[760px] mb-10 md:mb-0">
      <AnimatedInView
        as="div"
        id="home-main-bg"
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        fallbackClassName="opacity-0"
        className="absolute w-full h-full border-b border-main"
      >
        <Image
          fill
          className="object-cover object-[65%_50%] xs:object-[60%_50%] sm:object-[50%_50%] md:object-[10%_50%] lg:object-[65%_50%]"
          quality={90}
          src="/images/Home/Main/main.jpg"
          alt="main-image"
          priority
        />
      </AnimatedInView>
      <Container className="gap-6 items-center h-full">
        <AnimatedInView
          as="div"
          id="home-main-title"
          fallbackClassName="opacity-0"
          transition={{ duration: 1, type: "spring" }}
          initial={{ x: -1000 }}
          animate={{
            x: 0,
          }}
          className="w-full max-w-[264px] sm:max-w-max -mt-32 md:-mt-10 lg:-mt-24"
        >
          <h1 className="text-h3Akira mb-4 xs:mb-6 sm:mb-8 lg:mb-10">2HAPPY</h1>
          <div className="flex gap-2 sm:gap-4">
            <span className="hidden xs:block w-[24px] shrink-0 sm:w-[48px] md:w-[64px] mt-2 sm:mt-4 h-[1px] sm:h-[2px] bg-main" />
            <div className="flex flex-col max-w-[440px] w-full">
              <span className="text-h5 xs:text-h4 mb-10 lg:mb-20">
                Стильная <br className="block sm:hidden" /> и комфортная{" "}
                <br className="hidden sm:block" /> одежда{" "}
                <br className="block sm:hidden" /> на все случаи жизни!
              </span>
              <MainButton className="hidden sm:flex" />
            </div>
          </div>
        </AnimatedInView>

        <MainButton className="absolute -bottom-14 left-0 flex sm:hidden" />
      </Container>
    </Section>
  );
};

export default NewMain;
