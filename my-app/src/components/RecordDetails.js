import React from "react";
import { useParams } from "react-router-dom";

function RecordDetails({ records }) {
  const { id } = useParams()

  const recordDetails = records.find(record => record.id == id)
  console.log(recordDetails)

  return (
    <div className="record-details">
        <img src={recordDetails.image} alt={recordDetails.image} />
        <h1>{recordDetails.title}</h1>
        <h3>{recordDetails.artist}</h3>
        <ul>Side A Tracks:</ul>
            {recordDetails.sideA.map(song =>
                <li key={song}>{song}</li>
            )}
        <ul>Side B Tracks:</ul>
        {recordDetails.sideB.map(song =>
                <li key={song}>{song}</li>
            )}
    </div>
  );
}

export default RecordDetails;