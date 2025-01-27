import { Line } from 'react-chartjs-2';
import { ChartOptions, ScriptableContext } from 'chart.js';
import 'chart.js/auto';
import { Colors } from '../../utils/constants';

interface props {
  className?: string;
}

const Data = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', ''],
  datasets: [
    {
      label: 'Sales Over Time',
      data: [
        Math.floor(Math.random() * 801),
        Math.floor(Math.random() * 801),
        Math.floor(Math.random() * 801),
        Math.floor(Math.random() * 801),
        Math.floor(Math.random() * 801),
        Math.floor(Math.random() * 801),
        Math.floor(Math.random() * 801),
        Math.floor(Math.random() * 801),
      ],
      fill: true,
      borderColor: Colors.barChart2,
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
      },
      borderWidth: 3,
      tension: 0.3,
      pointBackgroundColor: 'white',
      pointBorderColor: Colors.barChart2,
      pointRadius: 0,
      pointHoverRadius: 7,
    },
  ],
};

const Options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
      labels: {
        font: {
          size: 14,
          weight: 'bold',
        },
        color: 'white',
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        color:Colors.lineChartGrid,
      },
      ticks: {
        color: Colors.barChartX,
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
        color:Colors.lineChartGrid,
      },
      ticks: {
        stepSize: 200,
        color:Colors.barChartX,
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

const LineChart = ({ className }: props) => {
  return (
    <div className={className}>
      <Line data={Data} options={Options} />
    </div>
  );
};

export default LineChart;
