import React, { useEffect, useState } from "react";

function CryptoList() {
  const [coins, setCoins] = useState([]);

useEffect(() => {
  const fetchData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => res.json())
      .then((data) => setCoins(data));
  };

  fetchData(); // initial call

  const interval = setInterval(fetchData, 10000); // every 10 seconds

  return () => clearInterval(interval); // cleanup
}, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Crypto Price Tracker</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {coins.map((coin) => (
          <div key={coin.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px",
            width: "200px"
          }}>
            <img src={coin.image} width="50" alt={coin.name} />
            <h3>{coin.name}</h3>
            <p>${coin.current_price}</p>
            <p style={{
              color: coin.price_change_percentage_24h > 0 ? "green" : "red"
            }}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CryptoList;