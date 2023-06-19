/*eslint-disable */
import React from "react";
import "./App.css";
import "./Mediaquery.css";
import List from "./component/List";
import Kidult from "./component/Kidult";

function App() {
  return (
    <div className="App">
      <div
        className="logo"
        style={{ position: "absolute", right: "30px", top: "30px" }}
      >
        <img src="./assets/image/emoticon/Logo.png"></img>
      </div>
      <List />
      <Kidult />
    </div>
  );
}

export default App;
