import "./App.css";
import Movies from "./components/movies";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import NotFound from "./components/nonfound";
import Customers from "./components/customers";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" components={Customers} />
          <Route path="rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>

        <Movies />
      </main>
    );
  }
}

export default App;
