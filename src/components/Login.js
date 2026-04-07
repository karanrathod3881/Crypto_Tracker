import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => alert("Login successful"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="auth-container">
  <div className="auth-card">
    <h2>Login</h2>

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

    <button className="auth-button" onClick={handleLogin}>
      Login
    </button>
  </div>
</div>
  );
}

export default Login;