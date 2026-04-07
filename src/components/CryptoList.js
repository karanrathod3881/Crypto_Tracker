import React, { useEffect, useState } from "react";
import PriceChart from "./PriceChart";

function CryptoList() {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then((res) => res.json())
        .then((data) => setCoins(data));
    };

    fetchData();

    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  // Filter + Sort logic
  const filteredCoins = coins
    .filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.current_price - b.current_price
        : b.current_price - a.current_price
    );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Crypto Price Tracker</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          width: "200px"
        }}
      />

      {/* Sort */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      >
        <option value="asc">Price Low → High</option>
        <option value="desc">Price High → Low</option>
      </select>

      {/* Coin List */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {filteredCoins.map((coin) => (
          <div
            key={coin.id}
            onClick={() => setSelectedCoin(coin.id)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              margin: "10px",
              width: "200px",
              cursor: "pointer"
            }}
          >
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

      {/* Chart */}
      {selectedCoin && <PriceChart coinId={selectedCoin} />}
    </div>
  );
}

export default CryptoList;