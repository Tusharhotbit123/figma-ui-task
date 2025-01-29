import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { LineData, LineOptions } from '../../utils/constants/charts';

interface props {
  className?: string;
}

const LineChart = ({ className }: props) => {
  return (
    <div className={className}>
      <Line data={LineData} options={LineOptions} />
    </div>
  );
};

export default React.memo(LineChart);
