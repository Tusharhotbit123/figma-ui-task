import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Setting from '../../../pages/Settings/Setting';
import Dashboard from '../../../pages/Dashboard/Dashboard';

const MobileMain = () => {
  return (
    <div className="min-w-full">
      <Routes>
        <Route path="/setting" element={<Setting />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default MobileMain;
