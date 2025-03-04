"use client";
import { staggerOpacity } from "@/app/animations/motionValues";
import { motion } from "framer-motion";
import socials from "@/app/localdb/socialmedia";

const SocialMedia = () => {
  return (
    <div className="flex flex-col pt-5 items-center lg:items-end space-y-2 font-secondary">
      <h1 className="text-green font-bold text-sm">FOLLOW US ON</h1>
      <motion.div
        variants={staggerOpacity}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex space-x-4 justify-end"
      >
        {socials.map((item) => {
          return (
            <motion.span
              key={item.id}
              variants={staggerOpacity}
              className="text-2xl p-2 rounded-full bg-green/20 text-white hover:text-green duration-300 cursor-pointer"
            >
              {item.icon}
            </motion.span>
          );
        })}
      </motion.div>
      <div className="flex items-center lg:items-end font-light flex-col text-sm text-lightgray ">
        <span>+995 005 18 85 47</span>
        <span className="hover:text-green duration-300">
          <a href="mailto:emdb.web.info@gmail.com">emdb.web.info@gmail.com</a>
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
