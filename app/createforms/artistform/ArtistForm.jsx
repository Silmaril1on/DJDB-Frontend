"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/app/components/uicomponents/Button";
import BasicInfoSection from "./BasicInfoSection";
import ImageSection from "./ImageSection";
import ProfilesSection from "./ProfilesSection";
import { setSubmitModal } from "@/app/features/modalSlice";
import LogoBeat from "@/app/components/uicomponents/LogoBeat";
import { BACKEND_URL } from "@/app/utils/urls";

const ArtistForm = () => {
  const { user, userDetails } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    stageName: "",
    country: "",
    city: "",
    label: "",
    bio: "",
    flag: "",
    birth: "",
    genres: [""],
    profiles: [{ name: "", link: "" }],
    image: null,
    gallery: [],
    sex: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [galleryPreviews, setGalleryPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submissionData = {
        ...formData,
        genre: formData.genres,
        image: formData.image,
        gallery: formData.gallery,
      };
      if (userDetails?.admin) {
        const response = await fetch(`${BACKEND_URL}/api/artists`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(submissionData),
        });
        if (response.ok) {
          resetForm();
          dispatch(setSubmitModal(true));
        } else {
          const error = await response.json();
          alert(error.message || "Failed to create artist");
        }
      } else {
        const response = await fetch(`${BACKEND_URL}/api/pending`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            type: "dj",
            data: submissionData,
          }),
        });

        if (response.ok) {
          resetForm();
          dispatch(
            setSubmitModal({
              isOpen: true,
              message:
                "Your submission has been received and is pending approval.",
            })
          );
        } else {
          const error = await response.json();
          alert(error.message || "Failed to submit form");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      desc: "",
      stageName: "",
      country: "",
      city: "",
      label: "",
      bio: "",
      flag: "",
      birth: "",
      genres: [""],
      profiles: [{ name: "", link: "" }],
      image: null,
      gallery: [],
      sex: "",
    });
    setImagePreview(null);
    setGalleryPreviews([]);
  };

  return (
    <div className="flex-center flex-col bg-black p-5">
      <LogoBeat />
      <form
        className="form-container font-primary text-green"
        onSubmit={handleSubmit}
      >
        <BasicInfoSection formData={formData} setFormData={setFormData} />
        <ImageSection
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          galleryPreviews={galleryPreviews}
          setGalleryPreviews={setGalleryPreviews}
          formData={formData}
          setFormData={setFormData}
        />
        <ProfilesSection formData={formData} setFormData={setFormData} />
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit for Review"}
        </Button>
      </form>
    </div>
  );
};

export default ArtistForm;
