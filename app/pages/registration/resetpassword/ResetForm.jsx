import { useState } from "react";
import ResetHeadline from "./ResetHeadline";
import Button from "@/app/components/uicomponents/Button";
import ErrorMsg from "@/app/components/ErrorMsg";

const ResetForm = ({
  stage,
  resetPassword,
  setStage,
  loading,
  error,
  token,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    <>
      {stage === "RESET" && (
        <>
          <ResetHeadline
            title="Create New Password"
            desc="Enter your new password below"
          />
          <form
            onSubmit={handleResetPassword}
            className="space-y-5 w-full flex-center flex-col"
          >
            <div className="space-y-3 w-full">
              <div className="relative">
                <input
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
                <input
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

            <Button type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
            <ErrorMsg error={error} />
          </form>
        </>
      )}
    </>
  );
};

export default ResetForm;
