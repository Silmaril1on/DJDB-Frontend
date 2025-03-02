"use client";
import GreenSvg from "@/app/components/materialcomponents/GreenSvg";
import Close from "@/app/components/uicomponents/Close";
import { setEditReviewModal } from "@/app/features/modalSlice";
import { BACKEND_URL } from "@/app/utils/urls";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditReviewForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { editReviewModal } = useSelector((store) => store.modal);
  const [loading, setLoading] = useState(false);
  const artistId = editReviewModal?.artistId;
  const reviewId = editReviewModal?.reviewId;
  const [header, setHeader] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (editReviewModal) {
      setHeader(editReviewModal.header || "");
      setComment(editReviewModal.comment || "");
    }
  }, [editReviewModal]);

  const onEditReview = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/artists/${artistId}/reviews/${reviewId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          credentials: "include",
          body: JSON.stringify({ header, comment }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete review");
      dispatch(setEditReviewModal(null));
    } catch (error) {
      console.error("Error deleting review:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {editReviewModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex-center z-10 mx-3">
          <div className="relative bg-blue/50 w-full lg:w-[450px] flex-center">
            <GreenSvg />
            <form
              onSubmit={onEditReview}
              className="p-5 rounded-lg w-full space-y-4 text-white relative "
            >
              <Close
                className="absolute top-2 right-2"
                onClick={() => dispatch(setEditReviewModal(null))}
              />
              <h2 className="text-xl font-bold">Edit Review</h2>
              <label className="block">
                <span className="text-base text-gray-400">
                  Your Current Header
                </span>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-lightgray text-sm font-thin"
                  value={header}
                  onChange={(e) => setHeader(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="text-base text-gray-400">
                  Your Current Comment
                </span>
                <textarea
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-lightgray text-sm font-thin"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows="4"
                />
              </label>
              <div className="flex justify-between">
                <button type="submit" className="green-btn" disabled={loading}>
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditReviewForm;
