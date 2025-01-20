import NavInput from '../../uiComponents/NavInput';
import { Logo } from '../../icons';
// import MobileSidebar from '../Sidebar/MobileSidebar'
import { NavContext } from '../../../context/navContext/Navcontext';
import { ImageContext } from '../../../context/imageContext/ImageContext';
import { useContext } from 'react';

const MobileNavbar = () => {
  const { setClassvals } = useContext(NavContext);
  const {img}=useContext(ImageContext)

  return (
    <div className="h-36  min-w-full   bg-white flex flex-col items-center sticky top-0  z-40">
      <div className=" flex   justify-around items-center mt-6">
        <div
          className=" w-36 pl-6"
          onClick={() =>
            setClassvals(
              'fixed inset-0 z-50  w-full  translation transition-all',
            )
          }
        >
          <img
            className="h-8 w-6 cursor-pointer mt-2"
            src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          />
        </div>
        <div className=" w-36 flex justify-center items-center text-xl font-semibold">
          <h1 className="h-6 w-16 text-[#343C6A]">Settings</h1>
        </div>
        <div className="flex justify-center items-center w-36 pl-16">
          <img
            className="h-9 w-9 rounded-full"
            src={img}
          />
        </div>
      </div>
      <div className="mt-6 w-full">
        <NavInput />
      </div>
    </div>
  );
};

export default MobileNavbar;
