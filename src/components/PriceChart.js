import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function PriceChart({ coinId }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
    )
      .then((res) => res.json())
      .then((data) => {
        setChartData(data.prices);
      });
  }, [coinId]);

  const data = {
    labels: chartData.map((item) =>
      new Date(item[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price (USD)",
        data: chartData.map((item) => item[1]),
        borderColor: "blue",
        fill: false
      }
    ]
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h2>Price Chart</h2>
      <Line data={data} />
    </div>
  );
}

export default PriceChart;