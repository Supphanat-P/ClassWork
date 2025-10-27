import React, { useEffect, useState } from "react";

const Nav = ({ }) => {
  const [menuClick, setMenuClick] = useState()
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-1">
        <div className="container">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className={`nav-link ${menuClick === "home" ? "text-white" : ""}`} onClick={() => setMenuClick("home")} href="/" >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menuClick === "animation" ? "text-white" : ""}`} onClick={() => setMenuClick("animation")} href="/animation" >
                Animation
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menuClick === "calculator" ? "text-white" : ""}`} onClick={() => setMenuClick("calculator")} href="/calculator" >
                Calculator
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menuClick === "components" ? "text-white" : ""}`} onClick={() => setMenuClick("components")} href="/reactComponents" >
                Component
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menuClick === "todos" ? "text-white" : ""}`} onClick={() => setMenuClick("todos")} href="/todos" >
                Todos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
