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
    <section className="h-screen flex-center flex-col lg:max-h-[700px] bg-neutral-800 relative">
      <GalleryHeadline active={active} data={data} />
      <div className="w-full lg:w-[70%] lg:h-[550px] relative px-7 group flex-center flex-col">
        <div className="overflow-hidden w-full h-[400px] lg:h-full relative flex-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideShow}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-auto lg:h-full flex-center absolute"
              drag="x" // Enable horizontal dragging
              dragConstraints={{ left: 0, right: 0 }} // Restrict drag to horizontal axis
              onDragEnd={handleDragEnd} // Handle swipe gestures
              whileTap={{ cursor: "grabbing" }}
            >
              <Image
                className="w-auto h-full"
                src={gallery[active]}
                alt="gallery"
                width={1200}
                height={1200}
                priority
                quality={100}
                draggable={false}
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
