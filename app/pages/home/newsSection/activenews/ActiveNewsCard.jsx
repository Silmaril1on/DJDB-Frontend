import { slideShow } from "@/app/animations/motionValues";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosFastforward } from "react-icons/io";
import Image from "next/image";
import Headline from "@/app/components/uicomponents/Headline";
import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import Paragraph from "@/app/components/uicomponents/Paragraph";

const ActiveNewsCard = ({ direction, news, activeIndex }) => {
  if (!news || news.length === 0 || !news[activeIndex]) {
    return (
      <div className="absolute h-[300px] lg:h-[550px] w-full flex items-center justify-center">
        <p className="text-white">No news available</p>
      </div>
    );
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={news[activeIndex]._id}
        variants={slideShow}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={direction}
        className="absolute h-[300px] lg:h-[550px] w-full group flex flex-col justify-center items-center"
      >
        <div className="relative w-full h-full">
          {news[activeIndex].clip ? (
            <video
              src={news[activeIndex].clip}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              width={1100}
              height={1100}
              quality={100}
              priority
              src={news[activeIndex].poster || "/placeholder-image.jpg"}
              alt={news[activeIndex].headline}
              className="w-full h-full object-cover"
            />
          )}
          <article className="absolute space-y-1 lg:space-y-2 inset-0 flex justify-end pb-[5%] px-3 lg:px-10 flex-col bg-gradient-to-t from-black to-60% to-transparent z-[3]">
            <Headline className="font-bold capitalize">
              {news[activeIndex].headline}
            </Headline>
            <Paragraph>{news[activeIndex].desc}</Paragraph>
            {news[activeIndex].newsLink && (
              <LinkComponent target="_blank" href={news[activeIndex].newsLink}>
                <span>More Details</span>
                <IoIosFastforward />
              </LinkComponent>
            )}
          </article>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ActiveNewsCard;
