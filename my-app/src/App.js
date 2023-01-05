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
  const [collectionValue, setCollectionValue] = useState(0)

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
            history.push(`/records/${newRecordData.id}`)
        })
  }

  function handlePurchase(newRecord){
    setRecordsInCollection([...recordsInCollection, newRecord])
  }
  
  function handleDonate(donatedRecord){
    let newRecordsInCollection = recordsInCollection.filter(record => record !== donatedRecord)
    setRecordsInCollection(newRecordsInCollection)
  }

  const recordsToDisplay = records.filter(record => record.title.toLowerCase().includes(search))

  // const recordsInCOllection =
  // add an attribute to all records in my collcetion for is in the collection that defaults to false use this to define in collection as a const
  // implement PATCH for purchase

  // set collection value --> to not rely on state, use reduce to calculate the sum of all values and update on re renders from setRecords

  return (
    <div className="App">
      <div className="title">My Vinyl Collector</div>
      <NavBar />
      <br></br>
      <Switch>
        <Route exact path="/collection">
          <MyCollection collectionValue={collectionValue} setCollectionValue={setCollectionValue} onDonate={handleDonate} records={recordsInCollection} />
        </Route>
        <Route exact path="/shop">
          <RecordShop collectionValue={collectionValue} setCollectionValue={setCollectionValue} onSubmit={handleSubmit} onPurchase={handlePurchase} records={recordsToDisplay} setRecords={setRecords} search={search} setSearch={setSearch}/>
        </Route>
        <Route exact path="/records/:id">
          <RecordDetails records={records}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
