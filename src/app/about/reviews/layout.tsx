import StoreLayout from "@/shared/components/Layout/StoreLayout/StoreLayout";

const ReviewsRouteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <StoreLayout>{children}</StoreLayout>;
};

export default ReviewsRouteLayout;
