import { useEffect, useState } from "react";
import SliderButtons from "./SliderButtons";
import CardBody from "./CardBody";

const DesktopCards = ({ artists }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        // 2xl
        setItemsPerPage(6);
      } else if (width >= 1280) {
        // xl
        setItemsPerPage(5);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative hidden lg:flex-center flex-col">
      <CardBody
        artists={artists}
        itemsPerPage={itemsPerPage}
        currentIndex={currentIndex}
      />
      <SliderButtons
        artists={artists}
        itemsPerPage={itemsPerPage}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
};

export default DesktopCards;
