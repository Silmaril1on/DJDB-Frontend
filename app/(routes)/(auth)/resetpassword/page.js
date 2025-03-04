import { Suspense } from "react";
import ResetPassword from "@/app/pages/registration/resetpassword/ResetPassword";

export const metadata = {
  title: "DJDB - Reset Password",
};

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
};

export default ResetPasswordPage;
