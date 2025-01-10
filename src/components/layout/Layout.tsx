import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';

const Layout = () => {
  return (
    <div className="flex min-h-screen w-screen bg-slate-100">
      {/* Sidebar */}
      <div className="min-h-screen bg-white w-56">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full min-h-screen border">
        {/* Navbar */}
        <div className=" bg-white">
          <Navbar />
        </div>

        {/* Main - take the remaining space */}
        <div className="flex-grow flex justify-center items-center overflow-auto">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Layout;
