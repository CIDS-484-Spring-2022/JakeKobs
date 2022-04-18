import "./App.css";
import Title from "./components/Title";
import Navbar from "./components/navbar";
import Tasks from "./pages/Tasks";
import Proxies from "./pages/Proxies";
import Accounts from "./pages/Accounts";
import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./css/styles.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Fragment>
      <div>
        <Title name="Retail Automation Toolkit"></Title>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Tasks />} />
          <Route exact path="/proxies" element={<Proxies />} />
          <Route exact path="/accounts" element={<Accounts />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
export default App;
