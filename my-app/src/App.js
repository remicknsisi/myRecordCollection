import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import MyCollection from "./components/MyCollection";
import RecordShop from "./components/RecordShop";
import RecordDetails from "./components/RecordDetails";

function App() {
  const [records, setRecords] = useState([])
  const [recordsInCollection, setRecordsInCollection] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/records')
    .then(res => res.json())
    .then(recordData => {
      setRecords(recordData)
    })
  }, [])

  const history = useHistory();

  function handleSubmit(newRecord){
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

  function handlePurchase(newRecord){
    setRecordsInCollection([...recordsInCollection, newRecord])
  }
  const recordsToDisplay = records.filter(record => record.title.toLowerCase().includes(search))

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
          <RecordShop onSubmit={handleSubmit} onPurchase={handlePurchase} records={recordsToDisplay} setRecords={setRecords} search={search} setSearch={setSearch}/>
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
