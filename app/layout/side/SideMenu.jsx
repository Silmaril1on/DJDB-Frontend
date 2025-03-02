"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { forParent, fromLeft, zoomIn } from "@/app/animations/motionValues";
import { setSideMenuModal } from "@/app/features/modalSlice";

const SideMenu = () => {
  const { sideMenuModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const closeSide = () => {
    dispatch(setSideMenuModal(false));
  };

  return (
    <AnimatePresence>
      {sideMenuModal && (
        <motion.div
          variants={fromLeft}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-10 inset-0 bg-neutral-900/70 backdrop-blur-md flex-center  z-10"
        >
          <motion.div
            variants={forParent}
            className="flex-center flex-col space-y-4 *:font-bold *:text-lightgray hover:*:text-white text-3xl *:duration-300"
          >
            <motion.div onClick={closeSide} variants={zoomIn}>
              <Link href="/news">News</Link>
            </motion.div>
            <motion.div onClick={closeSide} variants={zoomIn}>
              <Link href="/artists">Artists</Link>
            </motion.div>
            <motion.div onClick={closeSide} variants={zoomIn}>
              <Link href="/festivals">Festivals</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
