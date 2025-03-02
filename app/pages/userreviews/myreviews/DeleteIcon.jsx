import { BACKEND_URL } from "@/app/utils/urls";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const DeleteIcon = ({ artistId, reviewId, onDelete }) => {
  const { user } = useSelector((store) => store.user);
  const [loading, setLoading] = useState(false);

  const onDeleteReview = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/artists/${artistId}/reviews/${reviewId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete review");
      onDelete(reviewId);
    } catch (error) {
      console.error("Error deleting review:", error);
    } finally {
      setLoading(false);
    }
  };

  return <MdDelete onClick={onDeleteReview} className="text-red-500" />;
};

export default DeleteIcon;
