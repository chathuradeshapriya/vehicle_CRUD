import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateVehicle from "./components/create-vehicle.component";
import EditVehicle from "./components/edit-vehicle.component";
import VehicleList from "./components/vehicle-list.component";


class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand"> React Vehicle CRUD By Chathura</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link"> Create Vehicle</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit-vehicle/:id'} className="nav-link">Edit Vehicle</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/vehicle-list'} className="nav-link">Vehicle List</Link>
                </li>

              </ul>
            </div>
          </nav>

          <br />
          <h2> Welcome </h2>

          <Switch>
            <Route exact path="/" component = {CreateVehicle} />
            <Route exact path="/create-vehicle" component = {CreateVehicle} />
            <Route exact path="'/edit-vehicle/:id" component = {EditVehicle} />
            <Route exact path="/vehicle-list" component = {VehicleList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
