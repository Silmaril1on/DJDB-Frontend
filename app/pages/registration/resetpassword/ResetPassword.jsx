"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useResetPassword } from "@/app/hooks/useResetPassword";
import Button from "@/app/components/uicomponents/Button";
import ErrorMsg from "@/app/components/ErrorMsg";
import LogoBeat from "@/app/components/uicomponents/LogoBeat";
import Headline from "@/app/components/uicomponents/Headline";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaLock } from "react-icons/fa";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [stage, setStage] = useState(token ? "RESET" : "REQUEST");
  const [passwordError, setPasswordError] = useState("");

  const { requestReset, verifyToken, resetPassword, loading, error, success } =
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

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setPasswordError("");
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (password.length < 7) {
      setPasswordError("Password must be at least 7 characters long");
      return;
    }
    if (await resetPassword(token, password)) {
      setStage("SUCCESS");
    }
  };

  return (
    <section className="flex items-center z-10 overflow-hidden justify-evenly flex-col py-10 h-screen absolute inset-0 bg-black">
      <LogoBeat />

      <div className="form-container">
        {stage === "REQUEST" && (
          <>
            <div className="flex-center flex-col">
              <Headline className="uppercase font-bold text-green">
                Reset Password
              </Headline>
              <span className="font-primary font-light text-lightgray text-sm lg:text-lg text-center">
                Enter your email address and we'll send you a link to reset your
                password
              </span>
            </div>

            <form onSubmit={handleRequestReset} className="space-y-5 w-full">
              <div className="space-y-3">
                <div className="relative">
                  <CiMail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green"
                    size={18}
                  />
                  <input
                    className="pl-10 input-green"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="green-btn w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>

              <div className="text-center">
                <Link
                  href="/login"
                  className="text-green hover:underline text-sm"
                >
                  Back to Login
                </Link>
              </div>

              <ErrorMsg error={error} />
            </form>
          </>
        )}

        {stage === "EMAIL_SENT" && (
          <div className="text-center space-y-4">
            <FaLock className="mx-auto text-green" size={50} />
            <Headline className="uppercase font-bold text-green">
              Check Your Email
            </Headline>
            <p className="font-primary text-lightgray">
              We've sent a password reset link to{" "}
              <span className="text-green">{email}</span>
            </p>
            <p className="font-primary text-lightgray text-sm">
              If you don't see it, check your spam folder or
              <button
                onClick={handleRequestReset}
                className="text-green hover:underline ml-1"
              >
                click here to resend
              </button>
            </p>
            <div className="pt-4">
              <Link href="/login" className="green-btn inline-block">
                Back to Login
              </Link>
            </div>
          </div>
        )}

        {stage === "RESET" && (
          <>
            <div className="flex-center flex-col">
              <Headline className="uppercase font-bold text-green">
                Create New Password
              </Headline>
              <span className="font-primary font-light text-lightgray text-sm lg:text-lg text-center">
                Enter your new password below
              </span>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-5 w-full">
              <div className="space-y-3">
                <div className="relative">
                  <FaLock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green"
                    size={18}
                  />
                  <input
                    className="pl-10 input-green"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="relative">
                  <FaLock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green"
                    size={18}
                  />
                  <input
                    className="pl-10 input-green"
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                {passwordError && (
                  <div className="text-pink text-sm font-primary flex items-center">
                    <FaLock size={16} className="mr-1" />
                    {passwordError}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="green-btn w-full"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </Button>

              <ErrorMsg error={error} />
            </form>
          </>
        )}

        {stage === "INVALID_TOKEN" && (
          <div className="text-center space-y-4">
            <FaLock className="mx-auto text-pink" size={50} />
            <Headline className="uppercase font-bold text-pink">
              Invalid or Expired Link
            </Headline>
            <p className="font-primary text-lightgray">
              The password reset link is invalid or has expired.
            </p>
            <div className="pt-4">
              <Link href="/resetpassword" className="green-btn inline-block">
                Request New Link
              </Link>
            </div>
          </div>
        )}

        {stage === "SUCCESS" && (
          <div className="text-center space-y-4">
            <FaLock className="mx-auto text-green" size={50} />
            <Headline className="uppercase font-bold text-green">
              Password Reset Successful
            </Headline>
            <p className="font-primary text-lightgray">
              Your password has been successfully reset.
            </p>
            <div className="pt-4">
              <Link href="/login" className="green-btn inline-block">
                Login with New Password
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResetPassword;
