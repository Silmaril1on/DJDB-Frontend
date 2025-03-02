import { motion } from "framer-motion";
import Image from "next/image";
import StageName from "@/app/components/artistcomponents/StageName";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import MetaScoreColors from "@/app/components/artistcomponents/MetaScoreColors";
import { useRouter } from "next/navigation";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";

const MobileCards = ({ artists }) => {
  const cardWidth = 155;
  const spacing = 8;
  const totalWidth = (artists.length - 2) * (cardWidth + spacing);
  const router = useRouter();

  return (
    <div className="overflow-hidden block lg:hidden">
      <motion.div
        className="flex flex-row"
        style={{ gap: `${spacing}px`, cursor: "grab" }}
        drag="x"
        dragConstraints={{ left: -totalWidth, right: 0 }}
        dragElastic={0.1}
      >
        {artists.map((item) => {
          const { name, _id, image } = item;
          return (
            <motion.div
              style={{ width: cardWidth }}
              className="relative flex-shrink-0 p-1"
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
              <article className="space-y-1">
                <StageName item={item} className="leading-5" />
                <NationalityDetails item={item} />
                <MetaScoreColors item={item} />
              </article>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MobileCards;
