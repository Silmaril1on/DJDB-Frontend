import ArtistReviews from "@/app/pages/reviews/ArtistReviews";
import { BACKEND_URL } from "@/app/utils/urls";

const fetchReviews = async (id) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/artists/${id}/reviews`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { reviews: [] };
  }
};

export const metadata = {
  title: "DJDB - Add Review",
};

const ReviewsPage = async ({ params }) => {
  const { id } = await params;
  const artistReviews = await fetchReviews(id);

  return <ArtistReviews data={artistReviews} />;
};

export default ReviewsPage;
