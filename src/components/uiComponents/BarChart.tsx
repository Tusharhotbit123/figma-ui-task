import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import 'chart.js/auto';

const BarChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [12, 15, 3, 5, 2, 3, 20],
        backgroundColor: [
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
        ],
        borderColor: [
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
          '#232323',
        ],
        borderWidth: 1,
        barThickness: 20,
        borderRadius:50,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Correctly typed as 'top'
        align: 'end',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#333',
        },
      },
      title: {
        display: true,
        text: 'Weekly Activity',
        align: 'start',
        position: 'top',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#333',
        padding: {
          top: 20,
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          // Align bar names at the end of the chart
          padding: 20,
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#333',
        },
      },
      y: {
        grid: {
          display: true, // Optional: Show grid lines on the Y-axis
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
