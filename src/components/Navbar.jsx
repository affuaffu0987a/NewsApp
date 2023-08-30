import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg text-light bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">
            FatafatNews.org
          </NavLink>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-center"><NavLink className="nav-link text-white" to="/">Home</NavLink></li>
              <li className="nav-item text-center"><NavLink className="nav-link text-white" to="/business">Business</NavLink></li>
              <li className="nav-item text-center"><NavLink className="nav-link text-white" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item text-center"><NavLink className="nav-link text-white" to="/general">General</NavLink></li>
              <li className="nav-item text-center"><NavLink className="nav-link text-white" to="/health">Health</NavLink></li>
              <li className="nav-item text-center"><NavLink className="nav-link text-white" to="/science">Science</NavLink></li>
              <li className="nav-item text-center"><NavLink className="nav-link text-white" to="/sports">Sports</NavLink></li>
              <li className="nav-item text-center"><NavLink className="nav-link text-white" to="/technology">Technology</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
