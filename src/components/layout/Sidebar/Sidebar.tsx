import MobileSidebar from './MobileSidebar';
import DesktopSideBar from './DesktopSideBar';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Sidebar = () => {
  const width = useWindowWidth();

  if (width >= 1024) return <DesktopSideBar />;
  else return <MobileSidebar />;
};

export default Sidebar;
