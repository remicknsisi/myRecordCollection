import React from "react";
import RecordInCollection from "./RecordInCollection"

function MyCollection({ records, onDonate, collectionValue, setCollectionValue }) {

    return (
    <div className="my-collection">
        <div className="my-records">My Vinyls</div>
        <p>Total Value: ${collectionValue}</p>
        <ul className="collection">
            {records.map(record => {
                return (
                    <RecordInCollection collectionValue={collectionValue} setCollectionValue={setCollectionValue} key={record.title} onDonate={onDonate} record={record} key={record.id}/>
                )
            })}
        </ul>
    </div>
  );
}

export default MyCollection;