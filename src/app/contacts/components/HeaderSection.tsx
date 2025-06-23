import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <Section>
      <div className="relative w-full h-[448px] sm:h-[480px] lg:h-[600px] bg-help-gradient">
        <Image
          className="object-cover object-[50%_10%] -z-10"
          fill
          src="/images/Contacts/header.jpg"
          alt="contacts-banner"
        />
        <Container className="flex-col gap-8 h-full justify-center">
          <h1 className="text-h1 text-white uppercase">Контакты</h1>
          <div className="flex gap-4">
            <div className="w-[64px] bg-white h-[1px]" />
            <p className="text-h4 text-white">
              Центр поддержки работает <br /> ежедневно — с 10:00 до 20:00{" "}
              <br /> (время Астаны){" "}
            </p>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default HeaderSection;
