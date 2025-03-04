import Button from "@/app/components/uicomponents/Button";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import ResetHeadline from "./ResetHeadline";

const EmailSentForm = ({ stage, handleRequestReset, email }) => {
  return (
    <>
      {stage === "EMAIL_SENT" && (
        <div className="text-center space-y-4 flex-center flex-col">
          <AiOutlineMail className="text-green" size={50} />
          <ResetHeadline
            title="CHECK YOUR EMAIL"
            desc={
              <>
                We've sent a password reset link to{" "}
                <span className="text-green underline">{email}</span>. If you
                don't see it, check your spam folder or
              </>
            }
          />
          <span onClick={handleRequestReset} className="link-green uppercase">
            click here to resend
          </span>
          <Link href="/login">
            <Button>back to login</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default EmailSentForm;
