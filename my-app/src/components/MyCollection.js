import React from "react";
import Record from "./Record"

function MyCollection({ records }) {

    return (
    <div className="my-collection">
        <div className="my-records">My Vinyls</div>
        <p>Total Value:</p>
        <ul className="collection">
            {records.map(record => {
                return (
                    <Record record={record} key={record.id}/>
                )
            })}
        </ul>
    </div>
  );
}

export default MyCollection;