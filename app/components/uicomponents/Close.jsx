import { IoMdClose } from "react-icons/io";

const Close = ({ onClick, className }) => {
  return (
    <div
      className={`cursor-pointer text-2xl hover:rotate-90 duration-300 text-green ${className}`}
      onClick={onClick}
    >
      <IoMdClose />
    </div>
  );
};

export default Close;
