import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import MailIcon from "@/shared/components/icons/MailIcon";
import PhoneIcon from "@/shared/components/icons/PhoneIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import WhatsAppIcon from "@/shared/components/icons/Social/WhatsAppIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";
import Link from "next/link";

const PartnersSection = () => {
  return (
    <Section className="my-section">
      <Container>
        <div className="absolute w-[200px] sm:w-[300px] md:w-[356px] lg:w-[416px] h-[264px] sm:h-[330px] md:h-[440px] lg:h-[504px]  bottom-36 md:bottom-auto md:top-8 lg:top-0 right-4 md:right-6">
          <ImageWithLoader
            className="object-[50%_50%] -scale-x-100"
            src="/images/Account/contact-us.jpg"
            alt="contact-us"
          />
          <div className="absolute top-0 left-0 -scale-x-100 w-full h-full bg-image-gradient" />
        </div>
        <div className="w-full">
          <div className="flex gap-[40px] lg:gap-18 xl:gap-20">
            <div className="flex flex-col justify-center gap-8 max-w-[624px] lg:ml-[52px] xl:ml-[104px] my-14 lg:mt-[88px] md:mb-[88px] relative z-10">
              <h3 className="text-h2 sm:text-h3">
                Хочешь стать частью 2HAPPY?
              </h3>
              <div className="max-w-[288px] sm:max-w-max md:ml-14 lg:ml-[104px]">
                <p className="text-body2 md:text-h5">
                  Стань амбассадором или партнёром бренда — рассказывай
                  о 2HAPPY, вдохновляй других и формируй стильное сообщество
                  вместе с нами
                </p>
                <Button className="w-full mt-8 md:mt-14" size="medium" asChild>
                  <Link href={paths.about.partnership.getHref()}>
                    смотреть условия
                    <ArrowUpRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-[356px] lg:w-[416px] shrink-0 hidden sm:block" />
          </div>
          <div className="flex flex-col gap-10 pt-12 pb-8 md:py-10 px-4 sm:px-8 lg:px-20 bg-black text-white">
            <p className="text-h5">ежедневно с 10:00 до 20:00 (время Астаны)</p>
            <ul className="flex md:grid md:grid-cols-2 gap-6 lg:flex justify-between">
              <li className="flex items-center gap-4">
                <div className="border border-white rounded-xs">
                  <PhoneIcon className="fill-white" />
                </div>
                <a
                  href="tel:+77021657378"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 hidden md:inline-block"
                >
                  +7-702-165-73-78
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="border border-white rounded-xs">
                  <MailIcon className="fill-white" />
                </div>
                <a
                  href="mailto:2happy.almaty@gmail.com"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 hidden md:inline-block"
                >
                  2happy.almaty@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="border border-white rounded-xs">
                  <WhatsAppIcon className="fill-white" />
                </div>
                <a
                  href="https://wa.me/77021657378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 hidden md:inline-block"
                >
                  Whats App
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="border border-white rounded-xs">
                  <InstagramIcon className="fill-white" />
                </div>
                <a
                  href="https://www.instagram.com/2happy_kz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 hidden md:inline-block"
                >
                  @2HAPPY_KZ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PartnersSection;
