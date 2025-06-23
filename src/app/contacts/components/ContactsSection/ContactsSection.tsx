"use client";

import MailIcon from "@/shared/components/icons/MailIcon";
import MarketIcon from "@/shared/components/icons/MarketIcon";
import PhoneIcon from "@/shared/components/icons/PhoneIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import WhatsAppBoldIcon from "@/shared/components/icons/Social/WhatsAppBoldIcon";
import Container from "@/shared/components/UI/Container";
import { IconButton } from "@/shared/components/UI/IconButton";
import Section from "@/shared/components/UI/Section";
import TabTitle from "@/shared/components/UI/TabTitle";
import ContactsForm from "./ContactForm";
import Image from "next/image";
import ClockIcon from "@/shared/components/icons/ClockIcon";
import PinIcon from "@/shared/components/icons/PinIcon";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";

const ContactsSection = () => {
  return (
    <Section>
      <Container className="flex-col gap-8 md:gap-16 mt-section">
        <TabTitle
          titleClass="text-h4"
          iconElement={<MarketIcon className="size-6 md:size-10" />}
        >
          Контакты и обратная связь
        </TabTitle>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex gap-1">
              <PinIcon />
              <span>Адрес</span>
            </div>
            <p className="text-gray-dark">
              Zholdasbekova, 31 <br /> Almaty, Kazakhstan, 050059
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-1">
              <ClockIcon />
              <span>Режим работы</span>
            </div>
            <p className="text-gray-dark">
              Ежедневно с 10:00 до 20:00 <br />
              (время Алматы)
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:grid grid-cols-2 gap-6 lg:flex justify-between border border-main rounded-xs p-6">
          <a
            href="https://wa.me/77021657378"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <IconButton size="small" className="size-8 min-w-8 p-1">
              <WhatsAppBoldIcon />
            </IconButton>
            <span className="text-body1 underline">Whats App</span>
          </a>
          <a href="tel:+77021657378" className="flex items-center gap-4">
            <IconButton size="small" className="size-8 min-w-8 p-1">
              <PhoneIcon />
            </IconButton>
            <span className="text-body1 underline">+7–702–165–73–78</span>
          </a>
          <a
            href="https://www.instagram.com/2happy_kz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <IconButton size="small" className="size-8 min-w-8 p-1">
              <InstagramIcon />
            </IconButton>
            <span className="text-body1 underline">@2HAPPY_KZ</span>
          </a>
          <a
            href="mailto:2happy.almaty@gmail.com"
            className="flex items-center gap-4"
          >
            <IconButton size="small" className="size-8 min-w-8 p-1">
              <MailIcon />
            </IconButton>
            <span className="text-body1 underline">
              2happy.almaty@gmail.com
            </span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
          <div className="w-full max-w-[785px] flex flex-col gap-8 md:mt-12">
            <div className="space-y-4">
              <h5 className="text-h5">У вас есть вопросы или идеи?</h5>
              <p className="text-gray-dark">
                Заполните форму — мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <ContactsForm className="" onSubmit={() => {}} isPending={false} />
          </div>
          <div className="flex justify-end md:justify-normal md:max-w-[392px] w-full shrink-0">
            <ImageWithLoader
              wrapperClassName="relative right-0 md:justify-normal max-w-[280px] sm:max-w-[392px] w-full h-[400px] sm:h-[600px]"
              src="/images/Contacts/form.jpg"
              alt="form-image"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactsSection;
