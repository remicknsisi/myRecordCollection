import React from "react";

function Record({ title, artist, image, value, sideA, sideB, isInCollection, onPurchase }) {

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
        <button onClick={handleClick}>Purchase</button>
        {/* {isInCollection ? <button onClick={handleClick}>Already Owned - Donate?</button> : <button onClick={handleClick}>Purchase</button>} */}
    </div>
  );
}

export default Record;