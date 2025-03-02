"use client";
import { setSelectedArtistId } from "@/app/features/modalSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import CardRatings from "../../home/artistsSection/desktop/cardHero/CardRatings";
import SocialsMedia from "./SocialsMedia";
import NationalityDetails from "@/app/components/artistcomponents/NationalityDetails";
import InfoLinks from "./InfoLinks";
import Paragraph from "@/app/components/uicomponents/Paragraph";
import { zoomIn } from "@/app/animations/motionValues";

const Info = ({ data }) => {
  const dispatch = useDispatch();
  const { label, name, stageName, desc, ratingStats, _id } = data;
  const displayName = stageName || name;

  const onRate = () => {
    dispatch(
      setSelectedArtistId({
        id: _id,
        name: name,
        ratingStats: ratingStats,
        stageName: stageName,
      })
    );
  };

  return (
    <div className="w-full lg:w-2/4 relative flex flex-col justify-center px-3 lg:pl-8 bg-neutral-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-2 pr-20"
      >
        <SocialsMedia data={data} />
        <Paragraph className="capitalize">{label}</Paragraph>
        <div className="relative lg:h-24">
          <motion.h1
            variants={zoomIn}
            initial="hidden"
            animate="visible"
            className="text-[40px] capitalize font-bold lg:text-[80px] leading-none lg:absolute -left-[30%]"
          >
            {displayName}
          </motion.h1>
        </div>
        <NationalityDetails className="text-lightgray" item={data} />
        <Paragraph className="font-light md:w-[70%] lg:w-full text-[11px] lg:text-sm">
          {desc}
        </Paragraph>
        <CardRatings item={data} onRate={onRate} />
      </motion.div>
      <InfoLinks data={data} />
    </div>
  );
};

export default Info;
