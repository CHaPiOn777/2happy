import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import MailIcon from "@/shared/components/icons/MailIcon";
import PhoneIcon from "@/shared/components/icons/PhoneIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import WhatsAppIcon from "@/shared/components/icons/Social/WhatsAppIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";
import ContactUsButton from "./components/ContactUsButton";

const ContactUsSection = () => {
  return (
    <Section className="my-section">
      <Container>
        <div className="w-[200px] sm:w-[280px] md:w-[356px] lg:w-[416px] h-[264px] sm:h-[340px] md:h-[440px] lg:h-[504px] absolute bottom-[140px] md:bottom-[184px] lg:bottom-[96px] right-4 md:right-6">
          <ImageWithLoader
            wrapperClassName=""
            className="object-[50%_50%] -scale-x-100"
            src="/images/Account/contact-us.jpg"
            alt="contact-us"
          />
          <div className="absolute top-0 left-0 -scale-x-100 w-full h-full bg-image-gradient" />
        </div>

        <div className="w-full">
          <div className="flex justify-between gap-[60px]">
            <div className="flex flex-col justify-center gap-8 max-w-[624px] ml-0 lg:ml-[60px] xl:ml-[104px] mb-[60px] md:mb-[112px] mt-[56px] lg:mb-[88px] lg:mt-[88px] z-10">
              <h3 className="text-h2 lg:text-h3">Объединим идеи и стиль</h3>
              <div className="max-w-[288px] md:max-w-full sm:ml-12 md:ml-16 lg:ml-[104px]">
                <p className="text-body2 lg:text-h5">
                  Если вы хотите стать частью нашей истории — напишите нам.
                  Обсудим идеи и создадим <br className="hidden lg:block" />{" "}
                  что-то особенное вместе!
                </p>
                <ContactUsButton />
              </div>
            </div>
            <div className="w-[356px] lg:w-[416px] hidden md:block shrink-0" />
          </div>
          <div className="flex flex-col gap-8 sm:gap-10 pt-14 pb-8 sm:pb-10 sm:pt-10 px-8 lg:px-20 bg-black text-white">
            <p className="text-h5">ежедневно с 10:00 до 20:00 (время Астаны)</p>
            <ul className="flex md:grid grid-cols-2 justify-items-center md:justify-items-stretch gap-6 lg:flex justify-between">
              <li>
                <a className="flex items-center gap-4" href="tel:+77021657378">
                  <div className="border border-white rounded-xs">
                    <PhoneIcon className="fill-white" />
                  </div>
                  <span className="hidden md:block relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0">
                    +7-702-165-73-78
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <a
                  href="mailto:2happy.almaty@gmail.com"
                  className="flex items-center gap-4"
                >
                  <div className="border border-white rounded-xs">
                    <MailIcon className="fill-white" />
                  </div>
                  <span className="hidden md:block relative text-body1 text-center md:text-left underline md:no-underline after:hidden md:after:block after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0">
                    2happy.almaty <br className="block md:hidden" /> @gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <a
                  href="https://wa.me/77021657378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="border border-white rounded-xs">
                    <WhatsAppIcon className="fill-white" />
                  </div>
                  <span className="hidden md:block relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0">
                    Whats App
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/2happy_kz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="border border-white rounded-xs">
                    <InstagramIcon className="fill-white" />
                  </div>
                  <span className="hidden md:block relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0">
                    @2HAPPY_KZ
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactUsSection;
