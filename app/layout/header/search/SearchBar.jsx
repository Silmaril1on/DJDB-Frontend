import { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import SearchInput from "./components/SearchInput";
import Title from "@/app/components/uicomponents/Title";
import ArtistResult from "./components/ArtistResult";
import FestivalResult from "./components/FestivalResult";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [results, setResults] = useState({ artists: [], festivals: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3500";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedQuery.trim()) {
        setResults({ artists: [], festivals: [] });
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_URL}/api/search?query=${encodeURIComponent(debouncedQuery)}`
        );
        if (!response.ok) {
          throw new Error(`Search failed: ${response.statusText}`);
        }
        const data = await response.json();
        setResults(data);
        setShowResults(true);
      } catch (error) {
        console.error("Search error:", error);
        setResults({ artists: [], festivals: [] });
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [debouncedQuery]);

  const closeResult = () => {
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative w-full lg:w-[500px]"
      ref={searchRef}
    >
      <SearchInput
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        isLoading={isLoading}
      />
      {showResults && searchQuery.trim() !== "" && (
        <div className="absolute w-full mt-2 bg-neutral-900 z-50 max-h-96 overflow-y-auto">
          {results.artists.length === 0 && results.festivals.length === 0 ? (
            <Title className="p-1 text-green/80">No results found</Title>
          ) : (
            <>
              <ArtistResult results={results} closeResult={closeResult} />
              <FestivalResult results={results} closeResult={closeResult} />
            </>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default SearchBar;
