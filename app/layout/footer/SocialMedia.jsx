"use client";
import { staggerOpacity } from "@/app/animations/motionValues";
import socials from "@/app/localdb/socialmedia";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <motion.div
      variants={staggerOpacity}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex-center space-x-4 px-5 py-2"
    >
      {socials.map((item) => {
        return (
          <motion.span
            key={item.id}
            variants={staggerOpacity}
            className="text-2xl text-lightgray hover:text-green duration-300 cursor-pointer"
          >
            {item.icon}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default SocialMedia;
