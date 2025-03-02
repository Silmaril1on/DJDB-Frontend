"use client";
import { motion } from "framer-motion";

const rippleVariants = {
  hidden: {
    top: "15px",
    left: "15px",
    width: "4px",
    height: "4px",
    opacity: 0,
  },
  visible: {
    top: 0,
    left: 0,
    width: "25px",
    height: "25px",
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      ease: [0, 0.2, 0.8, 1],
    },
  },
};

const Spinner = () => {
  return (
    <div className="relative inline-block w-8 h-8 text-green">
      <motion.div
        style={{
          position: "absolute",
          border: "2px solid currentColor",
          borderRadius: "50%",
          boxSizing: "border-box",
        }}
        variants={rippleVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        style={{
          position: "absolute",
          border: "3px solid currentColor",
          borderRadius: "50%",
          boxSizing: "border-box",
        }}
        variants={rippleVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

export default Spinner;
