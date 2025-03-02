"use client";
import { motion } from "framer-motion";
import VerticalLine from "@/app/components/materialcomponents/VerticalLine";

const LeftSlideName = ({ data }) => {
  const { stageName, name } = data;
  const displayName = stageName || name;
  const metaScore = data.ratingStats.metaScore;

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none relative hidden xl:flex"
    >
      <div className="absolute bottom-[17%] -left-24 flex items-center justify-center w-auto">
        <h1
          className="text-lightgray relative w-96 -rotate-90 font-tetriary text-4xl italic"
          style={{ transformOrigin: "left bottom" }}
        >
          {displayName}
          <span className="text-4xl pl-4 text-white">{metaScore}</span>
        </h1>
      </div>
      <VerticalLine className="absolute -left-20 h-full" />
    </motion.div>
  );
};

export default LeftSlideName;
