import ReviewsHeader from "./header/ReviewsHeader";
import ReviewsSection from "./reviewslist/ReviewsSection";

const ArtistReviews = ({ data }) => {
  return (
    <div>
      <ReviewsHeader data={data} />
      <ReviewsSection data={data} />
    </div>
  );
};

export default ArtistReviews;
