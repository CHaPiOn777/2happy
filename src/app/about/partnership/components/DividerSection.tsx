import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const DividerSection = () => {
  return (
    <Section className="h-[320px] sm:h-[480px] lg:h-[720px] xl:h-[912px] ">
      <AnimatedInView
        as="div"
        id="partners-suggest-title"
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        fallbackClassName="opacity-0"
      >
        <Image
          fill
          className="object-cover object-[50%_10%]"
          src="/images/Partnership/divider-image.jpg"
          quality={100}
          alt="divider-image"
        />
      </AnimatedInView>
    </Section>
  );
};

export default DividerSection;
