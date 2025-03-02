const BasicInfoSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <article className="w-full lg:w-[70%]">
      <h1 className="font-bold text-3xl">Artist's basic info</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {[
          { label: "Artist Name", name: "name" },
          { label: "Artist Sex", name: "sex" },
          { label: "Artist Description", name: "desc" },
          { label: "Artist Stage Name", name: "stageName" },
          { label: "Artist Country", name: "country" },
          { label: "Artist City", name: "city" },
          { label: "Artist Label", name: "label" },
          { label: "Artist Biography", name: "bio" },
          { label: "Country Flag Image", name: "flag" },
          { label: "Artist Birthday", name: "birth" },
        ].map((field) => (
          <input
            autoComplete="false"
            id={field.name}
            key={field.name}
            name={field.name}
            placeholder={field.label}
            value={formData[field.name] || ""}
            onChange={handleChange}
            type={field.name === "birth" ? "date" : "text"}
          />
        ))}
      </div>
    </article>
  );
};

export default BasicInfoSection;
