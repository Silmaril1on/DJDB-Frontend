import Spinner from "@/app/components/Spinner";
import { getUserDetails } from "@/app/features/userSlice";
import { fetchUserDetails, toggleFavorite } from "@/app/utils/api";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export const RemoveButton = ({ setFavorites, item }) => {
  const [load, setLoad] = useState({});
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const removeFavorite = async (e, artistId) => {
    e.preventDefault();
    e.stopPropagation();
    setLoad((prev) => ({ ...prev, [artistId]: true }));
    try {
      await toggleFavorite(artistId, user.token);
      setFavorites((prev) => prev.filter((artist) => artist._id !== artistId));
      const userResponse = await fetchUserDetails(user.token);
      dispatch(getUserDetails(userResponse));
    } catch (error) {
      console.error("Error removing favorite:", error);
    } finally {
      setLoad((prev) => ({ ...prev, [artistId]: false }));
    }
  };

  return (
    <button
      className="absolute right-2 top-2 text-2xl text-lightgray group-hover:text-white duration-300"
      onClick={(e) => removeFavorite(e, item._id)}
      disabled={load[item._id]}
    >
      {load[item._id] ? <Spinner /> : <MdFavorite />}
    </button>
  );
};
