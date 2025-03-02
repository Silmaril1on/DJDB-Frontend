"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { modalAnimation } from "@/app/animations/motionValues";
import Image from "next/image";
import Title from "@/app/components/uicomponents/Title";
import Close from "@/app/components/uicomponents/Close";
import Button from "@/app/components/uicomponents/Button";
import GreenSvg from "@/app/components/materialcomponents/GreenSvg";
import Spinner from "@/app/components/Spinner";
import { BACKEND_URL } from "@/app/utils/urls";

const ImageUploadModal = ({ onClose, currentImage }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(currentImage || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size must be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImage(reader.result);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image to upload");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BACKEND_URL}/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ image }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upload image");
      }
      window.location.href = "/myprofile";
    } catch (err) {
      setError(err.message || "Error uploading image. Please try again.");
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed -top-6 inset-0 bg-black/60 backdrop-blur-sm flex-center z-20"
    >
      <div className="bg-blue/40 backdrop-blur-3xl p-8 rounded-lg relative">
        <GreenSvg />
        <Close
          className="absolute top-2 right-2 text-green"
          onClick={onClose}
        />
        <form
          onSubmit={handleSubmit}
          className="space-y-4 form-container w-full relative z-[4]"
        >
          <Title>Upload Profile Image</Title>

          {preview && (
            <div className="w-32 h-32 mx-auto">
              <Image
                src={preview}
                alt="Preview"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
          )}

          <div className="w-full">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
            <p className="text-xs text-lightgray mt-1">Max size: 5MB</p>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            disabled={loading || !image}
            className="flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Spinner />
                <span>Uploading...</span>
              </>
            ) : (
              "Upload Image"
            )}
          </Button>

          {currentImage && (
            <p className="text-xs text-lightgray text-center">
              Your previous profile image will be automatically removed from our
              storage.
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ImageUploadModal;
