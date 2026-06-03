const SelectFilter = ({ filieres, setSelectedFiliere, selectedFiliere }) => {
  return (
    <select
    className="filter-select"
      value={selectedFiliere}
      onChange={(e) => setSelectedFiliere(e.target.value)}
    >
      <option value="">All Filières</option>
      {filieres.map((filiere) => (
        <option key={filiere} value={filiere}>
          {filiere}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
