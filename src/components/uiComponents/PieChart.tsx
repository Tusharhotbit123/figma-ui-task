import { Doughnut } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Colors } from '../../utils/constants';

const Data = {
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

const customValues = ['', '', '', ''];

const Options: ChartOptions<'doughnut'> = {
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

const PieChart = () => {
  const sliceThickness = {
    id: 'sliceThickness',
    beforeDraw(chart) {
      let sliceThicknessPixel = [230, 195, 230, 270];
      sliceThicknessPixel.forEach((thickness, index) => {
        chart.getDatasetMeta(0).data[index].outerRadius =
          (chart.chartArea.width / thickness) * 100;
      });
    },
  };

  return (
    <div className="h-60 w-full bg-white rounded-3xl flex justify-center">
      <Doughnut
        data={Data}
        options={Options}
        plugins={[ChartDataLabels, sliceThickness]}
      />
    </div>
  );
};

export default PieChart;
