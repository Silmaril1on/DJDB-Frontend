import { motion } from "framer-motion";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import Image from "next/image";
import WhiteSvg from "@/app/components/materialcomponents/WhiteSvg";
import Headline from "@/app/components/uicomponents/Headline";

const ReviewsCardBody = ({ data }) => {
  const displayName = data.stageName || data.name;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="inline-flex flex-col my-8"
    >
      <div className="w-52 h-52 p-1 relative">
        <WhiteSvg />
        <div className="overflow-hidden w-full h-full">
          <Image
            className="w-full h-full object-cover hover:scale-105 hover-image"
            src={data.image}
            alt={data.name}
            width={210}
            height={210}
            quality={80}
          />
        </div>
      </div>
      <div className="inline-block pt-3">
        <Headline className="capitalize">{displayName}</Headline>
        <NationalityDetails item={data} />
      </div>
    </motion.section>
  );
};

export default ReviewsCardBody;
