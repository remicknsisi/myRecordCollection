import React from "react";
import { useHistory } from "react-router-dom";

function NewRecordForm({ records, setRecords, onSubmit }) {

  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault()
    
    //make this into a controlled component 
    const newRecord ={
      title: e.target.childNodes[0].value,
      image: e.target.childNodes[1].value,
      value: e.target.childNodes[2].value,
      artist: e.target.childNodes[3].value
    }

    //use callback to handle fetch in App component instead - records not responsibility of form
    fetch('http://localhost:3000/records', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newRecord)
    })
    .then(response => response.json())
    .then(newRecordData => {
        setRecords([...records, newRecordData])
        history.push(`/shop/${newRecordData.id}`)
    })
  }

  return (
    <div className="submit-form" onSubmit={handleSubmit}>
        Can't find what you're looking for? Add to our inventory here...
      <form >
        <input type="text" placeholder="Record title" />
        <input type="text" placeholder="Image URL" />
        <input type="number" placeholder="Price" />
        <input type="text" placeholder="Artist name" />
        <button type="submit">Find Record</button>
      </form>
    </div>
  );
}

export default NewRecordForm;
