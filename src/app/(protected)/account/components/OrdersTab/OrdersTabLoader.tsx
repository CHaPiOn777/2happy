import { OrderCardLoader } from "@/features/Orders/components/OrderCard";
import { Skeleton } from "@/shared/components/UI/Skeleton";

const OrdersTabLoader = () => {
  return (
    <div className="flex w-full flex-col gap-12">
      <Skeleton className="w-[220px] h-[24px]" />
      <div className="space-y-4">
        <OrderCardLoader />
        <OrderCardLoader />
      </div>
    </div>
  );
};

export default OrdersTabLoader;
