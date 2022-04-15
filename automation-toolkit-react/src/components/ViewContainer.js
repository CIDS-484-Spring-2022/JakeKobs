import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tasks from "../pages/Tasks";
import Proxies from "../pages/Proxies";
import Accounts from "../pages/Accounts";
export default function ViewContainer() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/proxies" element={<Proxies />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
    </Router>
  );
}
