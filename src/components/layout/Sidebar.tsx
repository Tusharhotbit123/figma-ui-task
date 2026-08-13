import { useState, useContext } from 'react';
import { Logo } from '../icons/Logo';
import SideBarButton from '../atoms/SideBarButton/SideBarButton';
import buttonData from '../atoms/SideBarButton/Data';
import { NavContext } from '../../context/navContext/Navcontext';

interface props {
  className: string;
  name: string;
}

const Sidebar = ({ className, name }: props) => {
  const [active, setActive] = useState<null | number | undefined>(1);
  const { setActiveWidth } = useContext(NavContext);

  return (
    <div className={className}>
      <div className={name}>
        <div className="flex  mt-6 md:relative md:top-2 md:pb-8">
          <div className="md:relative md:right-2">
            <Logo />
          </div>
          <h1 className="text-indigo-900 whitespace-nowrap relative left-3 font-extrabold text-2xl ">
            Soar Task
          </h1>
        </div>

        <button
          onClick={() => setActiveWidth('w-0')}
          className=" bottom-1 transalte transform-all hover:scale-110 md:hidden"
        >
          <img
            className="h-9 w-9 cursor-pointer "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVf2NCDlgM-TTW__M19bco-eUFEPzptPHzQ&s"
          />
        </button>
      </div>
      <div>
        {buttonData.map((element) => (
          <div key={element.id} className="flex pl-2 items-center ">
            <div
              className={` h-14  mr-8 w-2 rounded-3xl  ${active === element.id ? 'bg-gray-900' : 'bg-white'}`}
            ></div>
            <SideBarButton
              active={active}
              setActive={setActive}
              id={element.id}
              title={element.title}
              component={element.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
