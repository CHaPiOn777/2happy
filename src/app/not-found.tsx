"use client";

import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";

const NotFoundBreadcrumbs = () => {
  return (
    <Breadcrumbs className="bg-main">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-white" href={paths.home.getHref()}>
            Главная
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Страница не найдена</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumbs>
  );
};

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <NotFoundBreadcrumbs />
      <Section className="h-[552px] lg:h-[720px] xl:h-[800px]">
        <Image
          className="object-cover"
          fill
          src="/images/NotFound/not-found-bg.jpg"
          alt="not-found-image"
        />
        <Container>
          <div className="flex flex-col items-center justify-center gap-16 ml-20 my-20 lg:my-0">
            <div className="flex flex-col items-center gap-12 ">
              <div className="relative w-[390px] h-[160px] lg:w-[584px] lg:h-[240px]">
                <Image fill src="/images/NotFound/404.png" alt="404" />
              </div>
              <div className="flex flex-col gap-6 items-center">
                <h3 className="text-h3">Страница не найдена</h3>
                <span className="text-body1 text-center">
                  Возможно, она была <br />
                  перемещена или удалена
                </span>
              </div>
            </div>
            <Button size="large" asChild>
              <Link
                href={"/"}
                onClick={() => {
                  router.replace("/");
                }}
              >
                Вернуться на главную <ArrowUpRightIcon />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NotFound;
