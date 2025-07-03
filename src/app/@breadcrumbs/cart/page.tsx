import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";
import { paths } from "@/config/paths";
import HomeIcon from "@/shared/components/icons/HomeIcon";

const CartBreadcrumbs = () => {
  return (
    <Breadcrumbs className="border-b-0 bg-main">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-white sm:inline-block hidden"
            href={paths.home.getHref()}
          >
            Главная
          </BreadcrumbLink>
          <BreadcrumbLink
            className="text-white inline-block sm:hidden"
            href={paths.home.getHref()}
          >
            <HomeIcon className="!size-6" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Корзина</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

export default CartBreadcrumbs;
