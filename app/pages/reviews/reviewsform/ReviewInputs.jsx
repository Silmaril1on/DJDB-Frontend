import Button from "@/app/components/uicomponents/Button";
import Headline from "@/app/components/uicomponents/Headline";
import { setReviewModal, setReviewsData } from "@/app/features/modalSlice";
import { BACKEND_URL } from "@/app/utils/urls";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReviewInputs = ({ item, setError }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { reviewsData } = useSelector((store) => store.modal);
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState("");
  const [comment, setComment] = useState("");
  const displayName = item.stageName || item.name;

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!header || !comment) {
      setError("Header and comment are required");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/artists/${item.id}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            header: header,
            comment: comment,
          }),
        }
      );
      if (!response.ok) throw new Error("Failed to submit review");
      const data = await response.json();
      dispatch(setReviewsData([...reviewsData, data.review]));
      setHeader("");
      setComment("");
      setLoading(false);
      dispatch(setReviewModal(null));
    } catch (err) {
      console.error("Error submitting review:", err);
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmitReview}
      className="relative z-10 flex-center flex-col space-y-4"
    >
      <Headline className="uppercase">{displayName}</Headline>
      <div className="space-y-3 mt-5">
        <input
          type="text"
          placeholder="Review Title"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <textarea
          value={comment}
          className="h-52"
          placeholder="Write your review..."
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <Button disabled={loading} type="submit">
        {loading ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

export default ReviewInputs;
