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

const BestsellersBreadcrumbs = () => {
  return (
    <Breadcrumbs className="bg-main">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-white" href={paths.home.getHref()}>
            Главная
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Бестселлеры</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default BestsellersBreadcrumbs;
