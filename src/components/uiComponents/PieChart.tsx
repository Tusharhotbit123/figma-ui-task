import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { PieOptions, PieData } from '../../utils/constants/charts';

const PieChart = () => {
  const sliceThickness = {
    id: 'sliceThickness',
    beforeDraw(chart: Chart<'doughnut'>) {
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
        data={PieData}
        options={PieOptions}
        plugins={[ChartDataLabels, sliceThickness]}
      />
    </div>
  );
};

export default React.memo(PieChart);
