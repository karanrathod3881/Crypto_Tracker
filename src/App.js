import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./components/Login";
import Signup from "./components/Signup";
import CryptoList from "./components/CryptoList";

import { AuthContext } from "./context/AuthContext";

function App() {
  
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Crypto Tracker App</h1>

      {user ? (
        <>
          <p>Welcome: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>

          {/* Protected App */}
          <CryptoList />
        </>
      ) : (
        <>
          {/* Auth UI */}
          <Signup />
          <Login />
        </>
      )}
    </div>
  );
}

export default App;