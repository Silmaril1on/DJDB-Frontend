import SectionHeadline from "@/app/components/uicomponents/SectionHeadline";
import { useSelector } from "react-redux";

const Header = () => {
  const { userDetails } = useSelector((store) => store.user);
  const favLength = userDetails?.favorites?.length;

  return (
    <SectionHeadline
      title="favorites"
      description="A curated space for your top artists—track their latest releases, explore their discographies, and keep your favorites just a click away. Whether you're revisiting legends or discovering new sounds, this is your personal hub for the best in electronic music."
    >
      <span>You have {favLength} Favorite Artists </span>
    </SectionHeadline>
  );
};

export default Header;
