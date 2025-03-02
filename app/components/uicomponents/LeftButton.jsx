import { FaCaretLeft } from "react-icons/fa";
import WhiteSvg from "../materialcomponents/WhiteSvg";

const LeftButton = ({ onClick }) => {
  return (
    <button
      className="text-lightgray bg-neutral-700/50 duration-300 hover:bg-neutral-800 hover:text-white py-3 px-1 relative z-[5] h-fit"
      onClick={onClick}
    >
      <WhiteSvg />
      <FaCaretLeft />
    </button>
  );
};

export default LeftButton;
