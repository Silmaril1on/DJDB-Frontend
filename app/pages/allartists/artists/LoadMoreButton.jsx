import Spinner from "@/app/components/Spinner";

const LoadMoreButton = ({
  currentPage,
  totalPages,
  loadMoreArtists,
  isLoadingMore,
}) => {
  return (
    <>
      {currentPage < totalPages && (
        <button
          onClick={loadMoreArtists}
          className="green-btn w-fit"
          disabled={isLoadingMore}
        >
          {isLoadingMore ? <Spinner /> : "Load More"}
        </button>
      )}
    </>
  );
};

export default LoadMoreButton;
