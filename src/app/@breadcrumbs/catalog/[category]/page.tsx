"use client";

import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbLoader,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";
import { paths } from "@/config/paths";
import { useSearchParams } from "next/navigation";
import { useCategory } from "@/features/Categories/api/categoriesApi";
import HomeIcon from "@/shared/components/icons/HomeIcon";

const CatalogBreadcrumbs = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const parentId = searchParams.get("subTo");

  const { data: parentCategory, isFetching } = useCategory(Number(parentId));

  return (
    <Breadcrumbs className="bg-main">
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
          <BreadcrumbLink className="text-white" href={paths.catalog.getHref()}>
            Каталог
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {isFetching && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLoader />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {parentCategory && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-white"
                href={paths.catalog.category.getHref(
                  parentCategory.id,
                  parentCategory.slug,
                  parentCategory.name
                )}
              >
                {parentCategory.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default CatalogBreadcrumbs;
