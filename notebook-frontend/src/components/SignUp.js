import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (

    <div className="modal fade" id="SignupBackdrop"  data-bs-keyboard="false" tabIndex="-1" aria-labelledby="#SignupBackdrop" aria-hidden="true">
      <div className="modal-dialog">
      <div className="modal-content">
    <div className="container">
      <form
        className="form"
        method="post"
        action="http://localhost:8000/api/v1/auth/SignUp"
      >
        <p className="Registertitle">Register </p>
        <p className="message">Signup now and get full access to our app. </p>

        <label>
          <input
            required=""
            placeholder=""
            name="name"
            type="text"
            className="input"
          />
          <span>Name</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="email"
            name="email"
            className="input"
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="password"
            name="password"
            className="input"
          />
          <span>Password</span>
        </label>
        <label>
          <input required="" placeholder="" type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button className="submit" type="submit">
          Submit
        </button>
        <p className="signin pointer">
          Already have an acount ? <p className="pointer" data-bs-toggle="modal" data-bs-target="#LoginBackdrop" >Signin</p>{" "}
        </p>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
}
