import Logo from "@/app/components/Logo";
import SideButton from "../side/SideButton";
import Navigation from "./navigation/Navigation";
import UserPanel from "./userpanel/UserPanel";

const Header = () => {
  return (
    <header className="flex-between relative px-3 lg:px-5 py-2">
      <SideButton />
      <div className="md:hidden w-full inset-0 z-0 absolute flex-center">
        <Logo className="w-8 h-8 text-sm" />
      </div>
      <Navigation />
      <UserPanel />
    </header>
  );
};

export default Header;
