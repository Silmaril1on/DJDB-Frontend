const RatioButtons = ({ rating, setRating }) => {
  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="flex space-x-2 py-5">
      {[...Array(10)].map((_, index) => {
        const value = index + 1;
        return (
          <label key={value} className="relative cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={value}
              checked={rating === value}
              onChange={() => handleRatingChange(value)}
              className="sr-only"
            />
            <div
              className={`h-2 w-8 flex-center duration-300 ${
                value >= 8
                  ? "bg-green/80 hover:bg-green"
                  : value >= 4
                  ? "bg-purple/80 hover:bg-purple"
                  : "bg-pink/80 hover:bg-pink"
              } `}
            ></div>
          </label>
        );
      })}
    </div>
  );
};

export default RatioButtons;
