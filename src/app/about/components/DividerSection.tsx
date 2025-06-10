import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const DividerSection = () => {
  return (
    <Section className="h-[520px] xl:h-[912px] lg:h-[720px]">
      <Image
        fill
        className="object-cover object-[50%_10%]"
        src="/images/About/divider-image.jpg"
        quality={100}
        alt="divider-image"
      />
    </Section>
  );
};

export default DividerSection;
