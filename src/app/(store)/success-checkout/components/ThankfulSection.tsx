import MailIcon from "@/shared/components/icons/MailIcon";
import PhoneIcon from "@/shared/components/icons/PhoneIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import WhatsAppIcon from "@/shared/components/icons/Social/WhatsAppIcon";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Section from "@/shared/components/UI/Section";
import Link from "next/link";

const ThankfulSection = () => {
  return (
    <Section className="flex flex-col">
      <Container className="flex flex-col my-section">
        <ImageWithLoader
          wrapperClassName="absolute md:top-0 right-4 md:right-6 z-10 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[496px]"
          src="/images/Success-checkout/thanks.jpg"
          alt="thanks-image"
        />
        <div className="relative z-20 pt-8 pb-12 md:pb-24 flex flex-col gap-8 lg:items-center">
          <h1 className="text-h2 md:text-h1 uppercase">Спасибо за покупку!</h1>
          <p className="text-body2 text-gray-dark md:text-main md:text-h5 max-w-[366px] w-full md:ml-[160px] lg:ml-0">
            Ваш заказ успешно оплачен. <br /> Наш менеджер скоро свяжется с вами
            для обсуждения деталей доставки.
          </p>
        </div>
        <div className="flex flex-col gap-8 bg-main py-10 px-8 lg:px-20 text-white">
          <div className="relative mt-8 sm:mt-14 md:mt-0 pb-0 md:pb-20 lg:pb-0 flex justify-between md:gap-[105px]">
            <div className=" flex flex-col gap-6 md:gap-10 w-full md:max-w-[420px] w-full">
              <p>
                Подтверждение заказа уже в пути на Вашу почту. Отслеживайте
                статус и управляйте покупками в 
                <Link href="/" className="link-hover inline-block">
                  личном кабинете
                </Link>
              </p>
              <p className="relative md:absolute bottom-0 lg:relative">
                Если у вас возникли какие — либо вопросы, вы можете позвонить
                нам или написать:
              </p>
            </div>
            <div className="md:w-[400px] shrink-0 hidden md:block" />
          </div>
          <div className="w-full">
            <ul className="flex flex-col md:flex-row sm:grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 lg:flex lg:justify-between">
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-xs">
                  <PhoneIcon className="fill-white" />
                </div>
                <a
                  href="tel:+77021657378"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  +7–701–555–70–60
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-xs">
                  <MailIcon className="fill-white" />
                </div>
                <a
                  href="mailto:2happy.almaty@gmail.com"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  2happy.almaty@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-xs">
                  <WhatsAppIcon className="fill-white" />
                </div>
                <a
                  href="https://wa.me/77021657378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
                >
                  Whats App
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-xs">
                  <InstagramIcon className="fill-white" />
                </div>
                <a
                  href="https://www.instagram.com/2happy_kz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-body1 after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0"
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

export default ThankfulSection;
