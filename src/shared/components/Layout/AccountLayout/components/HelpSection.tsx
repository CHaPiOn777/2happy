import MailIcon from "@/shared/components/icons/MailIcon";
import PhoneIcon from "@/shared/components/icons/PhoneIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import WhatsAppIcon from "@/shared/components/icons/Social/WhatsAppIcon";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";

const HelpSection = () => {
  return (
    <Section className="mb-section">
      <Container>
        <div className="w-[128px] h-[216px] xs:w-[200px] xs:h-[264px] sm:w-[300px] sm:h-[380px] md:w-[356px] md:h-[440px] lg:w-[416px] lg:h-[504px] absolute bottom-[200px] xs:bottom-[140px] sm:bottom-[270px] md:bottom-[200px] lg:bottom-24 right-4 md:right-6">
          <ImageWithLoader
            className="-scale-x-100 rounded-xs"
            src="/images/Account/contact-us.jpg"
            alt="contact-us"
          />
          <div className="absolute top-0 left-0 -scale-x-100 w-full h-full bg-image-gradient hidden xs:block" />
        </div>
        <div className="w-full ">
          <div className="flex justify-between gap-[40px]">
            <div className="flex flex-col gap-10 lg:gap-14 mt-8 xs:mt-12 xs:mt-0 sm:mt-[100px] md:mt-[176px] mb-8 xs:mb-20 sm:mb-[104px] ml-0 md:ml-16 xl:ml-36 z-10">
              <h3 className="text-h2 sm:text-h3 mb-[100px] xs:mb-0 xs:pt-12 sm:pt-0">
                Нужна помощь?
              </h3>
              <p className="text-body2 sm:text-h5 max-w-[192px] xs:max-w-full sm:ml-12 md:ml-28 xl:ml-44">
                Мы всегда на связи и готовы <br /> ответить на любые вопросы.
              </p>
            </div>
            <div className="w-[356px] shrink-0 hidden md:block" />
          </div>
          <div className="flex flex-col gap-10 py-6 px-4 sm:pt-12 sm:pb-8 sm:py-12 lg:py-10 sm:px-6 lg:px-20 bg-black text-white">
            <p className="text-h5">ежедневно с 10:00 до 20:00 (время Астаны)</p>
            <ul className="flex sm:grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 lg:flex justify-between">
              <li>
                <a
                  href="tel:+77021657378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 relative text-body1"
                >
                  <div className="border border-white rounded-xs">
                    <PhoneIcon className="fill-white" />
                  </div>
                  <span className="custom-underline after:bg-white hidden sm:inline-block">
                    +7-702-165-73-78
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:2happy.almaty@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 relative text-body1"
                >
                  <div className="border border-white rounded-xs">
                    <MailIcon className="fill-white" />
                  </div>
                  <span className="custom-underline after:bg-white hidden sm:inline-block">
                    2happy.almaty@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/77021657378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 relative text-body1"
                >
                  <div className="border border-white rounded-xs">
                    <WhatsAppIcon className="fill-white" />
                  </div>
                  <span className="custom-underline after:bg-white hidden sm:inline-block">
                    Whats App
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/2happy_kz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 relative text-body1"
                >
                  <div className="border border-white rounded-xs">
                    <InstagramIcon className="fill-white" />
                  </div>
                  <span className="custom-underline after:bg-white hidden sm:inline-block">
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

export default HelpSection;
