import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import Image from "next/image";
import RatingsIndicator from "./sectioncomponents/RatingsIndicator";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/animations/motionValues";

const DesktopSlider = ({ items }) => {
  return (
    <motion.div
      variants={staggerOpacity}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="hidden lg:flex flex-row space-x-2"
    >
      {items.map((item) => {
        const displayName = item.stageName || item.name;
        return (
          <motion.div
            variants={staggerOpacity}
            className="relative p-1 w-44 bg-black"
            key={item._id}
          >
            <Link href={`/artists/${item._id}`}>
              <WhiteSvg />
              <div className="w-full h-44">
                <Image
                  className="w-full h-full object-cover hover-image"
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  quality={100}
                  priority
                />
              </div>
              <article>
                <h1 className="capitalize text-lightgray">{displayName}</h1>
                {item.rating && <RatingsIndicator data={item} />}
              </article>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default DesktopSlider;
