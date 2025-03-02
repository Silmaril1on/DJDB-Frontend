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
          `${BACKEND_URL}/api/artists?page=${nextPage}&limit=10`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch more artists");
        }
        const newData = await response.json();
        setData((prevData) => [...prevData, ...newData.artists]);
        setCurrentPage(nextPage);
      } catch (error) {
        console.error("Error loading more artists:", error);
      } finally {
        setIsLoadingMore(false);
      }
    }
  };

  const sortArtists = [...data]
    .filter((artist) => {
      if (filter.country) {
        return artist.country === filter.country;
      }
      if (filter.sortGender) {
        return artist.sex === filter.sortGender;
      }
      return true;
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
