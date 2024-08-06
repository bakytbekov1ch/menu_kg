import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../fireebase/fireebase";
import "./Register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className="register">
      <div className="container">
        <div className="register__content">
          <h1>Register</h1>
          <div className="register__xl">
            <div className="register__block">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
                placeholder="email"
                id="email"
              />
            </div>
            <div className="register__block">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                type="password"
                placeholder="password"
                id="password"
              />
            </div>
          </div>
          <div className="register__footer">
            <h2>
              Мен алдын катталгам{" "}
              <Link to="/login">
                <span>Login</span>
              </Link>
            </h2>
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
