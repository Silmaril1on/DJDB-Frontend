"use client";
import { motion } from "framer-motion";
import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import BackgroundContainer from "./components/BackgroundContainer";
import AddReview from "./components/AddReview";
import ReviewsCardBody from "./components/ReviewsCardBody";
import { FaCaretLeft } from "react-icons/fa";

const ReviewsHeader = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col px-[6%] pt-5 pb-14"
    >
      <BackgroundContainer data={data} />
      <LinkComponent href={`/artists/${data._id}`}>
        <FaCaretLeft size={20} />
        <span>Go Back</span>
      </LinkComponent>
      <ReviewsCardBody data={data} />
      <AddReview data={data} />
    </motion.div>
  );
};

export default ReviewsHeader;
