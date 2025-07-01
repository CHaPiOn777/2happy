"use client";

import UserChangePasswordForm from "@/features/User/components/UserChangePasswordForm";
import { useUser } from "@/shared/api/authApi";

const ChangePasswordTab = () => {
  const { data: user } = useUser();

  if (user?.meta?.auth_provider && user?.meta?.auth_provider != "email")
    return null;
  return (
    <div className="flex flex-col gap-12 mt-section">
      <div className="border border-main bg-gray-light py-4 px-5">
        <h4 className="text-h5">Изменить пароль</h4>
      </div>
      <UserChangePasswordForm />
    </div>
  );
};

export default ChangePasswordTab;
