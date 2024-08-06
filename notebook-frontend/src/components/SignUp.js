import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageContext from "../context/notes/noteContext";
import Alert from "./Alert";

export default function SignUp() {
  const MSGcontext = useContext(MessageContext);
  const { showAlert } = MSGcontext;
  const closeSignupModal = useRef(null)
  const [formBody, SetformBody] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const history = useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();

    try {
      const { password, cpassword } = formBody;
      if (password !== cpassword) {
        showAlert("Password and Confirm password doesn't match", "danger");
        console.log("Some error occured");
      } else {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/auth/SignUp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formBody.name,
              email: formBody.email,
              password: formBody.password,
            }),
          }
        );
        const data = await response.json();
        if (data.success) {
          closeSignupModal.current.click()
          history("/Notes");
          localStorage.setItem("auth-token", data.token);
          showAlert("Account created successfully", "success");
        } else {
          if (Array.isArray(data.error)) {
            const errorMessages = data.error.map((error) => error.msg);
            showAlert(errorMessages.join(", "), "danger");
          } else {
            showAlert(data.error, "danger");
          }
        }
      }
    } catch (error) {
      showAlert(
        "An error occurred while signing up. Please try again later.",
        "danger"
      );
    }
  };

  const onChange = (e) => {
    SetformBody({ ...formBody, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="modal fade"
      id="SignupBackdrop"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="#SignupBackdrop"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog">
        <form onSubmit={handleLoginForm}>
          <div className="container modal-content signup_form">
            <Alert showAlert={showAlert} />
            <p className="Registertitle">Register </p>
            <p className="message">
              Signup now and get full access to our app.{" "}
            </p>

            <label>
              <input
                required=""
                placeholder=""
                name="name"
                type="text"
                className="input"
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
              />
              <span>Password</span>
            </label>
            <label>
              <input
                required=""
                placeholder=""
                type="password"
                name="cpassword"
                onChange={onChange}
                className="input"
              />
              <span>Confirm password</span>
            </label>
            <button className="submit">Submit</button>
            <a
              ref={closeSignupModal}
              data-bs-dismiss="modal"
              className="d-none"
              id="button"
              role="button"
            >
              Close
            </a>
            <p
              className="signin pointer"
              data-bs-toggle="modal"
              data-bs-target="#LoginBackdrop"
            >
              Already have an acount ? Signin
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
