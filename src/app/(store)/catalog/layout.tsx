import Container from "@/shared/components/UI/Container";
import CatalogHeader from "../components/MainCatalog/CatalogHeader";

export const metadata = {
  title: "2HAPPY",
  description: "2HAPPY",
  keywords: "2happy, 2хэппи, магазин одежды алматы, магазин одежды",
  icons: {
    icon: "/logo_black.svg",
  },
};

const StoreLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="my-section flex flex-col gap-16">
      <CatalogHeader defaultName="Женская одежда и аксессуары" />
      {children}
    </div>
  );
};

export default StoreLayout;
