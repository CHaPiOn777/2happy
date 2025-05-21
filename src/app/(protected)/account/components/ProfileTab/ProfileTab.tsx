import UserChangePasswordForm from "@/features/User/components/UserChangePasswordForm";
import UserUpdateForm from "@/features/User/components/UserUpdateForm";
import Container from "@/shared/components/UI/Container";
import ChangePasswordTab from "./ChangePasswordTab";

const ProfileTab = () => {
  return (
    <Container className="block">
      <div className="flex flex-col gap-12">
        <div className="border border-main bg-gray-light py-4 px-5">
          <h4 className="text-h5">Личные данные</h4>
        </div>
        <UserUpdateForm />
      </div>
      <ChangePasswordTab />
    </Container>
  );
};

export default ProfileTab;
