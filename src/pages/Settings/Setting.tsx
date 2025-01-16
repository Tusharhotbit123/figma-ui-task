import useWindowWidth from '../../hooks/useWindowWidth';
import DesktopSetting from './DesktopSetting';
import MobileSetting from './MobileSetting';
const Setting = () => {
  const width = useWindowWidth();

  if (width >= 750) return <DesktopSetting />;
  else return <MobileSetting />;
};

export default Setting;
