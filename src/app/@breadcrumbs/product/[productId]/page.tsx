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
import { useParams } from "next/navigation";
import React, { Fragment } from "react";
import { sortCategories } from "@/features/Products/utils/sortCategories";

const ProductBreadcrumbs = () => {
  const { productId } = useParams<{ productId: string }>();
  const [_, id] = productId.split("_");
  const { data, isFetching } = useQuery(getProductByIdQueryOptions(Number(id)));

  const sortedBreadcrumbs = sortCategories(data?.categories);

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
          <BreadcrumbLink className="text-white" href={paths.catalog.getHref()}>
            Каталог
          </BreadcrumbLink>
        </BreadcrumbItem>
        {isFetching && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbLoader />
            <BreadcrumbSeparator />
            <BreadcrumbLoader />
          </>
        )}
        {sortedBreadcrumbs && (
          <>
            {sortedBreadcrumbs.map((item) => (
              <Fragment key={item.id}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-white"
                    href={paths.catalog.category.getHref(
                      item.id,
                      item.slug,
                      item.name,
                      item.parent
                    )}
                  >
                    {item.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Fragment>
            ))}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default ProductBreadcrumbs;
