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

const HelpBreadcrumbs = () => {
  const params = useSearchParams();

  const tab = params.get("tab");

  const validTab = isValidHelpTab(tab) ? tab : HELP_TABS.REFUNDS;

  return (
    <Breadcrumbs className="bg-main border-b-0">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-white" href={paths.home.getHref()}>
            Главная
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Политика конфиденциальности</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default HelpBreadcrumbs;
