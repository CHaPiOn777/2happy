"use client";

import Breadcrumbs from "@/shared/components/Layout/MainLayout/components/Breadcrumbs/Breadcrumbs";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/UI/Breadcrumb";
import { paths } from "@/config/paths";
import Image from "next/image";
import Container from "@/shared/components/UI/Container";
import { Button } from "@/shared/components/UI/Button";
import LogoutIcon from "@/shared/components/icons/LogoutIcon";
import { useUser } from "@/shared/api/authApi";
import { useLogout } from "@/features/Auth/hooks/useLogout";
import HomeIcon from "@/shared/components/icons/HomeIcon";

const AccountBreadcrumbs = () => {
  const { data } = useUser();

  const { handleLogout } = useLogout();
  return (
    <div className="flex flex-col relative bg-account-breadcrumbs">
      <Image
        fill
        className="object-cover object-center -z-10"
        src="/images/Account/breadcrumbs-bg.png"
        alt="breadcrumbs-bg"
      />
      <Breadcrumbs className="border-b-0">
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
            <BreadcrumbPage>Аккаунт</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
      <Container>
        <div className="w-full flex items-center justify-between mt-8 mb-8 md:mt-6 md:mb-12">
          <h2 className="text-h3 text-white">
            Личный кабинет, {data?.name.split(" ")[0]}{" "}
          </h2>
          <Button
            className="text-white"
            variant="tertiary"
            size="small"
            onClick={handleLogout}
          >
            Выйти
            <LogoutIcon className="fill-white" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AccountBreadcrumbs;
