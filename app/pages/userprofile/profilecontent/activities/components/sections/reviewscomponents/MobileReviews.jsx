import { formatBirthdate, truncateString } from "@/app/helpers/helper";
import { motion } from "framer-motion";
import Image from "next/image";
import WhiteSvg from "@/app/components/materialcomponents/SilverSvg";

const MobileReviews = ({ items }) => {
  const cardWidth = 155;
  const spacing = 8;
  const totalWidth = (items.length - 2) * (cardWidth + spacing);

  return (
    <div className="lg:hidden block">
      <motion.div
        style={{ gap: `${spacing}px`, cursor: "grab" }}
        drag="x"
        dragConstraints={{ left: -totalWidth, right: 0 }}
        dragElastic={0.1}
        className="flex flex-row"
      >
        {items.map((item) => {
          const displayName = item.artist.stageName || item.artist.name;
          return (
            <motion.div
              style={{ width: cardWidth }}
              className="relative flex-shrink-0 p-1 bg-black h-64"
              key={item.id}
            >
              <WhiteSvg />
              <div className="flex items-center space-x-2 border-b border-neutral-700 pb-1">
                <div className="w-10 h-10 relative">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.artist.image}
                    alt="artist"
                    width={200}
                    height={200}
                    quality={80}
                  />
                </div>
                <h1 className="text-lightgray text-sm">{displayName}</h1>
              </div>
              <div className="space-y-2">
                <h1 className="capitalize text-[10px] font-bold">
                  {truncateString(item.header, 30)}
                </h1>
                <span className="text-[8px] text-lightgray font-secondary">
                  {formatBirthdate(item.createdAt)}
                </span>
                <p className="text-[10px] text-lightgray font-secondary">
                  {truncateString(item.comment, 240)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MobileReviews;
