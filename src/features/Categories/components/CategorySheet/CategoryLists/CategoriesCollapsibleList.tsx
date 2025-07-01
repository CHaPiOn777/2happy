"use client";

import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
import {
  Collapsible,
  CollapsibleContent,
} from "@/shared/components/UI/Collapsible";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import { paths } from "@/config/paths";
import { Category } from "@/features/Categories/types";
import Link from "next/link";
import { useState } from "react";

const CategoriesCollapsibleList = ({
  categories,
  showCount,
  closeSheet,
}: {
  categories: Category[];
  showCount: number;
  closeSheet: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortedCategories = categories.sort(
    (a, b) => a.menu_order - b.menu_order
  );

  const mainList = sortedCategories.slice(0, showCount);
  const collapsibleList = sortedCategories.slice(showCount, -1);

  return (
    <div className="flex flex-col flex-[0,1,auto] overflow-hidden">
      <ScrollArea className="pb-[2px]" orientation="vertical">
        <ul className="space-y-2">
          {mainList.map((category) => (
            <li key={category.id}>
              <Link
                onClick={closeSheet}
                href={paths.catalog.category.getHref(
                  category.id,
                  category.slug,
                  category.name,
                  category.parent
                )}
                className="text-button-normal link-hover"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        {collapsibleList.length ? (
          <Collapsible open={isOpen}>
            <CollapsibleContent>
              <ul className="space-y-2 mt-2 pb-[2px]">
                {collapsibleList.map((category) => (
                  <li key={category.id}>
                    <Link
                      onClick={closeSheet}
                      href={paths.catalog.category.getHref(
                        category.id,
                        category.slug,
                        category.name,
                        category.parent
                      )}
                      className="text-button-normal link-hover"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ) : null}
      </ScrollArea>
      {collapsibleList.length ? (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="group flex items-center text-button-xs link-hover mt-4"
        >
          {isOpen ? "Свернуть" : "Ещё"}
          <ChevronDownIcon
            className={`group-hover:fill-gray ${isOpen && "rotate-180"}`}
          />
        </button>
      ) : null}
    </div>
  );
};

export default CategoriesCollapsibleList;
