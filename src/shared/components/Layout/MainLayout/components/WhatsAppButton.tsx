import WhatsAppBoldIcon from "@/shared/components/icons/Social/WhatsAppBoldIcon";
import { IconButton } from "@/shared/components/UI/IconButton";

const WhatsAppButton = () => {
  return (
    <div className="fixed right-12 bottom-12 md:right-[28px] md:bottom-[88px] lg:right-[180px] xl:right-[220px]  z-over-header">
      <IconButton
        className="rounded-full p-2 md:w-[72px] md:h-[72px] overflow-hidden"
        asChild
      >
        <a target="_blank" href="https://wa.me/77021657378">
          <WhatsAppBoldIcon className="!size-8 md:!size-12 " />
        </a>
      </IconButton>
    </div>
  );
};

export default WhatsAppButton;
