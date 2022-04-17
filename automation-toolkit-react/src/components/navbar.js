import { useState } from "react";
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
    <nav className="nav nav-pills nav-justified">
      <a className={activeState1} onClick={changeActiveState1} href="/">
        Tasks
      </a>
      <a className={activeState2} onClick={changeActiveState2} href="/proxies">
        Proxies
      </a>
      <a className={activeState3} onClick={changeActiveState3} href="/accounts">
        Accounts
      </a>
    </nav>
  );
}
