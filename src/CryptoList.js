import React, { useEffect, useState } from "react";

function CryptoList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // for testing
        setCoins(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Crypto Prices</h2>
      {coins.map((coin) => (
        <div key={coin.id}>
          <h3>{coin.name}</h3>
          <p>Price: ${coin.current_price}</p>
        </div>
      ))}
    </div>
  );
}

export default CryptoList;