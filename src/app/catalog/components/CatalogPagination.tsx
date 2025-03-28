import { Button } from "@/components/UI/Button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/UI/Pagination";
import { useCatalogStore } from "@/features/Products/store/productsStore";

const CatalogPagination = ({
  page,
  per_page,
  setPage,
}: {
  page: number;
  per_page: number;
  setPage: (page: number) => void;
}) => {
  const { totalItems, totalPages } = useCatalogStore();

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= 3) return [1, 2, 3, 4, "...", totalPages];

    if (page >= totalPages - 2)
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];

    return [1, "...", page - 1, page, page + 1, page + 2, "...", totalPages];
  };

  const pages = getPageNumbers();

  const handlePageChange = (newPage: number) => {
    if (typeof newPage === "number") {
      setPage(newPage);
    }
  };

  return (
    <>
      <Button className="w-full" variant="secondary" size="normal">
        Показать еще
      </Button>
      <div className="flex justify-between">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              />
            </PaginationItem>

            {pages.map((p, index) => (
              <PaginationItem key={index}>
                {p === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationButton
                    onClick={() => handlePageChange(+p)}
                    isActive={p === page}
                  >
                    {p}
                  </PaginationButton>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <span className="text-gray-middle text-button-xs">
          {Math.min(page * per_page, totalItems)} из {totalItems}
        </span>
      </div>
    </>
  );
};

export default CatalogPagination;
