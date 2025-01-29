import { Colors } from '../../colors';
import { ChartOptions } from 'chart.js';

export const PieData = {
    labels: ['', '', '', ''],
    datasets: [
      {
        data: [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ],
        backgroundColor: [
          Colors.pieChart1,
          Colors.PieChart2,
          Colors.barChart1,
          Colors.barChart2,
        ],
        borderWidth: 8,
        hoverOffset: 10,
        hoverBorderColor: 'white',
      },
    ],
  };

  export const customValues = ['', '', '', ''];




export const PieOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  rotation: -44,
  cutout: '0%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          const dataset = tooltipItem.chart.data.datasets[0];
          const total = dataset.data.reduce((a: number, b: number) => a + b, 0);
          const value = tooltipItem.raw as number;
          const percentage = ((value / total) * 100).toFixed(0);
          return `${tooltipItem.label}: ${percentage}`;
        },
      },
    },

    datalabels: {
      color: 'white',
      anchor: 'center',
      align: ['top', 'center', 'center', 'center'],
      textAlign: 'center',
      font: {
        size: 13,
        weight: 'bold',
      },
      formatter: (_value: number, context: any) => {
        const labels = context.chart.data.labels;
        const category = labels ? labels[context.dataIndex] : 'Unknown';

        const percentage = customValues[context.dataIndex];

        return `${percentage}\n${category}`;
      },
    },
  },
};
