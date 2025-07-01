"use client";

import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbLoader,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";
import { paths } from "@/config/paths";
import { useQuery } from "@tanstack/react-query";
import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import React from "react";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import HomeIcon from "@/shared/components/icons/HomeIcon";

const ProductBreadcrumbs = () => {
  const { id } = useGetProductId("collectionId");
  const { data, isFetching } = useQuery(getProductByIdQueryOptions(Number(id)));

  const collectionCategory = data?.categories[data?.categories.length - 1];

  return (
    <Breadcrumbs className="bg-main">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-white xs:inline-block hidden"
            href={paths.home.getHref()}
          >
            Главная
          </BreadcrumbLink>
          <BreadcrumbLink
            className="text-white inline-block xs:hidden"
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
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-white"
            href={paths.catalog.collections.getHref("Готовые образы")}
          >
            Готовые образы
          </BreadcrumbLink>
        </BreadcrumbItem>
        {isFetching && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbLoader />
          </>
        )}
        {collectionCategory && !isFetching && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-white"
                href={paths.catalog.collections.category.getHref(
                  collectionCategory.id,
                  collectionCategory.slug,
                  collectionCategory.name,
                  collectionCategory.parent
                )}
              >
                {collectionCategory.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default ProductBreadcrumbs;
