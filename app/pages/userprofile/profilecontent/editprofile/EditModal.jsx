"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { modalAnimation } from "@/app/animations/motionValues";
import Close from "@/app/components/uicomponents/Close";
import Title from "@/app/components/uicomponents/Title";
import Button from "@/app/components/uicomponents/Button";
import GreenSvg from "@/app/components/materialcomponents/GreenSvg";
import Spinner from "@/app/components/Spinner";
import { BACKEND_URL } from "@/app/utils/urls";

const EditModal = ({ field, onClose, currentValue }) => {
  const [value, setValue] = useState(currentValue || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ [field.name]: value }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update profile");
      }
      window.location.href = "/myprofile";
    } catch (err) {
      setError(err.message || "Error updating profile. Please try again.");
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed -top-10 inset-0 bg-black/60 backdrop-blur-sm flex-center z-10 px-3"
    >
      <div className="bg-blue/40 backdrop-blur-3xl relative w-full md:w-[500px] p-5">
        <GreenSvg />
        <div
          onClick={onClose}
          className="absolute text-green top-3 right-3 z-10"
        >
          <Close />
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative space-y-4 flex-col z-[4] w-full"
        >
          <Title>Edit {field.label}</Title>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter your ${field.label.toLowerCase()}`}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Spinner />
                <span>Updating...</span>
              </>
            ) : (
              "Update"
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default EditModal;
