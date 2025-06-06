"use client";

import Container from "@/shared/components/UI/Container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/UI/Sheet";
import { ReactNode, useState } from "react";
import { cn } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductServerCard, {
  ProductCardLoader,
} from "@/features/Products/components/Cards/ProductServerCard";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import CategoryLink from "@/features/Categories/components/CategoryLink";
import { TCategories } from "@/features/Categories/consts/consts";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { useRouter } from "next/navigation";
import { paths } from "@/config/paths";
import SearchForm, { SearchFormInput } from "./SearchForm";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";

const SearchSheet = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    ...getProductsQueryOptions({
      per_page: 4,
      order: "desc",
      orderby: "popularity",
    }),
    enabled: open,
  });

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    ...getCategoriesQueryOptions({
      per_page: 4,
      order: "desc",
      orderby: "count",
    }),
    enabled: open,
  });

  const handleSubmit = (data: SearchFormInput) => {
    setOpen(false);
    router.push(paths.search.getHref(data.search));
  };

  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger
        className={cn(
          "flex gap-2 group hover:text-gray-middle transition-colors"
        )}
        asChild
      >
        {children}
      </SheetTrigger>
      <SheetContent
        side="top"
        className="flex flex-col max-h-full z-over-header p-8 lg:p-10 bg-white"
      >
        <Container className="flex-col flex-1 overflow-hidden px-0 lg:px-6 gap-12 h-full">
          <SheetHeader className="relative flex flex-col gap-12 w-full">
            <SheetTitle className="hidden">Поиск</SheetTitle>
            <div className="flex flex-col-reverse items-start gap-6 lg:flex-col">
              <h2 className="text-h2Akira text-center w-full">2HAPPY</h2>
              <SheetClose className="relative opacity-100 bg-black lg:bg-white w-[48px] h-[48px] lg:w-auto lg:h-auto lg:absolute right-auto lg:right-0 top-0 lg:top-[20px] mt-0 [&_svg]:fill-white lg:[&_svg]:fill-black" />
            </div>
          </SheetHeader>
          <div className="flex flex-col gap-12 flex-1 overflow-y-auto">
            <SearchForm onSubmit={handleSubmit} />
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 h-full">
              <div className="flex flex-col gap-6 w-full max-w-[185px]">
                <h5 className="text-h5">Часто ищут</h5>
                {isLoadingCategories && (
                  <div className="flex flex-col gap-4 lg:gap-2 ">
                    <Skeleton className="w-[120px] h-3" />
                    <Skeleton className="w-[100px] h-3" />
                    <Skeleton className="w-[120px] h-3" />
                    <Skeleton className="w-[110px] h-3" />
                  </div>
                )}
                {categories?.items && !isLoadingCategories && (
                  <ul className="space-y-4 lg:space-y-0">
                    {categories?.items.map((category) => (
                      <li key={category.id} onClick={() => setOpen(false)}>
                        <CategoryLink
                          category={category.slug as TCategories}
                          name={category.name}
                          parentId={
                            category.parent > 0 ? category.parent : undefined
                          }
                          className="link-hover"
                        >
                          {category.name}
                        </CategoryLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h5 className="text-h5">Популярные товары</h5>
                {isLoadingProducts && (
                  <div className="grid grid-cols-4 grid-rows-[472px] lg:grid-rows-[464px] gap-x-6 h-full">
                    <ProductCardLoader />
                    <ProductCardLoader />
                    <ProductCardLoader />
                    <ProductCardLoader />
                  </div>
                )}
                {products?.items && !isLoadingProducts && (
                  <ul className="grid grid-cols-4 grid-rows-[472px] lg:grid-rows-[464px] h-full gap-x-6">
                    {products?.items.map((product) => (
                      <li
                        key={product.id}
                        className="w-full"
                        onClick={() => setOpen(false)}
                      >
                        <ProductServerCard
                          product={product}
                          showAttributes={false}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
