// import { useState } from 'react';
import { SideBarButtonProps } from './ButtonInterface';
import { Link } from 'react-router-dom';

const SideBarButton = ({
  title,
  component: Icon,
  id,
  active,
  setActive,
}: SideBarButtonProps) => {
  // const [active,setActive]=useState(0)

  return (
    <div className="h-[25px] w-[170px]  flex items-center justify-between relative right-4">
      <div className="">
        <Icon
          height="25"
          width="25"
          color={active === id ? 'black' : '#B1B1B1'}
        />
      </div>
      <div className="w-3/4 h-[25px] bg-slate">
        <Link to={title==="Dashboard"?"":title.toLowerCase()}>
          <button
            onClick={() => setActive(id)}
            className={`font-medium text-[18px] ml-2 ${active === id ? 'text-black' : 'text-[#B1B1B1]'}`}
          >
            {title}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBarButton;
