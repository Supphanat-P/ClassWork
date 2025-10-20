import React, { useEffect } from "react";

const Nav = ({ menuClick, setMenuClick }) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-1">
        <div className="container">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleMenuClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/animation" onClick={handleMenuClick}>
                Animation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calculator" onClick={handleMenuClick}>
                Calculator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reactComponents" onClick={handleMenuClick}>
                Component
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/todos" onClick={handleMenuClick}>
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
