"use client";
import { motion } from "framer-motion";

const Beats = () => {
  const bars = [9, 18, 15, 23, 18, 32, 23, 18, 24, 17, 10];

  return (
    <motion.div
      className="flex-center space-x-[2px]"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            delayChildren: 1,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {bars.map((height, index) => (
        <motion.div
          key={index}
          className="w-0.5 bg-green rounded"
          variants={{
            hidden: { height: 0 },
            visible: { height },
          }}
          animate={{
            height: [0, height, 10],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default Beats;
