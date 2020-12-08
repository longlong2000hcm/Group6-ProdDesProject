import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Mainpage";
import Chooserobot from "./components/Chooserobot";
import Myreservations from "./components/Myreservations";
import RManagment from "./components/RobotManagment";
import UserManagement from "./components/UserManagement";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example_state: "example state string"
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/User/UserManagement"
            render={routerProps => (
              <UserManagement {...routerProps} example_state={this.state.example_state} />
            )}
          />
          <Route
            path="/User/Myreservations"
            render={routerProps => (
              <Myreservations {...routerProps} example_state={this.state.example_state} />
            )}
          />
          <Route
            path="/User/Chooserobot"
            render={routerProps => (
              <Chooserobot {...routerProps} example_state={this.state.example_state} />
            )}
          />
          <Route
            path="/User/History"
            render={routerProps => (
              <RManagment {...routerProps} example_state={this.state.example_state} />
            )}
          />
          <Route
            path="/Login"
            render={routerProps => (
              <Login {...routerProps} example_state={this.state.example_state} />
            )}
          />
          <Route
            path="/"
            render={routerProps => (
              <Welcome {...routerProps} example_state={this.state.example_state} />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
