import Container from "@/shared/components/UI/Container";
import Image from "next/image";
import { ReactNode } from "react";
import MenuSheet from "./MenuSheet/MenuSheet";
import BurgerIcon from "@/shared/components/icons/BurgerIcon";
import Link from "next/link";
import { paths } from "@/config/paths";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const MobileHeader = ({
  leftSlot,
  rightSlot,
}: {
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}) => {
  return (
    <AnimatedInView
      as="header"
      fallbackClassName="opacity-0"
      animations={{
        default: {
          initial: { y: -50, opacity: 0 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, type: "tween" },
          viewport: { once: true, amount: 0 },
        },
      }}
      className="fixed items-center z-header w-full min-h-[56px] sm:min-h-[80px] border-b border-b-main bg-white flex lg:hidden pt-safe-top"
    >
      <Container className="h-full justify-between items-center">
        <div className="flex items-center gap-2  md:gap-4 flex-1">
          <MenuSheet>
            <BurgerIcon className="size-10 md:size-12" />
          </MenuSheet>
          {leftSlot}
        </div>
        <Link href={paths.home.getHref()}>
          <Image
            className="hidden sm:block"
            width={260}
            height={72}
            src="/images/Header/tablet-logo.png"
            alt="tablet-log"
          />
          <Image
            className="block sm:hidden"
            width={56}
            height={48}
            src="/images/Header/mobile-logo.png"
            alt="tablet-log"
          />
        </Link>
        <div className="flex-1">{rightSlot}</div>
      </Container>
    </AnimatedInView>
  );
};

export default MobileHeader;
