import Container from "@/shared/components/UI/Container";
import { RefObject } from "react";
import Link from "next/link";
import { paths } from "@/config/paths";
import { HELP_TABS } from "@/features/User/utils/isValidHelpTab";
import { useDelayedState } from "@/shared/hooks/useDelayedState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/UI/DropdownMenu";
import HelpDialog from "../../../HelpDialog/HelpDialog";
import { cn } from "@/shared/utils";

import { motion } from "motion/react";

const UpperHeader = ({
  ref,
  className,
}: {
  ref: RefObject<HTMLDivElement | null>;
  className?: string;
}) => {
  const { state: open, setFastState, setDelayedState } = useDelayedState(false);

  const onMouseEnter = () => {
    setFastState(true);
  };

  const onMouseLeave = () => {
    setDelayedState(false, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      ref={ref}
      className={cn(
        "flex items-center min-h-[56px] border-b-[1px] border-main z-header bg-white",
        className
      )}
    >
      <Container className="h-full items-center justify-end gap-5">
        <DropdownMenu open={open} onOpenChange={(open) => setFastState(open)}>
          <HelpDialog onClick={() => setFastState(false)}>
            <DropdownMenuTrigger
              onMouseOver={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span className="text-button-xs link-hover">Помощь</span>
            </DropdownMenuTrigger>
          </HelpDialog>

          <DropdownMenuContent
            className="min-w-[272px] z-over-header"
            align="end"
            onMouseOver={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link href={paths.help.getHref({ tab: HELP_TABS.REFUNDS })}>
              <DropdownMenuItem>Вовзрат / Обмен</DropdownMenuItem>
            </Link>
            <Link href={paths.help.getHref({ tab: HELP_TABS.DELIVERY })}>
              <DropdownMenuItem>Доставка и оплата</DropdownMenuItem>
            </Link>
            <Link href={paths.help.getHref({ tab: HELP_TABS.KASPI })}>
              <DropdownMenuItem>Рассрочка от KASPI RED</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href={paths.contacts.getHref()}
          className="text-button-xs link-hover"
        >
          Контакты
        </Link>
      </Container>
    </motion.div>
  );
};

export default UpperHeader;
