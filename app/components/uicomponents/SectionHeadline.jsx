"use client";
import { motion } from "framer-motion";
import { zoomIn } from "@/app/animations/motionValues";
import HorizontalLine from "@/app/components/materialcomponents/HorizontalLine";
import Paragraph from "@/app/components/uicomponents/Paragraph";

const SectionHeadline = ({ title, description, children }) => {
  return (
    <div className="w-full base-padding bg-black relative">
      <motion.h1
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="font-bold text-[70px] inline-block leading-none w-fit uppercase"
      >
        {title}
      </motion.h1>
      <div className="w-full lg:w-2/4">
        <Paragraph>{description}</Paragraph>
      </div>
      <span className="text-sm text-green font-bold italic">{children}</span>
      <HorizontalLine className="absolute bottom-0" />
    </div>
  );
};

export default SectionHeadline;
