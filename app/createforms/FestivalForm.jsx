"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/uicomponents/Button";
import { setSubmitModal } from "@/app/features/modalSlice";
import { BACKEND_URL } from "../utils/urls";

const FestivalForm = () => {
  const { user, userDetails } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    country: "",
    city: "",
    info: "",
    link: "",
    flag: "",
    image: "",
    dates: "",
    founders: "",
  });
  const [loading, setLoading] = useState(false);
  const [posterPreview, setPosterPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPosterPreview(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result || "" }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitFestival = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const submissionData = { ...formData };
      const endpoint = userDetails?.admin
        ? `${BACKEND_URL}/api/festivals`
        : `${BACKEND_URL}/api/pending`;

      const requestBody = userDetails?.admin
        ? submissionData
        : { type: "festival", data: submissionData };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setFormData({
          name: "",
          desc: "",
          country: "",
          city: "",
          info: "",
          link: "",
          flag: "",
          image: "",
          dates: "",
          founders: "",
        });
        setPosterPreview(null);
        dispatch(
          setSubmitModal({
            isOpen: true,
            message:
              "Your submission has been received and is pending approval.",
          })
        );
      } else {
        console.log("Error:", await response.json());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-center flex-col bg-black p-5">
      <h2 className="text-3xl font-bold">Create Festival</h2>
      <form
        className="w-full lg:w-[50%] space-y-5 flex-center flex-col"
        onSubmit={handleSubmitFestival}
      >
        <div className="w-full space-y-2">
          <h1 className="text-green text-3xl font-bold">Festival Poster</h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {posterPreview && (
            <img
              src={posterPreview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded mt-2"
            />
          )}
        </div>

        <h1 className="text-green text-3xl font-bold w-full">
          Basic Information
        </h1>
        <div className="lg:grid grid-cols-3 gap-5 w-full space-y-3 lg:space-y-0">
          {[
            { id: "name", placeholder: "Festival Name" },
            { id: "desc", placeholder: "Festival Description" },
            { id: "country", placeholder: "Festival Country" },
            { id: "city", placeholder: "Festival City" },
            { id: "info", placeholder: "Festival Info" },
            { id: "link", placeholder: "Festival Link" },
            { id: "flag", placeholder: "Country Flag" },
            { id: "dates", placeholder: "Festival Dates" },
            { id: "founders", placeholder: "Festival Founders" },
          ].map(({ id, placeholder }) => (
            <input
              id={id}
              key={id}
              name={id}
              type="text"
              autoComplete="false"
              placeholder={placeholder}
              value={formData[id] || ""}
              onChange={handleChange}
            />
          ))}
        </div>
        <Button disabled={loading} type="submit">
          {loading ? "Submitting..." : "Submit for Review"}
        </Button>
      </form>
    </div>
  );
};

export default FestivalForm;
