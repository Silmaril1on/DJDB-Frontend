"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchUserFavorites } from "@/app/utils/api";
import Spinner from "@/app/components/Spinner";
import Card from "./card/Card";
import EmptyField from "@/app/components/EmptyField";
import Header from "./Header";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((store) => store.user);
  const [sortBy, setSortBy] = useState("default");
  const router = useRouter();

  useEffect(() => {
    const getFavorites = async () => {
      if (!user) {
        router.push("/login");
        return;
      }
      try {
        const data = await fetchUserFavorites(user.token);
        setFavorites(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };
    getFavorites();
  }, [user, router]);

  if (loading) {
    return (
      <div className="flex-center grow">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const sortedFavorites = [...favorites].sort((a, b) => {
    const aRating = a.ratingStats?.metaScore ?? 0;
    const bRating = b.ratingStats?.metaScore ?? 0;
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    if (sortBy === "rating-high") return bRating - aRating;
    if (sortBy === "rating-low") return aRating - bRating;
    return 0;
  });

  return (
    <div className="flex flex-col space-y-3">
      <Header />
      {favorites.length === 0 ? (
        <EmptyField>{user.username} You have No artists selected</EmptyField>
      ) : (
        <Card
          favorites={sortedFavorites}
          setFavorites={setFavorites}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
      )}
    </div>
  );
};

export default Favorites;
