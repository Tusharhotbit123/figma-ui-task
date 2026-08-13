import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Setting from '../../pages/Settings/Setting';
import NotFound from '../../pages/Errors/NotFound';

const Main = () => {
  return (
    <div className=" w-full min-h-screen bg-slate-200">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
