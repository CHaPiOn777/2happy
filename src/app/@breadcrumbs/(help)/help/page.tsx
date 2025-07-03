"use client";

import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";
import { paths } from "@/config/paths";
import { useSearchParams } from "next/navigation";
import {
  HELP_TABS,
  HELP_TABS_NAMES,
  isValidHelpTab,
} from "@/features/User/utils/isValidHelpTab";
import HomeIcon from "@/shared/components/icons/HomeIcon";

const HelpBreadcrumbs = () => {
  const params = useSearchParams();

  const tab = params.get("tab");

  const validTab = isValidHelpTab(tab) ? tab : HELP_TABS.REFUNDS;

  return (
    <Breadcrumbs className="bg-main border-b-0">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-white sm:inline-block hidden"
            href={paths.home.getHref()}
          >
            Главная
          </BreadcrumbLink>
          <BreadcrumbLink
            className="text-white inline-block sm:hidden"
            href={paths.home.getHref()}
          >
            <HomeIcon className="!size-6" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-white"
            href={paths.help.getHref({ tab: HELP_TABS.REFUNDS })}
          >
            Помощь
          </BreadcrumbLink>
        </BreadcrumbItem> */}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{HELP_TABS_NAMES[validTab]}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default HelpBreadcrumbs;
