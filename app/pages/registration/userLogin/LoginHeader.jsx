import Headline from "@/app/components/uicomponents/Headline";
import Link from "next/link";

const LoginHeader = () => {
  return (
    <div className="flex-center flex-col">
      <Headline className="uppercase font-bold text-green ">Log In</Headline>
      <span className="font-primary font-light text-lightgray text-sm lg:text-lg">
        Dont have an account?{" "}
        <Link
          className="text-green font-normal px-1 hover:underline"
          href="/signup"
        >
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default LoginHeader;
