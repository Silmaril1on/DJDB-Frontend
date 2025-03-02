import Title from "@/app/components/uicomponents/Title";
import Link from "next/link";

const RegPanel = () => {
  return (
    <div className="space-x-3 flex-center flex-row text-lightgray hover:*:text-white *:duration-300 *:font-normal z-[4] *:cursor-pointer">
      <Link href="/login">
        <Title>Login</Title>
      </Link>
      <Link href="/signup">
        <Title>Sign Up</Title>
      </Link>
    </div>
  );
};

export default RegPanel;
