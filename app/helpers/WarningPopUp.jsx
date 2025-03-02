"use client";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import LoginWarning from "../components/LoginWarning";

const WarningPopUp = () => {
  const { warning } = useSelector((store) => store.modal);
  return <AnimatePresence>{warning && <LoginWarning />}</AnimatePresence>;
};

export default WarningPopUp;
