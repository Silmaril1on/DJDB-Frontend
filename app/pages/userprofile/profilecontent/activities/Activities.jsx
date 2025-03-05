import MyProfileRecents from "./components/MyProfileRecents";
import ReviewsList from "./components/sections/reviewscomponents/ReviewsList";
import {
  fetchRecentFavorites,
  fetchRecentRates,
  fetchRecentReviews,
} from "@/app/utils/api";
import Insight from "./components/sections/sectioncomponents/Insight";

export const Activities = ({ data }) => {
  const favLength = data.favorites.length;
  const ratedLength = data.ratedArtists.length;
  const revLength = data.reviews.length;

  return (
    <div className="lg:px-[8%] space-y-10 py-10 w-full xl:w-[85%] overflow-hidden">
      <MyProfileRecents
        count={favLength}
        url={"/favorites"}
        title="Favorites"
        fetchData={fetchRecentFavorites}
      />
      <MyProfileRecents
        count={ratedLength}
        url={"/ratings"}
        title="Ratings"
        fetchData={fetchRecentRates}
      />
      <Insight data={data} />
      <ReviewsList
        count={revLength}
        url={"/reviews"}
        title="Reviews"
        fetchData={fetchRecentReviews}
      />
    </div>
  );
};
