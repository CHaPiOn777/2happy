import DividerSection from "./components/DividerSection";
import AboutSection from "./components/AboutSection";
import Main from "./components/Main";
import OurValues from "./components/OurValues";
import PartnersSection from "./components/PartnersSection";
import ProductsSection from "./components/ProductsSection";
import StatisticSection from "./components/StatisticSection";
import HistorySection from "./components/HistorySection";
import ReviewsSection from "./components/ReviewsSection";
import WhatsAppButton from "@/shared/components/Layout/MainLayout/components/WhatsAppButton";
import { getQueryClient } from "@/shared/api/queryClient";
import { getCommentsListQueryOptions } from "@/features/Reviews/api/reviewsApi";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Instagram from "@/shared/components/Layout/Instagram/Instagram";

const AboutPage = async () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(getCommentsListQueryOptions({ per_page: 3 }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main />
      <AboutSection />
      <OurValues />
      <DividerSection />
      <HistorySection />
      <ProductsSection />
      <StatisticSection />
      <ReviewsSection />
      <Instagram />
      <PartnersSection />
      <WhatsAppButton />
    </HydrationBoundary>
  );
};

export default AboutPage;
