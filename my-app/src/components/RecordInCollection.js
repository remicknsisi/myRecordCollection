import React from "react";
import { Link } from "react-router-dom";

function RecordInCollection({ record, onDonate, collectionValue, setCollectionValue }) {    
    const {title, artist, image, value, id} = record

    function handleClick(){
      setCollectionValue(collectionValue - value)
      onDonate(record)
    }

  return (
    <div className="record-card">
        <img src={image} alt={title} />
        <h3>Title: {title}</h3>
        <h4>Artist: {artist}</h4>
        <p>Price: ${value}</p>
        <Link to={`/shop/${id}`}>More Details</Link>
        {/* need to fix this link here - i think its because im coming from collection so the /collection is still there*/}
        <br></br>
        <br></br>
        <button onClick={handleClick}>Donate?</button>
    </div>
  );
}

export default RecordInCollection;