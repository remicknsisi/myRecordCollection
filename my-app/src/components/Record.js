import React, { useState } from "react";
import { Link } from "react-router-dom";

function Record({ record, onPurchase, collectionValue, setCollectionValue }) {
    const [isInCollection, setIsInCollection] = useState(false)
    
    const {title, artist, image, value, id} = record

    function handleClick(){
        setCollectionValue(collectionValue + value)
        setIsInCollection(!isInCollection)

        onPurchase(record)
    }

  return (
    <div className="record-card">
        <img src={image} alt={title} />
        <h3>Title: {title}</h3>
        <h4>Artist: {artist}</h4>
        <p>Price: ${value}</p>
        <Link to={`/records/${id}`}>More Details</Link>
        <br></br>
        <br></br>
        {isInCollection ? (<button onClick={handleClick}>Already Owned</button>) : (<button onClick={handleClick}>Purchase</button>)}
    </div>
  );
}

export default Record;