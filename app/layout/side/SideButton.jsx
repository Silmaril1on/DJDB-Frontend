"use client";
import { setSideMenuModal } from "@/app/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const SideButton = () => {
  const dispatch = useDispatch();
  const { sideMenuModal } = useSelector((store) => store.modal);

  const onSideMenuOpen = () => {
    dispatch(setSideMenuModal(!sideMenuModal));
  };

  return (
    <div
      onClick={onSideMenuOpen}
      className="md:hidden cursor-pointer flex flex-col items-center gap-[2px] z-[4]"
    >
      <motion.div
        animate={{
          scaleX: sideMenuModal ? 0 : 1,
          y: sideMenuModal ? 0 : -3,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-[1.5px] bg-white w-6 origin-center"
      ></motion.div>

      <motion.div
        animate={{ opacity: sideMenuModal ? 1 : 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="h-[2px] bg-white w-6"
      ></motion.div>

      <motion.div
        animate={{
          scaleX: sideMenuModal ? 0 : 1,
          y: sideMenuModal ? 0 : 3,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-[2px] bg-white w-6 origin-center"
      ></motion.div>
    </div>
  );
};

export default SideButton;
