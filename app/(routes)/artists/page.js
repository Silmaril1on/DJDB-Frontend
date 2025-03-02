import AllArtists from "@/app/pages/allartists/AllArtists";
import { BACKEND_URL } from "@/app/utils/urls";

const fetchArtists = async (page = 1) => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/artists?page=${page}&limit=10`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch artists");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching artists:", error);
    return { artists: [], totalPages: 1, currentPage: 1 };
  }
};

export const metadata = () => {
  return {
    title: "DJDB - Artists",
  };
};

const AllArtistsPage = async () => {
  const data = await fetchArtists();
  return <AllArtists initialData={data} />;
};

export default AllArtistsPage;
