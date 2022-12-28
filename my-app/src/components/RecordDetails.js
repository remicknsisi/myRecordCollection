import React from "react";
import { useParams } from "react-router-dom";

function RecordDetails({ records }) {
  const { id } = useParams()

  const recordDetails = records.find(record => record.id == id)

  return (
    <div className="record-details">
        <h1>{recordDetails.title}</h1>
        <h3>{recordDetails.artist}</h3>
        <ul>Side A Tracks:</ul>
            <li>{recordDetails.sideA}</li>
        <ul>Side B Tracks:</ul>
            <li>{recordDetails.sideB}</li>
    </div>
  );
}

export default RecordDetails;