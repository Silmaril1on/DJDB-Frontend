import LeftButton from "@/app/components/uicomponents/LeftButton";
import RightButton from "@/app/components/uicomponents/RightButton";

const Buttons = ({ handleNext, handlePrev }) => {
  return (
    <div className="absolute inset-0 hidden lg:flex items-center justify-between z-[2] opacity-0 group-hover:opacity-100 duration-300">
      <LeftButton onClick={handlePrev} />
      <RightButton onClick={handleNext} />
    </div>
  );
};

export default Buttons;
