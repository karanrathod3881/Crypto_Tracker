import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Login from "./components/Login";
import Signup from "./components/Signup";
import CryptoList from "./components/CryptoList";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

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

          {/* Show app only after login */}
          <CryptoList />
        </>
      ) : (
        <>
          {/* Show only auth if not logged in */}
          <Signup />
          <Login />
        </>
      )}
    </div>
  );
}

export default App;