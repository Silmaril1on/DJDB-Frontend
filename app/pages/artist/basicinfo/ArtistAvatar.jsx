"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "@/app/animations/motionValues";

const ArtistAvatar = ({ data }) => {
  return (
    <motion.div
      variants={zoomIn}
      initial="hidden"
      animate="visible"
      className="w-full relative h-[500px] lg:h-full lg:w-2/4"
    >
      <Image
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
        src={data.image}
        alt={data.name}
        priority
        quality={90}
      />
    </motion.div>
  );
};

export default ArtistAvatar;
