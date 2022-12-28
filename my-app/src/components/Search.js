import React from "react";

function Search({ search, setSearch}) {

  return (
    <div className="search">
      <label htmlFor="search">Search Records: </label>
      <input
        type="text"
        placeholder="Search records by title..."
        value={search}
        onChange={(e) => {
            setSearch(e.target.value)}}
      />
    </div>
  );
}

export default Search;