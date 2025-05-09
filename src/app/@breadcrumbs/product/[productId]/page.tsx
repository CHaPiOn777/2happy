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

const ProductBreadcrumbs = () => {
  const { productId } = useParams<{ productId: string }>();
  const [_, id] = productId.split("_");
  const { data, isFetching } = useQuery(getProductByIdQueryOptions(Number(id)));

  const sortedBreadcrumbs =
    data?.categories && data.categories.sort((a, b) => a.parent - b.parent);

  return (
    <Breadcrumbs>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={paths.home.getHref()}>Главная</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={paths.catalog.getHref()}>
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
