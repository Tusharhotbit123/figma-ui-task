import { memo, useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';
import { NavContext } from '../../context/navContext/Navcontext';

const Layout = () => {
  const { activeWidth } = useContext(NavContext);

  return (
    <div className=" w-full min-h-screen md:flex">
      <div className="hidden md:block">
        <Sidebar
          className=" flex flex-col justify-start items-center min-h-screen"
          name="flex items-center justify-center "
        />
      </div>

      <div
        className={`bg-white min-h-screen fixed inset-0 z-50 transform ${
          activeWidth === 'w-0' ? '-translate-x-full' : 'translate-x-0'
        } transition-transform duration-300`}
      >
        <Sidebar
          className=" flex flex-col  items-start   min-h-screen"
          name=" w-4/5   flex justify-between ml-7 mb-6 mt-8"
        />
      </div>
      <div className="flex flex-col w-full">
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default memo(Layout);
