import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";
import { paths } from "@/config/paths";
import AnimatedInView from "@/shared/components/Motion/AnimatedInView";

const AboutBreadcrumbs = () => {
  return (
    <AnimatedInView
      as="div"
      id="about-breadcrumbs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      fallbackClassName="opacity-0"
      viewport={{ once: true }}
    >
      <Breadcrumbs className="bg-main">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-white" href={paths.home.getHref()}>
              Главная
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>О нас</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    </AnimatedInView>
  );
};

export default AboutBreadcrumbs;
