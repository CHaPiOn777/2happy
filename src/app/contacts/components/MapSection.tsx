"use client";

import MapIcon from "@/shared/components/icons/MapIcon";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import TabTitle from "@/shared/components/UI/TabTitle";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";

const MapSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const defaultState = {
    center: [43.234464, 76.952616],
    zoom: 17,
  };
  return (
    <Section>
      <Container className="flex-col gap-8 md:gap-16 mb-section mt-[104px]">
        <TabTitle iconElement={<MapIcon />} titleClass="text-h4">
          Как добраться
        </TabTitle>
        <div className="flex flex-col gap-8">
          <h5 className="text-h5">
            Мы находимся в центре Алматы — 5 минут пешком от метро Абая
          </h5>
          {isLoading && <Skeleton className="w-full h-[680px]" />}
          <YMaps query={{ apikey: "9eac9648-e047-4646-a1ba-9a7a4ed7bdf0" }}>
            <Map
              defaultState={defaultState}
              className="h-[320px] sm:h-[450px] md:h-[550px] lg:h-[680px]"
              onLoad={() => {
                setIsLoading(false);
              }}
            >
              <Placemark geometry={[43.234464, 76.952616]} />
            </Map>
          </YMaps>
        </div>
      </Container>
    </Section>
  );
};

export default MapSection;
