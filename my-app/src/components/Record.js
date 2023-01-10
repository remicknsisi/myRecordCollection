import React from "react";
import { Link } from "react-router-dom";

function Record({ record, onClickRecord, inCollectionCard }) {
    
    const {title, artist, image, value, id, inCollection} = record

    function handleClick(){
        onClickRecord(id, record)
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
        {inCollectionCard ? <button onClick={handleClick}>Donate?</button> : inCollection ? (<button onClick={handleClick}>Already Owned</button>) : (<button onClick={handleClick}>Purchase</button>)}
    </div>
  );
}

export default Record;