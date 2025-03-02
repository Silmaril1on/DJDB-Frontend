"use client";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import ReviewsForm from "../pages/reviews/reviewsform/ReviewsForm";

const ReviewPopUp = () => {
  const { reviewModal } = useSelector((store) => store.modal);
  return (
    <AnimatePresence>
      {reviewModal && <ReviewsForm item={reviewModal} />}
    </AnimatePresence>
  );
};

export default ReviewPopUp;
