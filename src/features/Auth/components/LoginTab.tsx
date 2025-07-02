import { useState } from "react";
import LoginForm from "./LoginForm";
import ResetPasswordMailForm from "./ResetPassword/ResetPasswordMailForm";

const LoginTab = ({ onSuccess }: { onSuccess: () => void }) => {
  const [tab, setTab] = useState<"login" | "resetPassword">("login");

  if (tab === "login")
    return <LoginForm setTab={setTab} onSuccess={onSuccess} />;

  if (tab === "resetPassword")
    return <ResetPasswordMailForm setTab={setTab} onSuccess={onSuccess} />;
};

export default LoginTab;
