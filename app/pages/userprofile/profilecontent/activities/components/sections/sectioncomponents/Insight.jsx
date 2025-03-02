"use client";
import LinkComponent from "@/app/components/uicomponents/LinkComponent";
import { motion } from "framer-motion";
import { FaCaretRight } from "react-icons/fa";

const RatingInsights = ({ data }) => {
  const myInsights = data.ratedArtists;

  const ratingCounts = Array(10).fill(0);
  myInsights.forEach(({ rating }) => {
    if (rating >= 1 && rating <= 10) {
      ratingCounts[rating - 1] += 1;
    }
  });

  const totalRatings = myInsights.length || 1;
  const ratingData = ratingCounts
    .map((count, index) => ({
      rating: index + 1,
      count,
      percentage: (count / totalRatings) * 100,
    }))
    .reverse();

  return (
    <div className="base-padding bg-neutral-900">
      <LinkComponent href="/ratings">
        <span>My Insigths</span>
        <FaCaretRight />
      </LinkComponent>
      {ratingData.map(({ rating, count, percentage }) => (
        <div key={rating} className="flex items-center gap-2 my-1 lg:my-2">
          <span className="text-white font-bold w-6">{rating}</span>
          <motion.div
            initial={{ width: 0 }}
            viewport={{ once: true }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={` h-6 rounded-sm ${
              rating >= 7 ? "bg-green" : rating >= 4 ? "bg-purple" : "bg-pink"
            }`}
          />
          <span className="text-white text-[12px] font-secondary">
            {percentage.toFixed(1)}% ({count})
          </span>
        </div>
      ))}
    </div>
  );
};

export default RatingInsights;
