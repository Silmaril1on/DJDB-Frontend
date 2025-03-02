"use client";
import { useState } from "react";
import ArtistList from "./artists/ArtistList";
import FilterButtons from "./FilterButtons";
import SectionHeadline from "@/app/components/uicomponents/SectionHeadline";

const AllArtists = ({ initialData }) => {
  const [filter, setFilter] = useState({ country: "", sort: "default" });
  return (
    <div className="flex flex-col space-y-5">
      <SectionHeadline
        title="artists"
        description="Dive into the pulse of electronic music and explore a diverse lineup of DJs and producers shaping the global soundscape. From underground pioneers to festival headliners. Stay ahead of the beat and find your next favorite artist."
      />
      <FilterButtons data={initialData.artists} setFilter={setFilter} />
      <ArtistList initialData={initialData} filter={filter} />
    </div>
  );
};

export default AllArtists;
