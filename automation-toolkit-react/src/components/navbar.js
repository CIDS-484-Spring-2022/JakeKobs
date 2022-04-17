import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const navClasses = "nav-item nav-link ";
  const activeClass = "active";
  const [activeState1, setActiveState1] = useState(navClasses + activeClass);
  const [activeState2, setActiveState2] = useState(navClasses);
  const [activeState3, setActiveState3] = useState(navClasses);

  function changeActiveState1() {
    setActiveState1(navClasses + activeClass);
    setActiveState2(navClasses);
    setActiveState3(navClasses);
  }
  function changeActiveState2() {
    setActiveState1(navClasses);
    setActiveState2(navClasses + activeClass);
    setActiveState3(navClasses);
  }
  function changeActiveState3() {
    setActiveState1(navClasses);
    setActiveState2(navClasses);
    setActiveState3(navClasses + activeClass);
  }

  return (
    <nav className="nav nav-pills nav-justified pt-1 pb-1 border-bottom">
      <Link to="/" className={activeState1} onClick={changeActiveState1}>
        Tasks
      </Link>
      <Link to="/proxies" className={activeState2} onClick={changeActiveState2}>
        Proxies
      </Link>
      <Link
        to="/accounts"
        className={activeState3}
        onClick={changeActiveState3}
      >
        Accounts
      </Link>
    </nav>
  );
}
