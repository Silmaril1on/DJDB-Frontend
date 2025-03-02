import HorizontalLine from "@/app/components/materialcomponents/HorizontalLine";
import Headline from "@/app/components/uicomponents/Headline";
const Header = () => {
  return (
    <div className="w-full lg:w-2/4 relative flex flex-col">
      <Headline>Account Settings</Headline>
      <span className="text-lightgray font-secondary text-sm lg:text-lg">
        Update Profile
      </span>
      <HorizontalLine color="green" className="mt-2" />
    </div>
  );
};

export default Header;
