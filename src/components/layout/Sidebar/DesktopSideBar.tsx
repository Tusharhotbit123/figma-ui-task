import { useState } from 'react';
import { Logo } from '../../icons';
import SideBarButton from '../../atoms/SideBarButton/SideBarButton';
import arr from '../../atoms/SideBarButton/Data';
// import { NavContext } from '../../../context/navContext/Navcontext';

const DesktopSidebar = () => {
  const [active, setActive] = useState<null | number>(1);
  // const { classvals, setClassvals } = useContext(NavContext);

  return (
    <div className='sticky top-0'>
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex justify-between items-center text-2xl font-extrabold w-full h-[100px] bg-white px-4">
          <div className="flex">
            <div>
              <Logo />
            </div>
            <h1 className="text-[#343C6A] whitespace-nowrap ml-4">Soar task</h1>
          </div>
        </div>
        <div className="flex flex-col  flex-grow overflow-auto">
          {arr.map((element) => (
            <div key={element.id} className="flex pl-2 items-center">
              <div
                className={` h-16  mr-5 w-2 rounded-3xl  ${active === element.id ? 'bg-[#232323]' : 'bg-white'}`}
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
    </div>
  );
};

export default DesktopSidebar;
