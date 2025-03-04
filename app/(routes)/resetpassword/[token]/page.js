import { redirect } from "next/navigation";

export default function ResetPasswordRedirect({ params }) {
  const { token } = params;
  redirect(`/resetpassword?token=${token}`);
}
