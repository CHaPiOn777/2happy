import AnimatedInView from "@/shared/components/Motion/AnimatedInView";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const DividerSection = () => {
  return (
    <Section className="h-[320px] md:h-[520px] xl:h-[912px] lg:h-[720px]">
      <AnimatedInView
        as="div"
        id="about-divider"
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        fallbackClassName="opacity-0"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          fill
          className="object-cover object-[50%_10%]"
          src="/images/About/divider-image.jpg"
          quality={100}
          alt="divider-image"
        />
      </AnimatedInView>
    </Section>
  );
};

export default DividerSection;
