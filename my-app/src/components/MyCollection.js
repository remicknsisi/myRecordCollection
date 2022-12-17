import React, { useState } from "react";
import Record from "./Record"

function MyCollection({ records }) {

    return (
    <div>
        <h2>Sick vinyls, bro!</h2>
        <ul className="collection">
            {records.map(record => {
                return (
                    <Record key={record.id} title={record.title} artist={record.artist} image={record.image} value={record.value} sideA={record.sideA} sideB={record.sideB}/>
                )
            })}
        </ul>
    </div>
  );
}

export default MyCollection;