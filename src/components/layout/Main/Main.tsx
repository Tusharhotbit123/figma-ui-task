import DesktopMain from './DesktopMain';
import MobileMain from './MobileMain';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Main = () => {
  const width = useWindowWidth();

  if (width >= 1024) return <DesktopMain />;
  else return <MobileMain />;
};

export default Main;
