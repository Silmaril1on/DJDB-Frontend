"use client";
import { useDispatch, useSelector } from "react-redux";
import { setReviewsData } from "@/app/features/modalSlice";
import { useEffect } from "react";
import ReviewsList from "./listcomponents/ReviewsList";
import ReviewSide from "./reviewside/ReviewSide";
import Header from "./Header";
import { BACKEND_URL } from "@/app/utils/urls";

const ReviewsSection = ({ data }) => {
  const dispatch = useDispatch();
  const { reviewsData } = useSelector((store) => store.modal);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/artists/${data._id}/reviews`
        );
        const revData = await response.json();
        dispatch(setReviewsData(revData.reviews));
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    fetchReviews();
  }, [data._id]);

  return (
    <div className="bg-neutral-900 text-lightgray px-3 2xl:px-[6%] pb-5">
      <Header data={reviewsData} />
      <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-2">
        <ReviewsList reviewsData={reviewsData} data={data} />
        <ReviewSide />
      </div>
    </div>
  );
};

export default ReviewsSection;
