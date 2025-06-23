import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Link from "next/link";

const OrdersNotFound = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 items-center w-full mt-6 sm:mt-8 md:mt-12 p-6 border border-gray-middle">
      <div className="text-center space-y-4">
        <h5 className="text-h5">Вы ещё не оформили ни одного заказа.</h5>
        <p className="text-gray-middle">
          Начните покупки и создайте свой первый заказ — стильные новинки уже
          ждут вас!
        </p>
      </div>

      <Button className="w-full sm:w-min" size="medium" asChild>
        <Link href={paths.catalog.getHref()}>
          Перейти в каталог
          <ArrowUpRightIcon />
        </Link>
      </Button>
    </div>
  );
};

export default OrdersNotFound;
