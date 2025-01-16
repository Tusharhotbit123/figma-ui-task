// import {useState,useEffect}from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import 'chart.js/auto'; // Automatically registers the required chart types
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the data labels plugin

const PieChart = () => {
  // Data for the Pie Chart

  const data = {
    labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'], // Labels for each section
    datasets: [
      {
        data: [22, 15, 25, 38], // Sizes of the pie slices (in percentages)
        backgroundColor: ['#343C6A', '#FC7900', '#232323', '#396AFF'], // Colors for each section
        borderWidth: 8, // Border width for all slices
        hoverOffset: 10,
      },
    ],
  };

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

  // Custom values to be displayed inside the pie chart (they will represent the custom labels)
  const customValues = [15, 50, 10, 25]; // These will be displayed inside the slices as percentages

  // Chart options
  const options: ChartOptions<'pie'> = {
    responsive: true, // Makes the chart responsive
    rotation: -44, // Rotates the pie chart
    cutout: '0%',
    plugins: {
      legend: {
        display: false, // Remove legend from the top
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const dataset = tooltipItem.chart.data.datasets[0];
            const total = dataset.data.reduce(
              (a: number, b: number) => a + b,
              0,
            );
            const value = tooltipItem.raw as number;
            const percentage = ((value / total) * 100).toFixed(0); // No decimals
            return `${tooltipItem.label}: ${percentage}%`; // Tooltip text
          },
        },
      },

      datalabels: {
        color: '#fff', // Text color inside the pie chart
        anchor: 'center', // Anchor text to the center of slices
        align: ['top', 'center', 'center', 'center'], // Align text in the center
        textAlign: 'center',
        font: {
          size: 13, // Font size for the percentage
          weight: 'bold', // Font weight
        },
        formatter: (_value: number, context: any) => {
          const labels = context.chart.data.labels; // Get labels
          const category = labels ? labels[context.dataIndex] : 'Unknown'; // Handle undefined labels

          const percentage = customValues[context.dataIndex]; // Use custom values for display inside slices

          return `${percentage}%\n${category}`; // Show custom percentage inside the slices
        },
      },
    },
  };

  return (
    <div className="">
      <Doughnut
        data={data}
        options={options}
        plugins={[ChartDataLabels, sliceThickness]}
      />
    </div>
  );
};

export default PieChart;
