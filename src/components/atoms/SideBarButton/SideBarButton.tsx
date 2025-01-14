import { useState } from 'react';
import { SideBarButtonProps } from './ButtonInterface';
import { Link } from 'react-router-dom';

const SideBarButton = ({ title, component: Icon }: SideBarButtonProps) => {
  const [color, setColor] = useState('#232323');

  const handleMouseEnter = () => {
    setColor('white');
  };

  const handleMouseLeave = () => {
    setColor('#232323');
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[25px] w-[170px]  flex items-center justify-between  hover:bg-black hover:text-white hover:rounded-lg hover:scale-110 hover:h-[45px] hover:translate hover:transition-all hover:pl-2"
    >
      <div className="">
        <Icon height="25" width="25" color={color} />
      </div>
      <div className="w-3/4 h-[25px] bg-slate">
        <Link to={title.toLowerCase()}>
          <button className="font-medium text-[18px] ml-2 ">{title}</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBarButton;
