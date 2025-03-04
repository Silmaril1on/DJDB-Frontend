import Logo from "@/app/components/Logo";
import SocialMedia from "./SocialMedia";
import SpanText from "@/app/components/uicomponents/SpanText";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="flex-center flex-col pt-10 pb-3 bg-black">
      <div className="flex flex-col lg:flex-row justify-between w-full px lg:px-5 pb-6">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-5">
          <Logo className="w-20 h-20 text-3xl" />
          <Links />
        </div>
        <SocialMedia />
      </div>
      <SpanText>
        © DJDB 2025 - Website by{" "}
        <span className="text-white">Levan Chikovani</span>{" "}
      </SpanText>
    </footer>
  );
};

export default Footer;
