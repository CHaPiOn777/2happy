"use client";

import {
  HELP_TABS,
  isValidHelpTab,
} from "@/features/User/utils/isValidHelpTab";
import Container from "@/shared/components/UI/Container";
import {
  PageTabs,
  PageTabsContent,
  PageTabsList,
  PageTabsTrigger,
} from "@/shared/components/UI/PageTabs";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { useSearchParams } from "next/navigation";
import RefundsTab from "./components/RefundsTab";
import Image from "next/image";
import DeliveryTab from "./components/DeliveryTab";
import KaspiTab from "./components/KaspiTab";

const HelpPage = () => {
  const params = useSearchParams();
  const setSearchParams = useQueryParams();

  const tab = params.get("tab");

  const defaultTab = isValidHelpTab(tab) ? tab : HELP_TABS.REFUNDS;

  const handleTabChange = (tab: string) => setSearchParams({ tab });

  return (
    <div>
      <div className="relative h-[320px] lg:h-[440px] xl:h-[480px] bg-help-gradient">
        <Image
          className="object-cover object-[50%,70%] -z-10"
          fill
          src="/images/Help/banner.jpg"
          quality={90}
          alt="help-banner"
        />
        <Container className="h-full items-center">
          <h1 className="text-h1 text-white uppercase">Помощь покупателю</h1>
        </Container>
      </div>
      <PageTabs value={defaultTab} onValueChange={handleTabChange}>
        <PageTabsList>
          <PageTabsTrigger value={HELP_TABS.REFUNDS}>
            Условия возврата и обмена
          </PageTabsTrigger>
          <PageTabsTrigger value={HELP_TABS.DELIVERY}>
            Доставка и оплата
          </PageTabsTrigger>
          <PageTabsTrigger value={HELP_TABS.KASPI}>
            Рассрочка от KASPI RED
          </PageTabsTrigger>
        </PageTabsList>
        <PageTabsContent
          className="w-full mt-section mb-section"
          value={HELP_TABS.REFUNDS}
        >
          <RefundsTab />
        </PageTabsContent>
        <PageTabsContent
          className="w-full mt-section mb-section"
          value={HELP_TABS.DELIVERY}
        >
          <DeliveryTab />
        </PageTabsContent>
        <PageTabsContent
          className="w-full mt-section mb-section"
          value={HELP_TABS.KASPI}
        >
          <KaspiTab />
        </PageTabsContent>
      </PageTabs>
    </div>
  );
};

export default HelpPage;
