import "./App.css";
import Movies from "./components/movies";
import React, { Component } from "react";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Movies />
      </main>
    );
  }
}

export default App;
