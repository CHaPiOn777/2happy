import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const DividerSection = () => {
  return (
    <Section className="h-[480px] lg:h-[720px] xl:h-[912px] ">
      <Image
        fill
        className="object-cover object-[50%_10%]"
        src="/images/Partnership/divider-image.jpg"
        quality={100}
        alt="divider-image"
      />
    </Section>
  );
};

export default DividerSection;
