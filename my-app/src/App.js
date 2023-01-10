import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import DisplayRecords from "./components/DisplayRecords";
import RecordDetails from "./components/RecordDetails";

function App() {
  const [records, setRecords] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/records')
    .then(res => res.json())
    .then(recordData => {
      setRecords(recordData)
    })
  }, [])

  const recordsToDisplay = records.filter(record => record.title.toLowerCase().includes(search))

  const recordsCollected = records.filter(record => record.inCollection === true)

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

  function handleClickRecord(id, record){
    {record.inCollection ? 
      fetch(`http://localhost:3000/records/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "inCollection": false
        })
      })
      .then(res => res.json())
      .then(updatedRecord => {
        const updatedRecords = records.map(record => record.id === updatedRecord.id ? updatedRecord : record)
        setRecords(updatedRecords)
      }) 
    : 
      fetch(`http://localhost:3000/records/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "inCollection": true
        })
      })
      .then(res => res.json())
      .then(updatedRecord => {
        const updatedRecords = records.map(record => record.id === updatedRecord.id ? updatedRecord : record)
        setRecords(updatedRecords)
      })
    }
  }

  const valueOfCollection = recordsCollected.map(record => record.value).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return (
    <div className="App">
      <div className="title">My Vinyl Collector</div>
      <NavBar />
      <br></br>
      <Switch>
        <Route exact path="/collection">
          <DisplayRecords 
          inCollection={true}
          collectionValue={valueOfCollection} 
          onSubmit={handleSubmit} 
          onClickRecord={handleClickRecord} 
          records={recordsCollected} 
          setRecords={setRecords} 
          search={search} 
          setSearch={setSearch}/>
        </Route>
        <Route exact path="/shop">
          <DisplayRecords
          inCollection={false} 
          collectionValue={valueOfCollection} 
          onSubmit={handleSubmit} 
          onClickRecord={handleClickRecord} 
          records={recordsToDisplay} 
          setRecords={setRecords} 
          search={search} 
          setSearch={setSearch}/>
        </Route>
        <Route exact path="/records/:id">
          <RecordDetails 
          records={records}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
