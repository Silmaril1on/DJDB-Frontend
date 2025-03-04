"use client";
import { motion } from "framer-motion";
import Headline from "@/app/components/uicomponents/Headline";
import FestInfo from "./FestInfo";
import Image from "next/image";
import Title from "@/app/components/uicomponents/Title";
import { zoomIn } from "@/app/animations/motionValues";

const FestArticle = ({ item }) => {
  return (
    <article className="p-2 flex-center flex-col w-full">
      <motion.div
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Headline className="font-bold uppercase">{item.name}</Headline>
      </motion.div>
      <div className="flex-center space-x-2 text-lightgray">
        <Image
          className="w-10 h-6"
          src={item.flag}
          width={100}
          height={100}
          alt="flag"
        />
        <Title>{item.country}</Title> <Title>{item.city}</Title>
      </div>
      <div className="flex-center space-x-2">
        <span className="font-thin">Founders: </span>
        <span className="font-bold uppercase text-green">{item.founders}</span>
      </div>
      <div className="flex-center space-x-2">
        <span className="font-thin">Dates: </span>
        <span className="font-bold uppercase">{item.dates}</span>
      </div>
      <FestInfo item={item} />
    </article>
  );
};

export default FestArticle;
