import React, { useState } from "react";

function Search({ onSearchChange }) {

    //need to fix search functionality
    const [search, setSearch] = useState('')

  return (
    <div className="search">
      <label htmlFor="search">Search Records: </label>
      <input
        type="text"
        placeholder="Search records by title..."
        value={search}
        onChange={(e) => {
            setSearch(() => e.target.value)
            //need callback syntax here to update in real time
            onSearchChange(search)}}
      />
    </div>
  );
}

export default Search;