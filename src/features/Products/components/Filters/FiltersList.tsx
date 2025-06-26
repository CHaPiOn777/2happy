"use client";

import CloseIcon from "@/shared/components/icons/CloseIcon";
import { useFiltersStore } from "../../store/filtersStore";
import { Separator } from "@/shared/components/UI/Separator";
import { usePaginationStore } from "../../store/paginationStore";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";

const FilterChip = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="flex gap-2 text-button-xs rounded-xs pr-3 p-2 bg-gray-light transition-colors hover:bg-gray"
      onClick={onClick}
    >
      <span>{text}</span>
      <CloseIcon className="w-4 h-4" />
    </button>
  );
};

const FiltersList = () => {
  const { clearPagination } = usePaginationStore();
  const {
    colors,
    deleteColor,
    sizes,
    deleteSize,
    clearFilters,
    filtersLength,
  } = useFiltersStore();

  if (!filtersLength) return null;

  const handleClear = () => {
    clearPagination();
    clearFilters();
  };

  return (
    <div className="flex flex-col gap-4">
      <Separator />
      <ScrollArea orientation="horizontal" scrollClassName="hidden">
        <div className="flex gap-2">
          {sizes.map((item) => (
            <FilterChip
              key={item.id}
              text={item.name}
              onClick={() => deleteSize(item.id)}
            />
          ))}
          {colors.map((item) => (
            <FilterChip
              key={item.id}
              text={item.name}
              onClick={() => deleteColor(item.id)}
            />
          ))}
          <button
            className="text-button-xs p-2 transition-colors rounded-xs hover:bg-gray text-nowrap"
            onClick={handleClear}
          >
            Удалить все
          </button>
        </div>
      </ScrollArea>
    </div>
  );
};

export default FiltersList;
