import React from 'react'
import '../App.css';
import addNote from "../images/addSign.png";
import addUser from "../images/AddUser.png";
import { NavLink, useNavigate } from "react-router-dom";


export default function Navbar() { 
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("auth-token")
    navigate("/")
  }

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
              
              <li className="nav-item me-3">
              <a data-bs-toggle="modal" data-bs-target={localStorage.getItem("auth-token") ?"#AddnoteBackdrop":"#LoginBackdrop"}>
              <img
                src={addNote}
                width="35"
                height="35"
                alt="Add notes"
                className="d-inline-block addnote align-text-top ms-3 p-0"
                
              />
              <p className='mb-0 fs' >Add Note</p>
              </a>
              </li>

              {localStorage.getItem("auth-token")?<li className="nav-item">
                <NavLink className="nav-link" to="/Notes">
                  My Notes
                </NavLink></li>:
              <li className="nav-item">
                <p className="nav-link nav-link-My-note" data-bs-toggle="modal" data-bs-target="#LoginBackdrop" >My notes</p>
            </li>}
            </ul>


            {!localStorage.getItem("auth-token")?<div id="loginDiv" className="d-flex flex-column ">
              <img
                src={addUser}
                width="40"
                height="40"
                alt="Login/SignUp"
                id="LoginButton"
                className="d-inline-block ms-3 userProfile align-text-top m-0 p-0"
                data-bs-toggle="modal" data-bs-target="#LoginBackdrop"
              />
              <p className='mb-0' >Login/SignUp</p>
            </div>:<div onClick={handleLogout} className="d-flex flex-column ">
              <img
                src={addUser}
                width="40"
                height="40"
                alt="LogOut"
                className="d-inline-block ms-1 userProfile align-text-top m-0 p-0"
                
              />
              <p className='mb-0 userProfile' >Logout</p>
            </div>}
          </div>
        </div>
      </nav>
    </div>
  );
}
