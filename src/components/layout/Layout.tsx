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
        
        <div
          className={`min-h-screen bg-white w-56   ${width >= 750 ? 'block' : 'hidden'}`}
        >
          <Sidebar />
        </div>

        
        <div className="flex flex-col w-full">
          
          <div className=" bg-white sticky top-0 z-50">
            <Navbar />
          </div>

          
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
