import React from "react";

function NewRecordForm({ records, setRecords, onSubmit }) {

  function handleSubmit(e){
    e.preventDefault()
    
    //make this into a controlled component 
    const newRecord ={
      title: e.target.childNodes[0].value,
      image: e.target.childNodes[1].value,
      value: e.target.childNodes[2].value,
      artist: e.target.childNodes[3].value
    }

    onSubmit(newRecord)
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
