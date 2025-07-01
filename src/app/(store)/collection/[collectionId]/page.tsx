import Container from "@/shared/components/UI/Container";
import CollectionImages from "../components/CollectionImages";
import CollectionProducts from "../components/CollectionProducts/CollectionProducts";
import { Suspense } from "react";
import CollectionImagesLoader from "../components/CollectionImagesLoader";
import CollectionProductsLoader from "../components/CollectionProducts/CollectionProductsLoader";
import Section from "@/shared/components/UI/Section";
import AdditionCollectionSection from "../components/AdditionCollectionSection";

const CollectionPage = () => {
  return (
    <>
      <Section>
        <Container className="gap-6 lg:gap-12 my-section">
          <div className="w-full hidden md:block">
            <Suspense fallback={<CollectionImagesLoader className="w-full" />}>
              <CollectionImages />
            </Suspense>
          </div>

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
