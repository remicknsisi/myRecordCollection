import React from "react";

function Search() {

  return (
    <div className="search">
      <label htmlFor="search">Search Records:</label>
      <input
        type="text"
        placeholder="Search records by title..."
        // onChange={(e) => {
        //   onSearchChange(e.target.value) 
        //   onSearchPlant(search)}}
      />
    </div>
  );
}

export default Search;