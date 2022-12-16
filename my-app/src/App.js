import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../Navbar";
import Home from "../Home";
import MyCollection from "../MyCollection";
import RecordShop from "../RecordShop";

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
