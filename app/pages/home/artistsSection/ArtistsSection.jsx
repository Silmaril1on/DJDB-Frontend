"use client";
import { useState, useEffect, useRef } from "react";
import Spinner from "@/app/components/Spinner";
import Headline from "@/app/components/uicomponents/Headline";
import DesktopCards from "./desktop/DesktopCards";
import MobileCards from "./mobile/MobileCards";
import { BACKEND_URL } from "@/app/utils/urls";

const ArtistsSection = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    const fetchArtists = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/artists/randomartists/`,
          {
            cache: "no-store",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch artists");
        }
        const data = await response.json();
        setArtists(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="relative lg:h-[500px] base-padding bg-black">
      <Headline className="text-green mb-3">Browse Artists</Headline>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MobileCards artists={artists} />
          <DesktopCards artists={artists} />
        </>
      )}
    </div>
  );
};

export default ArtistsSection;
