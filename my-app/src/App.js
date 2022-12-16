import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import MyCollection from "./components/MyCollection";
import RecordShop from "./components/RecordShop";

function App() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/records')
    .then(res => res.json())
    .then(recordData => setRecords(recordData))
  }, [])


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/collection">
          <MyCollection records={records}/>
        </Route>
        <Route exact path="/shop">
          <RecordShop records={records}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
