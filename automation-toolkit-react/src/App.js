import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/navbar";
import React, { Component } from "react";
import ViewContainer from "./components/ViewContainer";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <div>
        <Title name="Retail Automation Toolkit"></Title>
        <Navbar />
      </div>
      <ViewContainer />
    </Fragment>
  );
}

export default App;
