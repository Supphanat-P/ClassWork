import React, { useEffect } from "react";

const Nav = ({ menuClick, setMenuClick }) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-1">
        <div className="container">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/animation" >
                Animation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calculator" >
                Calculator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reactComponents" >
                Component
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/todos" >
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
