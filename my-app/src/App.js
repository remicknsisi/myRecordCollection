import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import MyCollection from "./components/MyCollection";
import RecordShop from "./components/RecordShop";
import RecordDetails from "./components/RecordDetails";

function App() {
  const [records, setRecords] = useState([])
  const [isInCollection, setIsInCollection] = useState(false)
  const [recordsToDisplay, setRecordsToDisplay] = useState([])
  const [recordsInCollection, setRecordsInCollection] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/records')
    .then(res => res.json())
    .then(recordData => {
      setRecords(recordData)
      setRecordsToDisplay(recordData)})
  }, [])

  function handleSearchChange(searchTerm){
    console.log(searchTerm)
    const newRecordToDisplay = records.filter(record => {
      if (record.title.toLowerCase().includes(searchTerm))
      return record
    })
    setRecordsToDisplay(newRecordToDisplay)
  }

  function handlePurchase(newRecord){
    setIsInCollection(!isInCollection)
    setRecordsInCollection([...recordsInCollection, newRecord])
  }


  return (
    <div className="App">
      <div className="title">My Vinyl Collector</div>
      <NavBar />
      <br></br>
      <Switch>
        <Route exact path="/collection">
          <MyCollection records={recordsInCollection} />
        </Route>
        <Route exact path="/shop">
          <RecordShop onPurchase={handlePurchase} isInCollection={isInCollection} records={recordsToDisplay} setRecords={setRecords} onSearchChange={handleSearchChange}/>
        </Route>
        <Route exact path="/shop/:id">
          <RecordDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
