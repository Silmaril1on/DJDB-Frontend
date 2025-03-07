import Spinner from "@/app/components/Spinner";

const SearchInput = ({ searchQuery, setSearchQuery, isLoading }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Your DJDB..."
        className="w-full placeholder:italic px-4 py-2 border-green/40 text-gray-700 bg-neutral-900"
      />
      {isLoading && (
        <div className="absolute flex-center right-0 top-[2px] h-full">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
