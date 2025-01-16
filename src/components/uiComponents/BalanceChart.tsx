import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions, ScriptableContext } from 'chart.js';
import 'chart.js/auto'; // Automatically registers the required chart types

interface props {
  className?: string;
}

const LineChart = ({ className }: props) => {
  // Sample data for the line chart
  const data = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', ''], // X-axis labels
    datasets: [
      {
        label: 'Sales Over Time', // Line chart label
        data: [140, 280, 430, 780, 210, 580, 230, 600], // Y-axis data points
        fill: true, // Set to true if you want to fill the area under the curve
        borderColor: '#396AFF', // Color of the line
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const bgColor = ['rgba(45, 96, 255, 0.25)', 'rgba(45, 96, 255, 0) '];

          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            data,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(1, bgColor[1]);
          return gradientBg;
        }, // Background color (for the area below the curve if fill is true)
        borderWidth: 3, // Width of the line
        tension: 0.3, // Tension for the curve (range from 0 to 1)
        pointBackgroundColor: '#fff', // Color of the points on the line
        pointBorderColor: '#396AFF', // Border color for points
        pointRadius: 0, // Radius of points
        pointHoverRadius: 7, // Radius of points on hover
      },
    ],
  };

  // Chart options for dashed grid lines
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top', // Position of the legend
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#333',
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`; // Customize the tooltip label
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: '#DFE5EE',
        },
        ticks: {
          color: '#718EBF',
          font: {
            weight: 'normal',
            size: 14,
          },
        },

        border: {
          dash: [6, 3],
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 800,
        grid: {
          color: '#DFE5EE',
        },
        ticks: {
          stepSize: 200,
          color: '#718EBF',
          font: {
            weight: 'normal',
            size: 13,
          },
        },
        border: {
          dash: [6, 3],
        },
      },
    },
  };

  return (
    <div className={className}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
