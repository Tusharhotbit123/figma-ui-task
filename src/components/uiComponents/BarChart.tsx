import { Bar } from 'react-chartjs-2';
import { ChartOptions, Chart } from 'chart.js';
import 'chart.js/auto';
import { Colors } from '../../utils/constants';

interface className {
  className?: string;
}

const Data = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri'],
  datasets: [
    {
      label: 'Withdraw',
      data: [
        Math.floor(Math.random() * 501),
        Math.floor(Math.random() * 501),
        Math.floor(Math.random() * 501),
        Math.floor(Math.random() * 501),
        Math.floor(Math.random() * 501),
        Math.floor(Math.random() * 501),
        Math.floor(Math.random() * 501),
      ],
      backgroundColor: [
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
      ],
      borderColor: [
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
        Colors.barChart1,
      ],
      borderWidth: 1,
      borderRadius: [20, 20, 20, 20],
      borderSkipped: false,
      categoryPercentage: 0.5,
      barPercentage: 0.7,
    },
    {
      label: 'Deposit',
      data: [230, 120, 260, 380, 240, 240, 320],
      backgroundColor: [
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
      ],
      borderColor: [
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
        Colors.barChart2,
      ],
      borderWidth: 1,
      borderRadius: [20, 20, 20, 20],
      borderSkipped: false,
      categoryPercentage: 0.5,
      barPercentage: 0.7,
    },
  ],
};

const Options: ChartOptions<'bar'> = {
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
        color: Colors.barChartX,
        usePointStyle: true,
        generateLabels: function (chart) {
          const labels =
            Chart.defaults.plugins.legend.labels.generateLabels(chart);

          return labels.sort((a, b) => {
            if (a.text === 'Deposit') return -1;
            if (b.text === 'Withdraw') return 1;
            return 0;
          });
        },
      },
    },
    title: {
      display: false,
      text: '',
      align: 'start',
      position: 'top',
      font: {
        size: 18,
        weight: 'bold',
      },
      color: Colors.barChartGray,
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
        color: Colors.barChartX,
      },
    },
    y: {
      grid: {
        display: true,
        color: Colors.barChartYGrid,
      },
      ticks: {
        font: {
          size: 13,
        },
        color: Colors.barChartY,
      },
      border: {
        color: 'transparent',
      },
    },
  },
};

const BarChart = ({ className }: className) => {
  return (
    <div className={className}>
      <Bar data={Data} options={Options} />
    </div>
  );
};

export default BarChart;
