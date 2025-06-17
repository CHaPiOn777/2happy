"use client";

import Container from "@/shared/components/UI/Container";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/UI/Tabs";
import DescriptionTab from "./DescriptionTab/DescriptionTab";
import { Suspense } from "react";
import DescriptionTabLoader from "./DescriptionTab/DescriptionTabLoader";

const AboutSection = () => {
  return (
    <div className="border-b border-main">
      <Container className="mt-8 sm:mt-[80px] mb-12 sm:mb-section">
        <Tabs className="w-full" defaultValue="description">
          <TabsList>
            <TabsTrigger value="description" className="text-h5">
              Описание
            </TabsTrigger>
            {/* <TabsTrigger value="reviews">Отзывы покупателей</TabsTrigger> */}
          </TabsList>
          <TabsContent className="h-full" value="description">
            <Suspense fallback={<DescriptionTabLoader />}>
              <DescriptionTab />
            </Suspense>
          </TabsContent>
          {/* <TabsContent className="h-full" value="reviews">
            <ReviewsTab />
          </TabsContent> */}
        </Tabs>
      </Container>
    </div>
  );
};

export default AboutSection;
