"use client";
import Title from "@/app/components/uicomponents/Title";
import { motion } from "framer-motion";

const BornSlider = ({ data }) => {
  const cardWidth = 176;
  const spacing = 15;
  const totalWidth = (data.length - 2) * (cardWidth + spacing);

  return (
    <div className="block lg:hidden overflow-hidden">
      <motion.div
        className="flex flex-row w-max"
        style={{ gap: `${spacing}px`, cursor: "grab" }}
        drag="x"
        dragConstraints={{ left: -totalWidth, right: 0 }}
        dragElastic={0.1}
      >
        {data.map((item) => {
          return (
            <motion.div
              style={{ width: cardWidth }}
              className="relative flex-center flex-col p-1"
              key={item.id}
            >
              <div className="h-44 w-44 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover hover-image pointer-events-none"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <Title className="text-lightgray">{item.name}</Title>
              <span className=" font-bold">{item.age}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default BornSlider;
