import Container from "@/shared/components/UI/Container";
import CollectionImages from "../components/CollectionImages";
import CollectionProducts from "../components/CollectionProducts";
import { Suspense } from "react";
import CollectionImagesLoader from "../components/CollectionImagesLoader";
import CollectionProductsLoader from "../components/CollectionProductsLoader";

const CollectionPage = () => {
  return (
    <>
      <Container className="gap-12 my-section">
        <Suspense fallback={<CollectionImagesLoader className="w-full" />}>
          <CollectionImages className="w-1/2" />
        </Suspense>

        <Suspense fallback={<CollectionProductsLoader />}>
          <CollectionProducts />
        </Suspense>
      </Container>
    </>
  );
};

export default CollectionPage;
