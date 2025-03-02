import Close from "@/app/components/uicomponents/Close";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@/app/components/Spinner";
import { modalAnimation } from "@/app/animations/motionValues";
import { setSelectedArtistId } from "@/app/features/modalSlice";
import MetaScoreColors from "@/app/components/artistcomponents/MetaScoreColors";
import RatioButtons from "./RatioButtons";
import Scores from "./Scores";
import ErrorMsg from "@/app/components/ErrorMsg";
import BorderSvg from "@/app/components/materialcomponents/WhiteSvg";
import { BACKEND_URL } from "@/app/utils/urls";

const Ratings = ({ item, onClose }) => {
  const { user } = useSelector((store) => store.user);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserRating = async () => {
      if (!user) return;
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/artists/${item.id}/rating`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.rating) {
            setRating(data.rating);
          }
        }
      } catch (error) {
        console.error("Error fetching user rating:", error);
      }
    };
    fetchUserRating();
  }, [item, user]);

  const handleSubmit = async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${BACKEND_URL}/api/artists/${item.id}/rate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ score: rating }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      dispatch(setSelectedArtistId(null));
    }
  };

  return (
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex-center z-50 font-secondary"
    >
      <div className="bg-blue/40 backdrop-blur-3xl p-8 rounded-lg relative">
        <BorderSvg color="green" />
        <div className="absolute top-4 right-4">
          <Close
            className="text-green"
            onClick={() => dispatch(setSelectedArtistId(null))}
          />
        </div>
        <div className="flex flex-col items-center space-y-4 py-4 px-8">
          <Scores rating={rating} item={item} />
          <MetaScoreColors item={item} />
          <RatioButtons rating={rating} setRating={setRating} />
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <button
            className="green-btn z-[2] relative"
            onClick={handleSubmit}
            disabled={loading || !rating}
          >
            {loading ? <Spinner /> : "Submit Rating"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Ratings;
