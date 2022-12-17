import React, { useState } from "react";

function Search({ onSearchChange }) {
    const [search, setSearch] = useState('')

  return (
    <div className="search">
      <label htmlFor="search">Search Records: </label>
      <input
        type="text"
        placeholder="Search records by title..."
        onChange={(e) => {
            setSearch(e.target.value)
            onSearchChange(search)}}
      />
    </div>
  );
}

export default Search;