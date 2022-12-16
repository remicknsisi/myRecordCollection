import React from "react";
import Record from "./Record"
import Search from "./Search"

function RecordShop({ records }) {
  return (
    <div className="shop">
        <Search />
        {records.map(record => {
            return (
                <Record key={record.id} title={record.title} artist={record.artist} image={record.image} value={record.value} sideA={record.sideA} sideB={record.sideB}/>
            )
        })}
    </div>
  );
}

export default RecordShop;