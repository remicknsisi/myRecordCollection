import React from "react";

function Record({ title, artist, image, value, sideA, sideB }) {
  return (
    <li className="record-card">
        <img src={image} alt={title} />
        <h3>Title: {title}</h3>
        <h4>Artist: {artist}</h4>
        <p>Price: ${value}</p>
    </li>
  );
}

export default Record;