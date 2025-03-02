import Button from "@/app/components/uicomponents/Button";

const ProfilesSection = ({ formData, setFormData }) => {
  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => {
      const newData = { ...prev };
      if (field === "genres") {
        const newGenres = [...prev.genres];
        newGenres[index] = value;
        newData.genres = newGenres;
      } else if (field === "profiles") {
        const newProfiles = [...prev.profiles];
        newProfiles[index] = value;
        newData.profiles = newProfiles;
      }
      return newData;
    });
  };

  const handleAddGenre = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      genres: [...prev.genres, ""],
    }));
  };

  const handleAddProfile = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      profiles: [...prev.profiles, { name: "", link: "" }],
    }));
  };

  return (
    <article className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="space-y-2">
        <h1 className="font-bold text-3xl">Genres</h1>
        {formData.genres.map((genre, index) => (
          <input
            id="genre"
            key={index}
            value={genre}
            placeholder="Genre name"
            onChange={(e) => handleArrayChange("genres", index, e.target.value)}
          />
        ))}
        <Button type="button" onClick={handleAddGenre}>
          Add Genre
        </Button>
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-3xl">Social Media</h1>
        {formData.profiles.map((profile, index) => (
          <div key={index} className="space-y-2">
            <input
              id="platform name"
              placeholder="Platform"
              value={profile.name}
              onChange={(e) =>
                handleArrayChange("profiles", index, {
                  ...profile,
                  name: e.target.value,
                })
              }
            />
            <input
              id="platform-link"
              placeholder="Link"
              value={profile.link}
              onChange={(e) =>
                handleArrayChange("profiles", index, {
                  ...profile,
                  link: e.target.value,
                })
              }
            />
          </div>
        ))}
        <Button type="button" onClick={handleAddProfile}>
          Add Profile
        </Button>
      </div>
    </article>
  );
};

export default ProfilesSection;
