const FilterButtons = ({ setFilter, data }) => {
  const uniqueCountries = [...new Set(data.map((artist) => artist.country))];

  const filterOptions = [
    {
      label: "By Nationality",
      key: "country",
      options: uniqueCountries.map((country) => ({
        label: country,
        value: country,
      })),
    },
    {
      label: "Sort by Name",
      key: "sortName",
      options: [
        { label: "A-Z", value: "name-asc" },
        { label: "Z-A", value: "name-desc" },
      ],
    },
    {
      label: "Sort by Rating",
      key: "sortRating",
      options: [
        { label: "High", value: "rating-high" },
        { label: "Low", value: "rating-low" },
      ],
    },
    {
      label: "Sort by Gender",
      key: "sortGender",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
    },
  ];

  return (
    <div className="flex space-x-1 xl:space-x-4 px-3 lg:px-5 sticky lg:static top-1">
      {filterOptions.map(({ label, key, options }) => (
        <select
          id={key}
          key={key}
          name={key}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, [key]: e.target.value }))
          }
          className="p-2 bg-neutral-700 text-[10px] xl:text-base text-white rounded-sm outline-none capitalize"
        >
          <option value="">{label}</option>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default FilterButtons;
