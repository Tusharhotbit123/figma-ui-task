import { useState } from 'react';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import useWindowWidth from '../../hooks/useWindowWidth';

const Layout = () => {
  const width = useWindowWidth();

  // const [flag,setFlag]=useState(false)

  if (width >= 750) {
    return (
      <div className="flex min-h-screen min-w-max bg-slate-100">
        {/* Sidebar */}
        <div
          className={`min-h-screen bg-white w-56   ${width >= 750 ? 'block' : 'hidden'}`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full min-h-screen border">
          {/* Navbar */}
          <div className=" bg-white sticky top-0 z-50">
            <Navbar />
          </div>

          {/* Main - take the remaining space */}
          <div className="overflow-auto min-w-full">
            <Main />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Sidebar />
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Layout;
