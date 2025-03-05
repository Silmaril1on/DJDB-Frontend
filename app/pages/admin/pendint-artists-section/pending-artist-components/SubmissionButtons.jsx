import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@/app/components/Spinner";
import { setSubmitModal } from "@/app/features/modalSlice";
import { BACKEND_URL } from "@/app/utils/urls";

const SubmissionButtons = ({ item, setPendingData }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({
    approve: false,
    decline: false,
  });

  const handleSubmission = async (id, action) => {
    try {
      setLoading((prev) => ({ ...prev, [action]: true }));
      if (!item.data || !item.type) {
        throw new Error("Invalid submission data");
      }
      const response = await fetch(`${BACKEND_URL}/api/pending/${id}/handle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          action,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to handle submission");
      }
      await response.json();
      setPendingData((prev) =>
        prev.filter((submission) => submission._id !== id)
      );
      dispatch(
        setSubmitModal({
          isOpen: true,
          message:
            action === "approve"
              ? `Submission approved and added to database successfully. Email notification sent to ${item.submittedBy.email}`
              : `Submission declined. Email notification sent to ${item.submittedBy.email}`,
        })
      );
    } catch (error) {
      alert(error.message || "Error handling submission. Please try again.");
    } finally {
      setLoading((prev) => ({ ...prev, [action]: false }));
    }
  };

  return (
    <div className="md:space-x-2 flex-center flex-col space-y-2 md:space-y-0 md:flex-row *:w-20">
      <button
        onClick={() => handleSubmission(item._id, "approve")}
        disabled={loading.approve || loading.decline}
        className="green-btn flex-center"
      >
        {loading.approve ? <Spinner /> : "Approve"}
      </button>
      <button
        onClick={() => handleSubmission(item._id, "decline")}
        disabled={loading.approve || loading.decline}
        className="pink-btn flex-center"
      >
        {loading.decline ? <Spinner /> : "Decline"}
      </button>
    </div>
  );
};

export default SubmissionButtons;
