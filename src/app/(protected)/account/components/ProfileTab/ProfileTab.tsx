import UserChangePasswordForm from "@/features/User/components/UserChangePasswordForm";
import UserUpdateForm from "@/features/User/components/UserUpdateForm";

import * as motion from "motion/react-client";

const ProfileTab = () => {
  return (
    <div className="w-full block">
      <div className="flex flex-col gap-8 md:gap-12 mb-section">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true, amount: 1 }}
          className="border border-main bg-gray-light py-4 px-5"
        >
          <h4 className="text-h5">Личные данные</h4>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <UserUpdateForm />
        </motion.div>
      </div>
      <div className="flex flex-col gap-8 md:gap-12 mt-section">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true, amount: 1 }}
          className="border border-main bg-gray-light py-4 px-5"
        >
          <h4 className="text-h5">Изменить пароль</h4>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <UserChangePasswordForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileTab;
