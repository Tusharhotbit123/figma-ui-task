import { SideBarButtonProps } from './ButtonInterface';
import { Link } from 'react-router-dom';

const SideBarButton = ({
  title,
  component: Icon,
  id,
  active,
  setActive,
}: SideBarButtonProps) => {
  return (
    <div className="h-6 w-44  flex items-center justify-between relative right-4">
      <div>
        <Icon
          height="25"
          width="25"
          color={active === id ? 'black' : 'gray'}
        />
      </div>
      <div className="w-3/4 h-6 bg-slate">
        <Link to={title === 'Dashboard' ? '' : title.toLowerCase()}>
          <button
            onClick={() => setActive(id)}
            className={`font-medium text-xl ml-2 ${active === id ? 'text-black' : 'text-gray-400'}`}
          >
            {title}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBarButton;
