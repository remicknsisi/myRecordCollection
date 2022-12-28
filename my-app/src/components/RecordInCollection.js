import React from "react";
import { Link } from "react-router-dom";

function RecordInCollection({ record, onAdd }) {    
    const {title, artist, image, value, id} = record

    function handleClick(e){
        e.target.parentNode.remove()
        onAdd(value)
    }

  return (
    <div className="record-card">
        <img src={image} alt={title} />
        <h3>Title: {title}</h3>
        <h4>Artist: {artist}</h4>
        <p>Price: ${value}</p>
        <Link to={`/shop/${id}`}>More Details</Link>
        {/* need to fix this link here */}
        <br></br>
        <br></br>
        <button onClick={handleClick}>Donate?</button>
    </div>
  );
}

export default RecordInCollection;