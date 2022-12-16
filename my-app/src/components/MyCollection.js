import React from "react";
import Record from "./Record"

function MyCollection({ records }) {

  return (
    <ul className="collection">
        {records.map(record => {
            return (
                <Record key={record.id} title={record.title} artist={record.artist} image={record.image} value={record.value} sideA={record.sideA} sideB={record.sideB}/>
            )
        })}
    </ul>
  );
}

export default MyCollection;