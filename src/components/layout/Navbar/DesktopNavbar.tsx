import { Notifications, Settings, Glass } from '../../icons';
import { useLocation,useNavigate} from 'react-router-dom';
import {useContext } from "react"
import { ImageContext } from '../../../context/imageContext/ImageContext';

const DesktopNavbar = () => {
  const location = useLocation();
  if (!location || !location.pathname) {
    return <div>Error: No location found!</div>;
  }

  const {img}=useContext(ImageContext)

  const navigate=useNavigate()

  const handleClick=()=>{
    navigate('/setting')
  }

  return (
    <div className=" h-24 bg-white w-full  flex items-center justify-between">
      <div className="flex justify-start  w-96 pl-10">
        <h1 className="text-[#343C6A] font-semibold text-lg justify-start">
          {location.pathname === '/setting' ? 'Setting' : 'Dashboard'}
        </h1>
      </div>

      <div className="flex justify-around   w-[650px]">
        <div className="flex items-center justify-center rounded-3xl bg-[#F5F7FA] w-72 h-14">
          <div className="pr-2 pl-6">
            <Glass height="20" width="20" color="#718EBf " />
          </div>
          <input
            className="bg-[#F5F7FA] text-xl  text-[#8BA3CB] rounded-3xl  focus:outline-none focus:ring-0  font-normal"
            placeholder="Search for something"
          />
        </div>

        <button onClick={handleClick} className="h-14 w-14 rounded-full bg-[#F5F7FA] flex items-center justify-center">
          <Settings height="25" width="25" color="#718EBF" />
        </button>
        <button className="h-14 w-14 rounded-full bg-[#F5F7FA] flex justify-center items-center">
          <Notifications height="25" width="25" color="#396AFF" />
        </button>
        <img
          className="h-16 w-16 rounded-full object-cover"
          src={img}
        />
      </div>
    </div>
  );
};

export default DesktopNavbar;
