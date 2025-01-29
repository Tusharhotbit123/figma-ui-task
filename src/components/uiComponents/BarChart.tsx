import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Data, Options } from '../../utils/constants/charts';

interface className {
  className?: string;
}

const BarChart = ({ className }: className) => {
  return (
    <div className={className}>
      <Bar data={Data} options={Options} />
    </div>
  );
};

export default React.memo(BarChart);
