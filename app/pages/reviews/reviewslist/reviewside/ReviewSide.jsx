import UserRecents from "./UserRecents";
import { fetchRecentFavorites, fetchRecentRates } from "@/app/utils/api";

const ReviewSide = () => {
  return (
    <div className="hidden md:flex flex-row lg:flex-col w-full lg:w-[45%] space-x-4 lg:space-x-0 lg:space-y-10">
      <UserRecents
        title="Your Recent Favorites"
        fetchDataFn={fetchRecentFavorites}
      />
      <UserRecents
        showRating
        title="Your Recent Rates"
        fetchDataFn={fetchRecentRates}
      />
    </div>
  );
};

export default ReviewSide;
