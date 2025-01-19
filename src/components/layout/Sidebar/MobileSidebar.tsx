import { useContext, useState } from 'react';
import { Logo } from '../../icons';
import SideBarButton from '../../atoms/SideBarButton/SideBarButton';
import arr from '../../atoms/SideBarButton/Data';
import { NavContext } from '../../../context/navContext/Navcontext';

const MobileSidebar = () => {
  const [active, setActive] = useState<null | number>();
  const { classvals, setClassvals } = useContext(NavContext);

  const handleClick=()=>{
    setClassvals('w-0');
  }

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        classvals === 'w-0' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        width: classvals === 'w-0' ? '0' : '100%',
      }}
    >
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex justify-between items-center text-2xl font-extrabold w-full h-[100px] bg-white px-4">
          <div className="flex">
            <div>
              <Logo />
            </div>
            <h1 className="text-[#343C6A] whitespace-nowrap relative left-4">Soar task</h1>
          </div>

          <button
            className="cursor-pointer"
            onClick={() => setClassvals('w-0')}
          >
            <img
              className="h-8 w-8 hover:scale-110 hover:transition-all hover:duration-300"
              src="https://i.pinimg.com/736x/af/be/c3/afbec3c88f09bf0c87719f09602ce9a6.jpg"
            />
          </button>
        </div>
        <div className="flex flex-col  flex-grow overflow-auto">
          {arr.map((element) => (
            <div onClick={handleClick}  key={element.id} className="flex pl-2 items-center ">
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

export default MobileSidebar;
