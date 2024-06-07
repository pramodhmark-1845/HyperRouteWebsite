import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/logohyperroute.png';

export const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" style={{height : '15vh'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="90vh" height='50vh' alt="Hyper Route Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#App">App</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Work">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
