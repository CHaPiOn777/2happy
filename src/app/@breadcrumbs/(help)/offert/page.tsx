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
import HomeIcon from "@/shared/components/icons/HomeIcon";

const OffertBreadcrumbs = () => {
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
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Публичная оферта</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default OffertBreadcrumbs;
