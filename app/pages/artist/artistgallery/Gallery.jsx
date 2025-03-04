"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideShow } from "@/app/animations/motionValues";
import Image from "next/image";
import GalleryHeadline from "./GalleryHeadline";
import Buttons from "./Buttons";

const Gallery = ({ data }) => {
  const gallery = data?.gallery;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (Math.abs(offset) > 100 || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  return (
    <section className="flex-center flex-col lg:max-h-[700px] bg-neutral-800 relative lg:py-10">
      <GalleryHeadline active={active} data={data} />
      <div className="w-full lg:w-[70%] lg:h-[550px] relative lg:px-7 group flex-center flex-col px-3 py-3">
        <div className="overflow-hidden w-full h-[400px] lg:h-full relative flex-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideShow}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full flex-center absolute"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
            >
              <Image
                className="object-contain"
                src={gallery[active]}
                alt="gallery"
                fill
                quality={85}
                draggable={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <Buttons handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </section>
  );
};

export default Gallery;
