"use client";

import { ACCOUNT_TABS, isValidTab } from "@/features/User/utils/isValidTab";
import {
  PageTabs,
  PageTabsContent,
  PageTabsList,
  PageTabsTrigger,
} from "@/shared/components/UI/PageTabs";
import ProfileTab from "./components/ProfileTab/ProfileTab";
import { useSearchParams } from "next/navigation";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { useUser } from "@/shared/api/authApi";
import AddressesTab from "./components/AddressesTab/AddressesTab";
import OrdersTab from "./components/OrdersTab/OrdersTab";
import ProfileTabLoader from "./components/ProfileTab/ProfileTabLoader";
import AddressesTabLoader from "./components/AddressesTab/AddressesTabLoader";
import { ScrollArea } from "@/shared/components/UI/ScrollArea";
import Container from "@/shared/components/UI/Container";
import OrdersTabLoader from "./components/OrdersTab/OrdersTabLoader";

const AccountPage = () => {
  const params = useSearchParams();
  const setSearchParams = useQueryParams();

  const tab = params.get("tab");

  const defaultTab = isValidTab(tab) ? tab : ACCOUNT_TABS.PROFILE;

  const handleTabChange = (tab: string) => setSearchParams({ tab });

  const { data, isLoading } = useUser();

  return (
    <div>
      <PageTabs defaultValue={defaultTab} onValueChange={handleTabChange}>
        <ScrollArea scrollClassName="hidden" orientation="horizontal">
          <PageTabsList>
            <PageTabsTrigger value={ACCOUNT_TABS.PROFILE}>
              Профиль
            </PageTabsTrigger>
            <PageTabsTrigger value={ACCOUNT_TABS.ADDRESSES}>
              Адресная книга
            </PageTabsTrigger>
            <PageTabsTrigger value={ACCOUNT_TABS.ORDERS}>
              Мои заказы
            </PageTabsTrigger>
          </PageTabsList>
        </ScrollArea>
        <div className="my-12 sm:my-16 md:my-[80px] xl:my-section">
          <PageTabsContent className="w-full" value={ACCOUNT_TABS.PROFILE}>
            <Container>
              {!isLoading && data ? <ProfileTab /> : <ProfileTabLoader />}
            </Container>
          </PageTabsContent>
          <PageTabsContent className="w-full" value={ACCOUNT_TABS.ADDRESSES}>
            <Container>
              {!isLoading && data ? <AddressesTab /> : <AddressesTabLoader />}
            </Container>
          </PageTabsContent>
          <PageTabsContent className="w-full" value={ACCOUNT_TABS.ORDERS}>
            <Container>
              {!isLoading && data ? <OrdersTab /> : <OrdersTabLoader />}
            </Container>
          </PageTabsContent>
        </div>
      </PageTabs>
    </div>
  );
};

export default AccountPage;
