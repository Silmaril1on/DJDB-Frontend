"use client";
import { forChildren, forParent } from "@/app/animations/motionValues";
import { motion } from "framer-motion";
import Title from "@/app/components/uicomponents/Title";
import Image from "next/image";
import Link from "next/link";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";

const FestivalList = ({ data }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={forParent}
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6"
    >
      {data.map((item) => {
        return (
          <motion.div
            variants={forChildren}
            className="p-1 relative bg-neutral-900"
            key={item._id}
          >
            <WhiteSvg />
            <Link href="/festivals">
              <div className="h-24 md:h-44 lg:h-32 xl:h-52">
                <Image
                  className="object-cover w-full h-full hover-image"
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  quality={80}
                />
              </div>
              <article>
                <Title>{item.name}</Title>
                <div className="flex space-x-2 items-center">
                  <div className="w-4 xl:w-6 h-4">
                    <Image
                      src={item.flag}
                      alt="country-flag"
                      width={100}
                      height={100}
                      className="w-full h-full mr-2 object-cover"
                    />
                  </div>
                  <span className="font-secondary text-[12px] md:text-sm text-lightgray">
                    {item.country}
                  </span>
                </div>
              </article>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FestivalList;
