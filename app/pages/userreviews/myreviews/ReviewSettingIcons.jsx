"use client";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { zoomIn } from "@/app/animations/motionValues";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

const ReviewSettingIcons = ({ artistId, reviewId, onDelete, item }) => {
  const [active, setActive] = useState(false);

  const onHandleOption = () => {
    setActive(!active);
  };

  return (
    <div
      onMouseLeave={() => setActive(false)}
      className="absolute top-3 right-2 flex-center"
    >
      <span
        className="text-lightgray hover:scale-125 duration-300 cursor-pointer"
        onClick={onHandleOption}
      >
        <HiOutlineDotsVertical size={20} />
      </span>
      <Options
        artistId={artistId}
        reviewId={reviewId}
        onDelete={onDelete}
        active={active}
        item={item}
      />
    </div>
  );
};

const Options = ({ onDelete, active, artistId, reviewId, item }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute flex-center flex-row -left-12 -top-[2px] *:text-2xl text-lightgray hover:*:text-white *:cursor-pointer *:duration-300 z-0"
        >
          <EditIcon item={item} artistId={artistId} reviewId={reviewId} />
          <DeleteIcon
            onDelete={onDelete}
            artistId={artistId}
            reviewId={reviewId}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewSettingIcons;
