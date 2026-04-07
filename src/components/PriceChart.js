import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function PriceChart({ coinId }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!coinId) return;

    const fetchChart = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        );
        const data = await res.json();

        console.log("API:", data); // debug

        if (data?.prices?.length > 0) {
          setChartData(data.prices);
        } else {
          setChartData([]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchChart();
  }, [coinId]);

  const chartConfig = {
    labels: chartData.map((item) =>
      new Date(item[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: `${coinId} Price (USD)`,
        data: chartData.map((item) => item[1]),
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.1)",
        tension: 0.3,
        fill: true
      }
    ]
  };

  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <h2>{coinId} - Last 7 Days</h2>

      {/* Force render properly */}
      {chartData.length > 0 ? (
        <Line data={chartConfig} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}

export default PriceChart;