import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import WhiteSvg from "@/app/components/materialcomponents/SilverSvg";
import Title from "@/app/components/uicomponents/Title";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Artistcard = ({ data }) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 base-padding gap-3 w-full py-3">
      <AnimatePresence>
        {data.map((item) => {
          const displayName = item?.stageName || item?.name;
          return (
            <motion.div
              key={item._id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-center group flex-col bg-black w-24 md:w-44 h-auto relative p-1"
            >
              <WhiteSvg />
              <Link href={`/artists/${item._id}`} className="w-full h-full">
                <div className="h-20 md:h-44">
                  <Image
                    className="hover-image w-full h-full object-cover"
                    src={item.image}
                    width={400}
                    height={400}
                    quality={100}
                    priority
                    alt={item.name}
                  />
                </div>
                <article>
                  <Title className="text-lightgray group-hover:text-white duration-300">
                    {displayName}
                  </Title>
                  <NationalityDetails item={item} />
                  <RatingScore item={item} />
                </article>
              </Link>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const RatingScore = ({ item }) => {
  const metaScore = item?.ratingStats?.metaScore;
  return (
    <div
      className={`px-1 xl:px-2 w-fit absolute top-1 right-2 flex-center rounded text-[10px] xl:text-base font-bold mt-1 ${
        metaScore >= 75
          ? "bg-green/50 text-white"
          : metaScore >= 45
          ? "bg-purple/50 text-white"
          : "bg-pink/50 text-white"
      }`}
    >
      {metaScore}
    </div>
  );
};

export default Artistcard;
