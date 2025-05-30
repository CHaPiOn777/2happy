import Container from "@/shared/components/UI/Container";
import CollectionImages from "../components/CollectionImages";
import CollectionProducts from "../components/CollectionProducts";
import { Suspense } from "react";
import CollectionImagesLoader from "../components/CollectionImagesLoader";
import CollectionProductsLoader from "../components/CollectionProductsLoader";
import Section from "@/shared/components/UI/Section";
import AdditionCollectionSection from "../components/AdditionCollectionSection";

const CollectionPage = () => {
  return (
    <>
      <Section>
        <Container className="gap-12 my-section">
          <Suspense fallback={<CollectionImagesLoader className="w-full" />}>
            <CollectionImages className="w-1/2" />
          </Suspense>

          <Suspense fallback={<CollectionProductsLoader />}>
            <CollectionProducts />
          </Suspense>
        </Container>
      </Section>

      <AdditionCollectionSection />
    </>
  );
};

export default CollectionPage;
