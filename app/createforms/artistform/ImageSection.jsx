import Close from "@/app/components/uicomponents/Close";

const ImageSection = ({
  imagePreview,
  setImagePreview,
  galleryPreviews,
  setGalleryPreviews,
  setFormData,
  formData,
}) => {
  const handleFileChange = (e, field) => {
    const files = Array.from(e.target.files);
    if (field === "gallery" && formData.gallery.length + files.length > 6) {
      return alert("Maximum 6 images allowed");
    }

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (field === "image") {
          setFormData((prev) => ({
            ...prev,
            image: reader.result,
          }));
          setImagePreview(reader.result);
        } else if (field === "gallery") {
          setFormData((prev) => ({
            ...prev,
            gallery: [...prev.gallery, reader.result],
          }));
          setGalleryPreviews((prev) => [...prev, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));
    setGalleryPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <article className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div>
        <h1 className="font-bold text-3xl">Artist Poster</h1>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "image")}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded mt-2"
          />
        )}
      </div>
      <div>
        <div className="flex items-center">
          <h1 className="font-bold text-3xl">Artist Gallery</h1>
          <span className="font-secondary text-[10px] italic ml-2">
            Max 6 Images
          </span>
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFileChange(e, "gallery")}
          disabled={formData.gallery.length >= 6}
        />
        <div className="grid grid-cols-3 gap-2 mt-2">
          {galleryPreviews.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={preview}
                alt={`Gallery ${index + 1}`}
                className="w-full h-24 object-cover"
              />
              <Close
                className="absolute top-0 right-0"
                onClick={() => handleRemoveImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ImageSection;
