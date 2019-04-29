import React from "react";
import Navigation from "./components/navigation/Navigation";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
      </div>
    );
  }
}
