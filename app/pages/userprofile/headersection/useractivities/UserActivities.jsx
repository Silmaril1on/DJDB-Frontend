"use client";
import Headline from "@/app/components/uicomponents/Headline";
import { motion } from "framer-motion";
import ActivityTitles from "./ActivityTitles";
import ActivityChart from "./ActivityChart";

const COLORS = ["#4affd7", "#ff3d81", "#9b59ff"];

const UserActivities = ({ data }) => {
  const activities = [
    {
      name: "Favorites",
      value: data.favorites.length,
      color: COLORS[0],
      link: "/favorites",
    },
    {
      name: "Reviews",
      value: data.reviews.length,
      color: COLORS[1],
      link: "/reviews",
    },
    {
      name: "Ratings",
      value: data.ratedArtists.length,
      color: COLORS[2],
      link: "/ratings",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-4 bg-black text-white"
    >
      <Headline className="text-lightgray">Your Activity Overview</Headline>
      <ActivityChart activities={activities} data={data} />
      <ActivityTitles activities={activities} />
    </motion.div>
  );
};

export default UserActivities;
