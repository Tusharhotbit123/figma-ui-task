import { Doughnut } from 'react-chartjs-2';
import { ChartOptions} from 'chart.js';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Data = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    {
      data: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ],
      backgroundColor: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
      borderWidth: 8,
      hoverOffset: 10,
      hoverBorderColor: '#FFFFFF',
    },
  ],
};

const customValues = [15, 50, 10, 25];

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
          return `${tooltipItem.label}: ${percentage}%`;
        },
      },
    },

    datalabels: {
      color: '#fff',
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

        return `${percentage}%\n${category}`;
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
