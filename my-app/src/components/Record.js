import React from "react";

function Record({ title, artist, image, value, sideA, sideB, isInCollection, onPurchase }) {

    function handleClick(){
        onPurchase()
    }

  return (
    <div className="record-card">
        <img src={image} alt={title} />
        <h3>Title: {title}</h3>
        <h4>Artist: {artist}</h4>
        <p>Price: ${value}</p>
        {isInCollection ? <button onClick={handleClick}>Already Owned - Donate?</button> : <button onClick={handleClick}>Purchase</button>}
    </div>
  );
}

export default Record;