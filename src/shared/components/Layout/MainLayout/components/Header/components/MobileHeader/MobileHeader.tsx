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
          initial: { translateY: -50, opacity: 0 },
          whileInView: { opacity: 1, translateY: 0 },
          transition: { duration: 0.6, type: "tween" },
          viewport: { once: true, amount: 0 },
        },
      }}
      className="fixed flex items-center z-header w-full min-h-[80px] border-b border-b-main bg-white block lg:hidden"
    >
      <Container className="h-full justify-between items-center">
        <div className="flex items-center gap-4">
          <MenuSheet>
            <BurgerIcon />
          </MenuSheet>
          {leftSlot}
        </div>
        <Link href={paths.home.getHref()}>
          <Image
            width={260}
            height={72}
            src="/images/Header/mobile-logo.png"
            alt="mobile-log"
          />
        </Link>
        <div>{rightSlot}</div>
      </Container>
    </AnimatedInView>
  );
};

export default MobileHeader;
