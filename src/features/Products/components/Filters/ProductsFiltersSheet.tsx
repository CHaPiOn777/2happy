import CloseIcon from "@/shared/components/icons/CloseIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import { Button } from "@/shared/components/UI/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/UI/Sheet";
import { ReactNode, useRef, useState } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import CheckboxListFilter from "./CheckboxListFilter";
import {
  TCheckboxFilterItem,
  TPriceRange,
  useFiltersStore,
} from "../../store/filtersStore";
import { useProductsColors, useProductsSizes } from "../../api/filtersApi";
import { sortSizes } from "../../utils/sortSizes";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const ProductsFiltersSheet = ({ trigger }: { trigger: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const {
    priceRange,
    colors,
    sizes,
    setSizes,
    setColors,
    setPriceRange,
    clearFilters,
  } = useFiltersStore();
  const { data: sizesData } = useProductsSizes();

  const isTablet = useMediaCustom("lg");

  const sizesValue = sortSizes<{ id: number; name: string }>(
    sizesData?.items.map((item) => ({
      id: item.id,
      name: item.name,
    })) ?? [],
    (value) => value.name
  );

  const sizesRef = useRef<TCheckboxFilterItem[]>([]);
  const sizesClearRef = useRef<() => void>(() => {});

  const { data: colorsData } = useProductsColors();
  const colorsValue =
    colorsData?.items.map((item) => ({
      id: item.id,
      name: item.name,
    })) ?? [];

  const colorsRef = useRef<TCheckboxFilterItem[]>([]);
  const colorsClearRef = useRef<() => void>(() => {});

  const priceRangeRef = useRef<TPriceRange | undefined>(undefined);
  const priceRangeClearRef = useRef<() => void>(() => {});

  const handleSubmit = () => {
    if (priceRangeRef.current) setPriceRange(priceRangeRef.current);
    if (colorsRef.current) {
      setColors(colorsRef.current);
    }
    if (sizesRef.current) setSizes(sizesRef.current);

    setOpen(false);
  };

  const handleClear = () => {
    sizesClearRef.current();
    colorsClearRef.current();
    priceRangeClearRef.current();

    clearFilters();

    priceRangeRef.current = undefined;

    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent
        side="left"
        className="w-full flex flex-col px-6 pr-4 py-10 max-w-[496px] z-over-header"
        overlayClassName="z-over-header"
      >
        <SheetHeader>
          <SheetTitle>Все фильтры</SheetTitle>
          <SheetDescription className="hidden">
            Список всех фильтров для товаров
          </SheetDescription>
          <SheetClose className="absolute right-6 top-[44px] mt-0">
            <CloseIcon />
          </SheetClose>
        </SheetHeader>
        <div className="h-full overflow-x-hidden overflow-y-auto pr-2">
          <Accordion type="multiple" className="w-full flex flex-col">
            <CheckboxListFilter
              name="Цвет"
              filterRef={colorsRef}
              defaultValue={colors}
              values={colorsValue}
              clearRef={colorsClearRef}
            />
            <CheckboxListFilter
              name="Размер"
              filterRef={sizesRef}
              defaultValue={sizes}
              values={sizesValue}
              clearRef={sizesClearRef}
            />
            <AccordionItem className="flex flex-col min-h-14" value="price">
              <AccordionTrigger className="text-h5">Цена</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 px-2">
                <PriceRangeFilter
                  defaultValues={priceRange}
                  onValueCommit={(value) =>
                    (priceRangeRef.current = {
                      min: Math.min(...value),
                      max: Math.max(...value),
                    })
                  }
                  clearRef={priceRangeClearRef}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter className="flex-col gap-2 sm:gap-0 sm:flex-row">
          <Button
            className="w-full"
            variant="secondary"
            size={isTablet ? "medium" : "large"}
            onClick={handleClear}
          >
            Очистить
          </Button>
          <Button
            className="w-full"
            size={isTablet ? "medium" : "large"}
            onClick={handleSubmit}
          >
            Применить
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProductsFiltersSheet;
