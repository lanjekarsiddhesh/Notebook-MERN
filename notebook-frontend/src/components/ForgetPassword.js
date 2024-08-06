import React from "react";
import "../App.css";
import { Link } from 'react-router-dom'

export default function ForgetPassword() {
  return (
    <div className="modal fade" id="ForgetBackdrop" data-bs-backdrop="static"  data-bs-keyboard="false" tabIndex="-1" aria-labelledby="#ForgetBackdrop" aria-hidden="true">
      <div className="modal-dialog">
    <div className="mt-5 container modal-content forget_form">
        <p className="form-title">Forgot Password</p>
        <div className="input-container">
          <input placeholder="Enter email" type="email" />
          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <button className="submit" type="submit">
          Forget
        </button>

        <div className="signup-link pointer">
          No account?
          <p className="pointer" data-bs-toggle="modal" data-bs-target="#SignupBackdrop">Sign up</p>
        </div>
    </div>
    </div>
    </div>
  );
}
