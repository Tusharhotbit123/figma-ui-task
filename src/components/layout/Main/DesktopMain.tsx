import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Setting from '../../../pages/Settings/Setting';
import Dashboard from '../../../pages/Dashboard/Dashboard';

const DesktopMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/setting" element={<Setting />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default DesktopMain;
