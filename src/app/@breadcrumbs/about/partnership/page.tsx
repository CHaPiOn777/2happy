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
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const PartnershipBreadcrumbs = () => {
  return (
    <AnimatedInView
      as="div"
      id="partnership-breadcrumbs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      fallbackClassName="opacity-0"
      viewport={{ once: true }}
    >
      <Breadcrumbs className="bg-main">
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
            <BreadcrumbLink className="text-white" href={paths.about.getHref()}>
              О нас
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Партнерам</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    </AnimatedInView>
  );
};

export default PartnershipBreadcrumbs;
