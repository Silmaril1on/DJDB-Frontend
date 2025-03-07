"use client";
import { motion } from "framer-motion";
import { forChildren, forParent } from "@/app/animations/motionValues";
import Title from "@/app/components/uicomponents/Title";

const Desktop = ({ data }) => {
  return (
    <motion.div
      variants={forParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=" text-white hidden lg:flex-center flex-row w-full space-x-10 py-10 overflow-hidden"
    >
      {data.map((item) => {
        return (
          <motion.div variants={forChildren} key={item.id}>
            <div className=" w-52 h-52 rounded-full overflow-hidden">
              <img
                className="w-full h-full hover-image object-cover"
                src={item.image}
                alt="text"
              />
            </div>
            <article className="flex-center flex-col">
              <Title className="text-lightgray">{item.name}</Title>
              <span className=" font-bold">52</span>
            </article>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Desktop;
