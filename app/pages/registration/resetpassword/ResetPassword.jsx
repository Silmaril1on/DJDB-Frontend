"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useResetPassword } from "@/app/hooks/useResetPassword";
import LogoBeat from "@/app/components/uicomponents/LogoBeat";
import RequestForm from "./RequestForm";
import EmailSentForm from "./EmailSentForm";
import SuccessPass from "./SuccessPass";
import ResetForm from "./ResetForm";
import InvalidForm from "./InvalidForm";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [email, setEmail] = useState("");

  const [stage, setStage] = useState(token ? "RESET" : "REQUEST");

  const { requestReset, verifyToken, resetPassword, loading, error } =
    useResetPassword();

  useEffect(() => {
    if (token) {
      const validateToken = async () => {
        const isValid = await verifyToken(token);
        if (!isValid) {
          setStage("INVALID_TOKEN");
        }
      };
      validateToken();
    }
  }, [token]);

  const handleRequestReset = async (e) => {
    e.preventDefault();
    if (await requestReset(email)) {
      setStage("EMAIL_SENT");
    }
  };

  return (
    <section className="flex items-center z-10 overflow-hidden justify-evenly flex-col py-10 h-screen absolute inset-0 bg-black">
      <LogoBeat />
      <div className="form-container w-full md:w-2/6">
        <RequestForm
          stage={stage}
          error={error}
          email={email}
          loading={loading}
          setEmail={setEmail}
          click={handleRequestReset}
        />
        <EmailSentForm
          stage={stage}
          email={email}
          handleRequestReset={handleRequestReset}
        />
        <ResetForm
          stage={stage}
          error={error}
          token={token}
          loading={loading}
          setStage={setStage}
          resetPassword={resetPassword}
        />
        <InvalidForm stage={stage} />
        <SuccessPass stage={stage} />
      </div>
    </section>
  );
};

export default ResetPassword;
