import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Navbar = () => {
  const width = useWindowWidth();

  if (width >=750) return <DesktopNavbar />;
  else return <MobileNavbar />;
};

export default Navbar;
