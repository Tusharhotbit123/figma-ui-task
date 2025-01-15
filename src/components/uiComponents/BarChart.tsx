import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartOptions, Chart } from 'chart.js';
import 'chart.js/auto';

const BarChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri'],
    datasets: [
      {
        label: 'Withdraw', // Black bar
        data: [480, 330, 310, 380, 130, 400, 320],
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
        borderRadius: [20, 20, 20, 20],
        borderSkipped: false,
        categoryPercentage: 0.5,
        barPercentage: 0.4,
      },
      {
        label: 'Diposit', // Blue bar
        data: [230, 120, 260, 380, 240, 240, 320],
        backgroundColor: [
          '#396AFF',
          '#396AFF',
          '#396AFF',
          '#396AFF',
          '#396AFF',
          '#396AFF',
          '#396AFF',
        ],
        borderColor: [
          '#396AFF',
          '#396AFF',
          '#396AFF',
          '#396AFF',
          '#396AFF',
          '#396AFF',
          '#396AFF',
        ],
        borderWidth: 1,
        borderRadius: [20, 20, 20, 20],
        borderSkipped: false,
        categoryPercentage: 0.5,
        barPercentage: 0.4,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          font: {
            size: 15,
            weight: 'normal',
            
          },
          padding: 30,
          boxWidth: 100,
          boxHeight: 100,
          color: '#718EBF',
          usePointStyle: true,
          generateLabels: function (chart) {
            // Get the default legend labels
            const labels =
              Chart.defaults.plugins.legend.labels.generateLabels(chart);

            // Sort the labels so that "Withdraw" (blue) comes first
            return labels.sort((a, b) => {
              if (a.text === 'Diposit') return -1; // Move "Withdraw" first
              if (b.text === 'Withdraw') return 1;
              return 0;
            });
          },
        },
      },
      title: {
        display:false,
        text: '',
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

    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 20,
          font: {
            size: 13,
          },
          color: '#718EBF',
          
        },
      },
      y: {
        grid: {
          display: true,
          color:"#F3F3F5",
        },
        ticks: {
          font: {
            size: 13,
          },
          color: '#718EBF',
        },
        border: {
          color: 'transparent', // Hide the Y-axis line (border)
        },
      },
    },
  };

  return (
    <div className='bg-white w-[730px] h-[322px] flex items-center justify-center rounded-3xl m-3'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
