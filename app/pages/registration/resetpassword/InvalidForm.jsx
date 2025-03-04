import Button from "@/app/components/uicomponents/Button";
import Headline from "@/app/components/uicomponents/Headline";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import Link from "next/link";
import { FaLock } from "react-icons/fa";

const InvalidForm = ({ stage }) => {
  return (
    <>
      {stage === "INVALID_TOKEN" && (
        <div className="text-center space-y-4">
          <FaLock className="mx-auto text-pink" size={50} />
          <Headline className="uppercase font-bold text-pink">
            Invalid or Expired Link
          </Headline>
          <Paragraph>
            The password reset link is invalid or has expired.
          </Paragraph>
          <div className="pt-4">
            <Link href="/resetpassword" c>
              <Button>Request New Link</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default InvalidForm;
