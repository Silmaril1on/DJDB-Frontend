import WhiteSvg from "@/app/components/materialcomponents/SilverSvg";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import Title from "@/app/components/uicomponents/Title";
import Image from "next/image";
import { truncateString } from "@/app/helpers/helper";
import { motion } from "framer-motion";
import { staggerOpacity } from "@/app/animations/motionValues";

const ThumbsNews = ({ news, activeIndex, setActiveIndex }) => {
  if (!news || news.length === 0) {
    return null;
  }

  const itemsPerPage = 3;
  const nextItems = Array.from(
    { length: Math.min(itemsPerPage, news.length) },
    (_, i) => news[(activeIndex + i + 1) % news.length]
  );

  const onActive = (id) => {
    const index = news.findIndex((item) => item._id === id);
    if (index !== -1) setActiveIndex(index);
  };

  return (
    <div className="w-[30%] hidden lg:block pl-3">
      <h1 className="text-green text-xl font-bold mb-2">Up Next</h1>
      <motion.div
        variants={staggerOpacity}
        initial="hidden"
        animate="visible"
        className="space-y-2 lg:space-y-4"
      >
        {nextItems.map((item) => {
          return (
            <motion.div
              variants={staggerOpacity}
              key={item._id}
              onClick={() => onActive(item._id)}
              className="flex flex-col h-20 md:h-40 2xl:h-36 bg-neutral-900 relative p-2 cursor-pointer"
            >
              <WhiteSvg />
              <div className="flex space-x-1 mb-1">
                <div className="w-[30%] h-10 lg:h-20">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.poster || "/placeholder-image.jpg"}
                    width={300}
                    height={300}
                    quality={100}
                    priority
                    alt="thumb"
                  />
                </div>
                <div className="w-[70%]">
                  <Title>{truncateString(item.headline, 60)}</Title>
                </div>
              </div>
              <Paragraph>{truncateString(item.desc, 100)}</Paragraph>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ThumbsNews;
