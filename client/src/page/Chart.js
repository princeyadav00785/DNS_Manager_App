import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import "../Css/Chart.css"; // Import your Chart styles here

const Chart = () => {
  //   const chartRef = useRef(null);
  //   const chartData = {
  //     labels: ["January", "February", "March", "April", "May", "June", "July"],
  //     datasets: [
  //       {
  //         label: "DNS Requests",
  //         backgroundColor: "rgba(75,192,192,0.2)",
  //         borderColor: "rgba(75,192,192,1)",
  //         borderWidth: 1,
  //         hoverBackgroundColor: "rgba(75,192,192,0.4)",
  //         hoverBorderColor: "rgba(75,192,192,1)",
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //       },
  //     ],
  //   };

  //   const chartOptions = {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   };
  //   useEffect(() => {
  //     const chartInstance = chartRef.current?.chartInstance;

  //     return () => {
  //       // Cleanup: Destroy the chart when the component is unmounted
  //       if (chartInstance) {
  //         chartInstance.destroy();
  //       }
  //     };
  //   }, []);

  return (
    <div className="chart">
      <h3>Chart</h3>
      {/* <Bar data={chartData} options={chartOptions} /> */}
    </div>
  );
};

export default Chart;
