import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  const path = location.pathname.slice(1);

  return (
    <div className="h-full w-full flex items-center justify-center">{path}</div>
  );
};

export default NotFound;
