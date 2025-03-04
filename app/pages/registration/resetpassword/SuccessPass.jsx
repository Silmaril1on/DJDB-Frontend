import Button from "@/app/components/uicomponents/Button";
import Headline from "@/app/components/uicomponents/Headline";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import Link from "next/link";
import { FaLock } from "react-icons/fa";

const SuccessPass = ({ stage }) => {
  return (
    <>
      {stage === "SUCCESS" && (
        <div className="text-center space-y-4">
          <FaLock className="mx-auto text-green" size={50} />
          <Headline className="uppercase font-bold text-green">
            Password Reset Successful
          </Headline>
          <Paragraph>Your password has been successfully reset.</Paragraph>
          <div className="pt-4">
            <Link href="/login">
              <Button>Login with new password</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessPass;
