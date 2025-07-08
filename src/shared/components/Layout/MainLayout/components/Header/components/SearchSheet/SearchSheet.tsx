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
import ProductCard, {
  ProductCardLoader,
} from "@/features/Products/components/Cards/ProductCard";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import CategoryLink from "@/features/Categories/components/CategoryLink";
import { TCategories } from "@/features/Categories/consts/consts";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { useRouter } from "next/navigation";
import { paths } from "@/config/paths";
import SearchForm, { SearchFormInput } from "./SearchForm";
import { DialogTriggerProps } from "@radix-ui/react-dialog";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";

const SearchSheet = ({
  children,
  triggerProps,
}: {
  children: ReactNode;
  triggerProps?: DialogTriggerProps;
}) => {
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
        {...triggerProps}
      >
        {children}
      </SheetTrigger>
      <SheetContent
        side="top"
        className="flex flex-col max-h-full z-over-header p-0 bg-white"
      >
        <Container className="flex-col flex-1 overflow-hidden py-8 pt-4 xs:pt-8 lg:py-10 lg:px-6 gap-12 h-full">
          <SheetHeader className="relative flex flex-col gap-12 w-full">
            <SheetTitle className="hidden">Поиск</SheetTitle>
            <div className="flex flex-col-reverse items-start gap-6 lg:flex-col">
              <h2 className="text-h2Akira text-center w-full">2HAPPY</h2>
              <SheetClose className="relative opacity-100 bg-black lg:bg-white w-[48px] h-[48px] lg:w-auto lg:h-auto lg:absolute right-auto lg:right-0 top-0 lg:top-[20px] mt-0 [&_svg]:fill-white lg:[&_svg]:fill-black" />
            </div>
          </SheetHeader>
          <div className="flex flex-col gap-12 flex-1 overflow-y-auto xs:pr-2">
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
              <div className="flex flex-col gap-4 w-full">
                <h5 className="text-h5">Популярные товары</h5>
                {isLoadingProducts && (
                  <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[472px] lg:grid-rows-[464px] gap-x-6 h-full">
                    <ProductCardLoader />
                    <ProductCardLoader />
                    <ProductCardLoader className="hidden md:flex" />
                    <ProductCardLoader className="hidden sm:flex" />
                  </div>
                )}
                <ScrollArea orientation="horizontal">
                  {products?.items && !isLoadingProducts && (
                    <ul className="grid grid-flow-col auto-cols-[calc((100vw-32px-4px)/2)] sm:auto-cols-[calc((100vw-16px)/3-32px)] md:grid-cols-4 grid-rows-[472px] lg:grid-rows-[464px] h-full gap-x-2 xs:gap-x-4 sm:gap-x-6 overflow-x-hidden pb-6 md:pb-0">
                      {products?.items.map((product) => (
                        <li
                          key={product.id}
                          className="w-full"
                          onClick={() => setOpen(false)}
                        >
                          <ProductCard
                            product={product}
                            showAttributes={false}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </ScrollArea>
              </div>
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
