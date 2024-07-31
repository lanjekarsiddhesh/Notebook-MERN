import React from "react";

export default function SignUp() {
  return (

    <div className="modal fade" id="SignupBackdrop"  data-bs-keyboard="false" tabIndex="-1" aria-labelledby="#SignupBackdrop" aria-hidden="true">
      <div className="modal-dialog">
    <div className="container modal-content signup_form">
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
        <p className="signin pointer" data-bs-toggle="modal" data-bs-target="#LoginBackdrop" >
          Already have an acount ? Signin
        </p>
    </div>
    </div>
    </div>
  );
}
