const Filter = ({ sortBy, setSortBy }) => {
  return (
    <div className="my-2 px-3 lg:px-5">
      <select
        className="p-2 bg-neutral-700 text-white rounded-sm outline-none"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Sort by</option>
        <option value="name-asc"> (A-Z)</option>
        <option value="name-desc">(Z-A)</option>
        <option value="rating-high">Top Rating</option>
        <option value="rating-low">Lowest Rating</option>
      </select>
    </div>
  );
};

export default Filter;
