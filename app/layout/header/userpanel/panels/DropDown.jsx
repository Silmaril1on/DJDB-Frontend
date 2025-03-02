import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const DropDown = ({ active }) => {
  return (
    <div>
      {active ? <IoMdArrowDropup size={25} /> : <IoMdArrowDropdown size={25} />}
    </div>
  );
};

export default DropDown;
