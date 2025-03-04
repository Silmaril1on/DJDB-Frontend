import LeftButton from "@/app/components/uicomponents/LeftButton";
import RightButton from "@/app/components/uicomponents/RightButton";

const ActiveNewsButtons = ({ slidePrev, slideNext }) => {
  return (
    <div className="absolute w-full flex justify-between items-center inset-0 pb-10 md:pb-0 px-2">
      <LeftButton onClick={slidePrev} />
      <RightButton onClick={slideNext} />
    </div>
  );
};

export default ActiveNewsButtons;
