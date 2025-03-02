import Logo from "@/app/components/Logo";
import SideButton from "../side/SideButton";
import Navigation from "./navigation/Navigation";
import UserPanel from "./userpanel/UserPanel";

const Header = () => {
  return (
    <header className="flex-between px-3 lg:px-5 py-2">
      <SideButton />
      <div className="lg:hidden w-full z-0 absolute flex-center">
        <Logo className="w-8 h-8" />
      </div>
      <Navigation />
      <UserPanel />
    </header>
  );
};

export default Header;
