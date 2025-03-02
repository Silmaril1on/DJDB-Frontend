const RatingsIndicator = ({ data }) => {
  const rating = data?.rating;
  return (
    <div
      className={` w-6 h-6 rounded-sm text-white flex items-center justify-center text-xs font-secondary font-bold ${
        rating >= 8
          ? "bg-green/70"
          : rating >= 4
          ? "bg-purple/70"
          : "bg-pink/70"
      }`}
    >
      {rating}
    </div>
  );
};

export default RatingsIndicator;
