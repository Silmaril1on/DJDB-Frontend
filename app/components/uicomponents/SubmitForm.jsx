"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setSubmitModal } from "@/app/features/modalSlice";
import Close from "./Close";

const SubmitForm = () => {
  const { submitModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setSubmitModal({ isOpen: false, message: "" }));
  };

  return (
    <AnimatePresence>
      {submitModal.isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          exit={{ y: "-100%" }}
          className="fixed w-full flex-center top-0 font-bold text-2xl text-lightgray backdrop-blur-md"
        >
          <Close onClick={closeModal} className="absolute right-3" />
          <div className="px-5 py-5">
            <h1>{submitModal.message}</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmitForm;
