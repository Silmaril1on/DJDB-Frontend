import StageName from "@/app/components/artistcomponents/StageName";
import WhiteSvg from "@/app/components/materialcomponents/SilverSvg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RatingsIndicator from "./sectioncomponents/RatingsIndicator";

const MobileSwiper = ({ items }) => {
  const cardWidth = 155;
  const spacing = 8;
  const totalWidth = (items.length - 2) * (cardWidth + spacing);
  const router = useRouter();

  return (
    <section className="block lg:hidden">
      <motion.div
        style={{ gap: `${spacing}px`, cursor: "grab" }}
        drag="x"
        dragConstraints={{ left: -totalWidth, right: 0 }}
        dragElastic={0.1}
        className="flex flex-row"
      >
        {items.map((item) => {
          const { rating, _id, image, name } = item;
          return (
            <motion.div
              style={{ width: cardWidth }}
              className="relative flex-shrink-0 p-1 bg-black"
              key={_id}
              onClick={() => router.push(`/artists/${_id}`)}
            >
              <WhiteSvg />
              <div className="h-44">
                <Image
                  className="w-full h-full object-cover"
                  src={image}
                  width={300}
                  height={300}
                  alt={name}
                  quality={100}
                  priority
                />
              </div>
              <article>
                <StageName item={item} className="leading-5 text-lightgray" />
                {rating && <RatingsIndicator data={item} />}
              </article>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default MobileSwiper;
