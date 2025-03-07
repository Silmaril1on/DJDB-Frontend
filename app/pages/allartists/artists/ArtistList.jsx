import { useState } from "react";
import LoadMoreButton from "./LoadMoreButton";
import Artistcard from "./Artistcard";
import { BACKEND_URL } from "@/app/utils/urls";

const ArtistList = ({ initialData, filter }) => {
  const [data, setData] = useState(initialData.artists);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMoreArtists = async () => {
    if (currentPage < totalPages && !isLoadingMore) {
      setIsLoadingMore(true);
      try {
        const nextPage = currentPage + 1;
        const response = await fetch(
          `${BACKEND_URL}/api/artists?page=${nextPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch more artists");
        }
        const newData = await response.json();

        // Ensure no duplicates
        const existingIds = new Set(data.map((artist) => artist._id));
        const uniqueNewArtists = newData.artists.filter(
          (artist) => !existingIds.has(artist._id)
        );

        setData((prevData) => [...prevData, ...uniqueNewArtists]);
        setCurrentPage(nextPage);
        setTotalPages(newData.totalPages);
      } catch (error) {
        console.error("Error loading more artists:", error);
      } finally {
        setIsLoadingMore(false);
      }
    }
  };

  const sortArtists = [...data]
    .filter((artist) => {
      const countryMatch = filter.country
        ? artist.country === filter.country
        : true;
      const genderMatch = filter.sortGender
        ? artist.sex === filter.sortGender
        : true;
      return countryMatch && genderMatch;
    })
    .sort((a, b) => {
      const aRating = a.ratingStats?.metaScore ?? 0;
      const bRating = b.ratingStats?.metaScore ?? 0;

      if (filter.sortName) {
        if (filter.sortName === "name-asc") return a.name.localeCompare(b.name);
        if (filter.sortName === "name-desc")
          return b.name.localeCompare(a.name);
      }
      if (filter.sortRating) {
        if (filter.sortRating === "rating-high") return bRating - aRating;
        if (filter.sortRating === "rating-low") return aRating - bRating;
      }
      return 0;
    });

  return (
    <div className="flex w-full py-5 bg-neutral-900">
      <div className="w-full lg:w-[70%] flex-center flex-col space-y-5">
        <Artistcard data={sortArtists} />
        <LoadMoreButton
          isLoadingMore={isLoadingMore}
          currentPage={currentPage}
          totalPages={totalPages}
          loadMoreArtists={loadMoreArtists}
        />
      </div>
    </div>
  );
};

export default ArtistList;
