import React from "react";

const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search student..."
      className="input search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
