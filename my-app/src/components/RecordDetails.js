import React from "react";
import { useParams } from "react-router-dom";

function RecordDetails({ records }) {
  const { id } = useParams()

  const recordDetails = records.find(record => record.id == id)

  return (
    <div>
        <div className="record-details">
            <img src={recordDetails.image} alt={recordDetails.image} />
            <h1>{recordDetails.title}</h1>
            <h3>{recordDetails.artist}</h3>
        </div>
        <div className="tracks-container">
            <ul className="tracks">Side A Tracks:
                {recordDetails.sideA.map(song =>
                    <li key={song}>{song}</li>
                )}
            </ul>
            <ul className="tracks">Side B Tracks:
            {recordDetails.sideB.map(song =>
                    <li key={song}>{song}</li>
                )}
            </ul>
        </div>
        <br></br>
    </div>
  );
}

export default RecordDetails;