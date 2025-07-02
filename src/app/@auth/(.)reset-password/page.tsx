import ResetPasswordDialog from "@/features/Auth/components/ResetPassword/ResetPasswordDialog";

const ResetPassword = async ({
  searchParams,
}: {
  searchParams: Promise<{ key: string; login: string }>;
}) => {
  const { key, login } = await searchParams;

  return <ResetPasswordDialog />;
};

export default ResetPassword;
