import LeftButton from "@/app/components/uicomponents/LeftButton";
import RightButton from "@/app/components/uicomponents/RightButton";

const SliderButtons = ({
  artists,
  itemsPerPage,
  currentIndex,
  setCurrentIndex,
}) => {
  const slideNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, artists?.length - itemsPerPage)
    );
  };

  const slidePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const isLeftVisible = currentIndex > 0;
  const isRightVisible = currentIndex + itemsPerPage < artists?.length;

  return (
    <div className="absolute flex-between *:z-10 w-full px-3">
      <div className="flex items-center">
        {isLeftVisible && <LeftButton onClick={slidePrev} />}
      </div>

      <div className="flex items-center">
        {isRightVisible && <RightButton onClick={slideNext} />}
      </div>
    </div>
  );
};

export default SliderButtons;
