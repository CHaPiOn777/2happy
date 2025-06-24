import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";
import { paths } from "@/config/paths";
import ContinueButton from "./components/ContinueButton";
import HomeIcon from "@/shared/components/icons/HomeIcon";

const CheckoutBreadcrumbs = () => {
  return (
    <Breadcrumbs className="bg-main border-b-0" rightSlot={<ContinueButton />}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-white xs:inline-block hidden"
            href={paths.home.getHref()}
          >
            Главная
          </BreadcrumbLink>
          <BreadcrumbLink
            className="text-white inline-block xs:hidden"
            href={paths.home.getHref()}
          >
            <HomeIcon className="!size-6" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Оформление заказа</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default CheckoutBreadcrumbs;
