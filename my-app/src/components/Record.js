import React, { useState } from "react";
import { Link } from "react-router-dom";

function Record({ record, onPurchase }) {
    const [isInCollection, setIsInCollection] = useState(false)
    
    const {title, artist, image, value, id, sideA, sideB} = record

    function handleClick(){
        setIsInCollection(!isInCollection)

        const recordForCollection = {
            title: title,
            artist: artist,
            value: value,
            image: image
        }
        
        onPurchase(recordForCollection)
    }

  return (
    <div className="record-card">
        <img src={image} alt={title} />
        <h3>Title: {title}</h3>
        <h4>Artist: {artist}</h4>
        <p>Price: ${value}</p>
        <Link to={`/shop/${id}`}>More Details</Link>
        <br></br>
        <br></br>
        {isInCollection ? (<button onClick={handleClick}>Already Owned - Donate?</button>) : (<button onClick={handleClick}>Purchase</button>)}
        {/* need to make it so button only appears on shop page by filtering for record in collection state variable - also remove more details  button? or just fix the nav from getting /undefined*/}
    </div>
  );
}

export default Record;