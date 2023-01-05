import React, { useState } from "react";

function NewRecordForm({ onSubmit }) {

  const [newTitle, setNewTitle] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newValue, setNewValue] = useState('')
  const [newArtist, setNewArtist] = useState('')

  function handleTitleChange(e){
    setNewTitle(e.target.value)
  }
  function handleImageChange(e){
    setNewImage(e.target.value)
  }
  function handleValueChange(e){
    setNewValue(e.target.value)
  }
  function handleArtistChange(e){
    setNewArtist(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    
    const newRecord ={
      title: newTitle,
      image: newImage,
      value: newValue,
      artist: newArtist,
      inCollection: false
    }

    onSubmit(newRecord)
  }

  return (
    <div className="submit-form" onSubmit={handleSubmit}>
        Can't find what you're looking for? Add to our inventory here...
      <form >
        <input type="text" onChange={handleTitleChange} value={newTitle} placeholder="Record title" />
        <input type="text" onChange={handleImageChange} value={newImage} placeholder="Image URL" />
        <input type="number" onChange={handleValueChange}value={newValue} placeholder="Price" />
        <input type="text" onChange={handleArtistChange} value={newArtist} placeholder="Artist name" />
        <button type="submit">Find Record</button>
      </form>
    </div>
  );
}

export default NewRecordForm;
