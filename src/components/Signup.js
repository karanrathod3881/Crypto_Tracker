import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Auth.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signup successful ");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="auth-container">
  <div className="auth-card">
    <h2>Signup</h2>

    <input
      className="auth-input"
      type="email"
      placeholder="Enter Email"
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      className="auth-input"
      type="password"
      placeholder="Enter Password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button className="auth-button" onClick={handleSignup}>
      Signup
    </button>
  </div>
</div>
  );
}

export default Signup;