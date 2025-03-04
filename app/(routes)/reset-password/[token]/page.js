import { redirect } from "next/navigation";

export default function ResetPasswordRedirect({ params }) {
  const { token } = params;

  // This is a server component, so we need to use redirect
  redirect(`/resetpassword?token=${token}`);
}
