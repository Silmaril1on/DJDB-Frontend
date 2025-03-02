"use client";
import Ratings from "../pages/home/artistsSection/desktop/ratingSection/Ratings";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const RatingPopUp = () => {
  const { selectedArtistId } = useSelector((store) => store.modal);
  return (
    <AnimatePresence>
      {selectedArtistId && <Ratings item={selectedArtistId} />}
    </AnimatePresence>
  );
};

export default RatingPopUp;
