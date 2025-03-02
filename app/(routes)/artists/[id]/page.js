import ArtistDetailsPage from "@/app/pages/artist/ArtistDetailsPage";
import { capitalizeTitle } from "@/app/helpers/helper";
import { BACKEND_URL } from "@/app/utils/urls";

const fetchSingleArtist = async (id) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/artists/${id}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!response.ok) {
      throw new Error("Failed to fetch artist");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching artist:", error);
    return null;
  }
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  try {
    const artistData = await fetchSingleArtist(id);
    if (!artistData) {
      return { title: "DJDB - Artist Not Found" };
    }
    const artistName = capitalizeTitle(artistData.stageName || artistData.name);
    return {
      title: `DJDB - ${artistName}`,
    };
  } catch (error) {
    return { title: "DJDB - Artist" };
  }
};

const SingleArtistPage = async ({ params }) => {
  const { id } = await params;
  const artistData = await fetchSingleArtist(id);

  if (!artistData) {
    return <div className="p-10 text-center">Artist not found</div>;
  }

  return <ArtistDetailsPage data={artistData} />;
};

export default SingleArtistPage;
