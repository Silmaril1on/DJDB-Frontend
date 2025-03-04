import ErrorMsg from "@/app/components/ErrorMsg";
import Button from "@/app/components/uicomponents/Button";
import Link from "next/link";
import ResetHeadline from "./ResetHeadline";

const RequestForm = ({ stage, click, setEmail, error, email, loading }) => {
  return (
    <>
      {stage === "REQUEST" && (
        <>
          <ResetHeadline
            title="RESET PASSWORD"
            desc="Enter your email address and we'll send you a link to reset your
              password"
          />
          <form
            onSubmit={click}
            className="space-y-5 w-full flex-center flex-col"
          >
            <div className="space-y-3 w-full">
              <div className="relative">
                <input
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
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>
            <Link href="/login" className="hover-white">
              Back to Login
            </Link>
            <ErrorMsg error={error} />
          </form>
        </>
      )}
    </>
  );
};

export default RequestForm;
