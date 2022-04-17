import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "../pages/Tasks";
import Proxies from "../pages/Proxies";
import Accounts from "../pages/Accounts";
import navbar from "./navbar";
export default function ViewContainer() {
  return (
    <Routes>
      <Route exact path="/" element={<Tasks />} />
      <Route exact path="/proxies" element={<Proxies />} />
      <Route exact path="/accounts" element={<Accounts />} />
    </Routes>
  );
}
