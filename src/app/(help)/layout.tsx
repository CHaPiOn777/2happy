import AccountLayout from "@/shared/components/Layout/AccountLayout/AccountLayout";

const HelpPagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AccountLayout>{children}</AccountLayout>;
};

export default HelpPagesLayout;
