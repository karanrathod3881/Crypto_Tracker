import React from "react";
import CryptoList from "./components/CryptoList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Crypto Price Tracker</h1>
      <CryptoList />
    </div>
  );
}

export default App;