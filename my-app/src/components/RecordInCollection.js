import React from "react";
import { Link } from "react-router-dom";

function RecordInCollection({ record, onDonate }) {    
    const {title, artist, image, value, id} = record

    function handleClick(){
      onDonate(id, record)
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
        <button onClick={handleClick}>Donate?</button>
    </div>
  );
}

export default RecordInCollection;