import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Switch } from "react-router";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import "./App.css";
import Create from "./pages/Staff/Create";
import List from "./pages/Staff/List";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/staff/create">
            <Create />
          </Route>
          <Route path="/staff/list">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
