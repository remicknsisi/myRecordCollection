import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import MyCollection from "./components/MyCollection";
import RecordShop from "./components/RecordShop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/collection">
          <MyCollection />
        </Route>
        <Route exact path="/shop">
          <RecordShop />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
