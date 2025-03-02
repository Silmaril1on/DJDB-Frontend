"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setError } from "../features/modalSlice";
import { IoMdClose } from "react-icons/io";
import { modalAnimation } from "../animations/motionValues";

const ErrorMsg = ({ error }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setError(null));
  };

  return (
    <AnimatePresence>
      {error && (
        <motion.div
          variants={modalAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="border-red-500 border font-secondary absolute right-10 bottom-10 text-red-500 text-xl font-light bg-red-400/30 px-5 py-2 flex-center space-x-3 z-20"
        >
          <h1>{error}</h1>
          <IoMdClose
            className="cursor-pointer hover:rotate-90 duration-300"
            onClick={handleClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMsg;
