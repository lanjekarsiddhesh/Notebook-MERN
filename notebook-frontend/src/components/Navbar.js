import React from 'react'
import '../App.css';
import addNote from "../images/addSign.png";
import addUser from "../images/AddUser.png";
import { NavLink } from "react-router-dom";


export default function Navbar() { 

  return (
    <div>
      <nav className="navbar navbar-expand-lg text-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            NotePilot
          </NavLink>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav me-auto mb-2 justify-content-around mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              
              <li className="nav-item">
              <img
                src={addNote}
                width="35"
                height="35"
                alt="Add notes"
                className="d-inline-block addnote align-text-top m-0 p-0"
                data-bs-toggle="modal" data-bs-target="#AddnoteBackdrop"
              />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <img
                src={addUser}
                width="40"
                height="40"
                alt="Add notes"
                className="d-inline-block userProfile align-text-top m-0 p-0"
                data-bs-toggle="modal" data-bs-target="#LoginBackdrop"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
