import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setWarning } from "@/app/features/modalSlice";
import { getUserDetails } from "@/app/features/userSlice";
import { fetchUserDetails, toggleFavorite } from "@/app/utils/api";
import Spinner from "@/app/components/Spinner";

const FavoriteIcon = ({ item }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (!user) {
        setIsFavorite(false);
        setIsFetching(false);
        return;
      }
      try {
        setIsFetching(true);
        const userData = await fetchUserDetails(user.token);
        setIsFavorite(userData.favorites.includes(item._id));
      } catch (error) {
        console.error("Error checking favorite status:", error);
      } finally {
        setIsFetching(false);
      }
    };
    checkFavoriteStatus();
  }, [user, item._id]);

  const onAddToFavorites = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      dispatch(setWarning(true));
      return;
    }
    if (isLoading) return;
    setIsLoading(true);
    try {
      const data = await toggleFavorite(item._id, user.token);
      setIsFavorite(data.isFavorite);
      const userData = await fetchUserDetails(user.token);
      dispatch(getUserDetails(userData));
    } catch (error) {
      console.error("Error toggling favorite:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex-center group-hover:text-white duration-300">
      <button
        className="*:text-xl flex-center"
        onClick={onAddToFavorites}
        disabled={isLoading}
      >
        {isFetching ? (
          <Spinner />
        ) : isLoading ? (
          <Spinner />
        ) : isFavorite ? (
          <MdFavorite />
        ) : (
          <MdFavoriteBorder />
        )}
      </button>
    </div>
  );
};

export default FavoriteIcon;
