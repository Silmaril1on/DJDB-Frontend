"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWarning } from "@/app/features/modalSlice";
import { BiLike, BiDislike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BACKEND_URL } from "@/app/utils/urls";

const ReviewLikeButtons = ({ review, artistId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [loading, setLoading] = useState(false);
  const [reactions, setReactions] = useState({
    likes: review.likes?.length || 0,
    dislikes: review.dislikes?.length || 0,
    hasLiked: review.likes?.includes(user?.id),
    hasDisliked: review.dislikes?.includes(user?.id),
  });

  const handleReaction = async (action) => {
    if (!user) {
      dispatch(setWarning(true));
      return;
    }
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/artists/${artistId}/reviews/${review._id}/react`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ action }),
        }
      );
      if (!response.ok) throw new Error("Failed to update reaction");
      const data = await response.json();
      setReactions({
        likes: data.likes,
        dislikes: data.dislikes,
        hasLiked: data.hasLiked,
        hasDisliked: data.hasDisliked,
      });
    } catch (error) {
      console.error("Error updating reaction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-center flex-row space-x-5 mt-2 *:flex-center *:flex-row [&_span]:text-sm [&_span]:font-secondary *:space-x-1 font-primary [&_svg]:cursor-pointer [&_svg]:text-lightgray [&_svg]:hover:*:text-white [&_svg]:duration-300">
      <div>
        {reactions.hasLiked ? (
          <BiSolidLike size={20} onClick={() => handleReaction("like")} />
        ) : (
          <BiLike size={20} onClick={() => handleReaction("like")} />
        )}
        <span>{reactions.likes}</span>
      </div>
      <div>
        {reactions.hasDisliked ? (
          <BiSolidDislike size={20} onClick={() => handleReaction("dislike")} />
        ) : (
          <BiDislike size={20} onClick={() => handleReaction("dislike")} />
        )}
        <span>{reactions.dislikes}</span>
      </div>
    </div>
  );
};

export default ReviewLikeButtons;
