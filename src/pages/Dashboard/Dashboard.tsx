import useWindowWidth from '../../hooks/useWindowWidth';
import DesktopDashboard from './DesktopDashboard';
import MobileDashboard from './MobileDashboard';
const Dashboard = () => {
  const width = useWindowWidth();

  if (width >=750) return <DesktopDashboard />;
  else return <MobileDashboard />;
};

export default Dashboard;
