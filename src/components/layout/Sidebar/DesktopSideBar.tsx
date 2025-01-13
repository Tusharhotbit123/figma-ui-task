import { Logo } from '../../icons';
import SideBarButton from '../../atoms/SideBarButton';
import arr from '../../atoms/Data';

const DesktopSideBar = () => {
  return (
    <div className=" w-56 min-h-screen m-0 p-0 flex flex-col">
      {/* Header */}
      <div className="flex justify-center items-center text-2xl font-extrabold w-full h-[100px] bg-white ">
        <div>
          <Logo />
        </div>
        <h1 className="text-[#343C6A] mr-10">Soar task</h1>
      </div>

      {/* Sidebar Buttons */}
      <div className="flex flex-col items-center flex-grow bg-white overflow-auto">
        {arr.map((element) => {
          return (
            <div key={element.id} className="p-2 ml-7">
              <SideBarButton title={element.title} component={element.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopSideBar;
