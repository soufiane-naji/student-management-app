const SelectSorting = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="filter-select"
    >
      <option value="">Sort By</option>
      <option value="name-asc">Name A-Z</option>

      <option value="name-desc">Name Z-A</option>
      <option value="age-asc">Age Ascending</option>

      <option value="age-desc">Age Descending</option>
    </select>
  );
};

export default SelectSorting;