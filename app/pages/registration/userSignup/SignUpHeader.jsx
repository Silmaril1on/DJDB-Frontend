import Headline from "@/app/components/uicomponents/Headline";
import Link from "next/link";

const SignUpHeader = () => {
  return (
    <div className="flex-center flex-col ">
      <Headline className="text-green font-bold uppercase">Sign Up</Headline>
      <span className="font-primary font-light text-lightgray text-sm lg:text-lg">
        Already have an account?
        <Link
          className="text-green font-normal px-1 hover:underline"
          href="/login"
        >
          Login
        </Link>
      </span>
    </div>
  );
};

export default SignUpHeader;
