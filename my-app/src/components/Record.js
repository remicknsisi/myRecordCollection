import React from "react";
import { Link } from "react-router-dom";

function Record({ record, isInCollection, onPurchase }) {
    
    const {title, artist, image, value, id, sideA, sideB} = record

//define is in collection state here

    function handleClick(){
        const recordForCollection = {
            title: title,
            artist: artist,
            value: value,
            image: image,
        }

        // if (isInCollection){
        // e.target.innerText = "Purchase"
        // }
        // else {e.target.innerText = "Already Owned - Donate?"}
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
        <button onClick={handleClick}>Purchase
            {/* {isInCollection ? Purchase} */}
            </button>
        {/* define the buttron using ternary instead of in handle click */}
        {/* need to make it so button only appears on shop page by filtering for record in collection state variable*/}
    </div>
  );
}

export default Record;