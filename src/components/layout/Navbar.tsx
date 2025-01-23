import { useContext } from 'react';
import { ImageContext } from '../../context/imageContext/ImageContext';
import NavInput from '../atoms/NavInput';
import { Settings, Notifications } from '../icons';
import { NavContext } from '../../context/navContext/Navcontext';

const Navbar = () => {
  const { img } = useContext(ImageContext);
  const { setActiveWidth } = useContext(NavContext);

  return (
    <div className="min-w-full h-36 flex flex-col items-center  md:flex-row md:justify-between  md:h-24 md:px-8">
      <div className="flex w-full justify-around items-center mt-6 md:hidden">
        <img
          onClick={() => setActiveWidth('w-full')}
          className="h-4 w-5 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
          alt="Menu"
        />
        <h1 className="font-semibold text-xl text-center text-indigo-900">
          Overview
        </h1>
        <img className="h-9 w-9 rounded-full" src={img} alt="Profile" />
      </div>

      <div className="hidden md:flex w-full items-center justify-between">
        <h1 className="text-lg font-semibold text-indigo-900">Overview</h1>
      </div>

      <div className=" w-full flex items-center justify-center md:justify-between min-w-max  ">
        <div className="w-4/5 md:min-w-max  px-2 mt-5 md:mt-0">
          <NavInput />
        </div>

        <div className="hidden md:flex w-full items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
              <Settings />
            </div>
            <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
              <Notifications />
            </div>
            <img className="h-16 w-16 rounded-full" src={img} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
