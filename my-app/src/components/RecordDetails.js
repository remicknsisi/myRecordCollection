import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecordDetails() {
  const [record, setRecord] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/shop/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }, [id])
  //show to madeline

  return (
    <div className="record-details">
        {/* <h1>{record.title}</h1>
        <h3>{record.artist}</h3>
        <ul>Side A Tracks:</ul>
            <li>{record.sideA}</li>
        <ul>Side B Tracks:</ul>
            <li>{record.sideB}</li> */}
    </div>
  );
}

export default RecordDetails;