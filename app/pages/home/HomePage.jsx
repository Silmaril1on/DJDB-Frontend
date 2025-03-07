"use client";
import { useEffect } from "react";
import AddSection from "./additemsection/AddSection";
import ArtistsSection from "./artistsSection/ArtistsSection";
import BornTodaySection from "./borntodaysection/BornTodaySection";
import FestivalsSection from "./festivalssection/FestivalsSection";
import NewsSection from "./newsSection/NewsSection";
import Lenis from "lenis";

const HomePage = ({ newsData, bornData, festData }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <section className="flex flex-col bg-neutral-900 space-y-10 pb-10">
      <NewsSection data={newsData} />
      <ArtistsSection />
      <BornTodaySection data={bornData} />
      <FestivalsSection data={festData} />
      <AddSection />
    </section>
  );
};

export default HomePage;
