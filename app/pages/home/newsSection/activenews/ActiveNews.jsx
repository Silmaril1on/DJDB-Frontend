import { useState } from "react";
import ActiveNewsCard from "./ActiveNewsCard";
import ActiveNewsButtons from "./ActiveNewsButtons";

const ActiveNews = ({ news, activeIndex, setActiveIndex }) => {
  const [direction, setDirection] = useState(1);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full lg:w-[70%]">
      <div className="relative h-[300px] lg:h-[550px] overflow-hidden">
        <ActiveNewsCard
          direction={direction}
          news={news}
          activeIndex={activeIndex}
        />

        <ActiveNewsButtons slideNext={slideNext} slidePrev={slidePrev} />
      </div>
    </div>
  );
};

export default ActiveNews;
