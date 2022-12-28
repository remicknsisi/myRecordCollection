import React from "react";
import { Link } from "react-router-dom";

function Record({ title, artist, image, value, id, sideA, sideB, isInCollection, onPurchase }) {

//jpass the entire record object to record and destructure it to get all of these props elements above
    //no need for new obj to be built, can be passed in directly instead

//define is in collection state here

    function handleClick(e){
        const recordForCollection = {
            title: e.target.parentNode.childNodes[1].innerText.split('Title: ')[1],
            artist: e.target.parentNode.childNodes[2].innerText.split('Artist: ')[1],
            value: e.target.parentNode.childNodes[3].innerText.split('Price: $')[1],
            image: e.target.parentNode.childNodes[0].src,
        }

        if (isInCollection){
        e.target.innerText = "Purchase"
        }
        else {e.target.innerText = "Already Owned - Donate?"}
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
        <button onClick={handleClick}>Purchase</button>
        {/* define the buttron using ternary instead of in handle click */}
        {/* need to make it so button only appears on shop page by filtering for record in collection state variable*/}
    </div>
  );
}

export default Record;