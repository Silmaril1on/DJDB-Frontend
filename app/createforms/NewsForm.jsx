"use client";
import { useState } from "react";
import Button from "../components/uicomponents/Button";
import { BACKEND_URL } from "../utils/urls";

const NewsForm = () => {
  const [poster, setPoster] = useState(null);
  const [posterPreview, setPosterPreview] = useState(null);
  const [headline, setHeadline] = useState("");
  const [desc, setDesc] = useState("");
  const [newsLink, setNewsLink] = useState("");
  const [clip, setClip] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPosterPreview(reader.result);
        setPoster(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitNews = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newsData = {
        poster,
        headline,
        desc,
        newsLink,
        clip,
      };
      const response = await fetch(`${BACKEND_URL}/api/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newsData),
      });
      if (response.ok) {
        setPoster(null);
        setHeadline("");
        setDesc("");
        setNewsLink("");
        setClip("");
        setPosterPreview(null);
        console.log("New artist added", await response.json());
      } else {
        const error = await response.json();
        console.log("Error:", error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-center flex-col bg-blue p-5">
      <h2 className="text-3xl font-bold">Create News</h2>
      <form className="form-container" onSubmit={handleSubmitNews}>
        <div className="w-full space-y-2">
          <label className="block text-green">Artist Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {posterPreview && (
            <div className="mt-2">
              <img
                src={posterPreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
        </div>
        <input
          id="news headline"
          name="news headline"
          type="text"
          placeholder="News headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        <input
          id="news desc"
          name="news desc"
          type="text"
          placeholder="News Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          id="news link"
          name="news link"
          type="text"
          placeholder="News link"
          value={newsLink}
          onChange={(e) => setNewsLink(e.target.value)}
        />
        <input
          id="news clup"
          name="news clup"
          type="text"
          placeholder="News Clip"
          value={clip}
          onChange={(e) => setClip(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          {loading ? "Creating News..." : "Create News"}
        </Button>
      </form>
    </div>
  );
};

export default NewsForm;
