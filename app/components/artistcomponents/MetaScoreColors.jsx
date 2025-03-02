const MetaScoreColors = ({ item, className }) => {
  const metaScore = item?.ratingStats?.metaScore;
  const totalScore = item?.ratingStats?.totalRatings;

  return (
    <div className="flex items-center space-x-1 lg:space-x-3 font-secondary">
      <div
        className={`px-2  flex-center rounded text-md font-bold ${
          metaScore >= 75
            ? "bg-green/20 text-green"
            : metaScore >= 45
            ? "bg-purple/20 text-purple"
            : "bg-pink/20 text-pink"
        }`}
      >
        {metaScore}
      </div>
      <span className={`text-[10px] lg:text-sm font-light  ${className}`}>
        {totalScore > 0 ? totalScore : ""}{" "}
        {totalScore > 0 ? "Listeners Score" : "No Ratings"}
      </span>
    </div>
  );
};

export default MetaScoreColors;
