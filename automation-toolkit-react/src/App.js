import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/navbar";
import React, { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Title name="Retail Automation Toolkit"></Title>
      <Navbar></Navbar>
    </Fragment>
  );
}

export default App;
