import LineChart from '../../components/uiComponents/BalanceChart';
import BarChart from '../../components/uiComponents/BarChart';
import Card from '../../components/uiComponents/Card';
import PieChart from '../../components/uiComponents/PieChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';
import Transaction from '../../components/uiComponents/Transaction';
import DashboardLg from '../../components/uiComponents/DashboardLg';
import DashboardMd from '../../components/uiComponents/DashboardMd';
import DashboardMobile from '../../components/uiComponents/DashboardMobile';

const Dashboard = () => {
  return (
    <>
      <DashboardMobile />
      <DashboardMd />
      <DashboardLg />
    </>
  );
};

export default Dashboard;
