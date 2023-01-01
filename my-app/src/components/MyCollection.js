import React, { useState } from "react";
import RecordInCollection from "./RecordInCollection"

function MyCollection({ records, onDonate }) {
    const [collectionValue, setCollectionValue] = useState(0)

    function handleAdd(price){
        console.log(price)
        setCollectionValue(price)
        // console.log(typeof record.value)
        // console.log(typeof collectionValue)
        // setCollectionValue(collectionValue + )
    }

    return (
    <div className="my-collection">
        <div className="my-records">My Vinyls</div>
        <p>Total Value: ${collectionValue}</p>
        <ul className="collection">
            {records.map(record => {
                return (
                    <RecordInCollection key={record.title} onDonate={onDonate} onAdd={handleAdd} record={record} key={record.id}/>
                )
            })}
        </ul>
    </div>
  );
}

export default MyCollection;