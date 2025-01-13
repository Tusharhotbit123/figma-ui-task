import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Setting from '../../../pages/Settings/Setting';
import Dashboard from '../../../pages/Dashboard/Dashboard';

const MobileMain = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/settings" element={<Setting />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MobileMain;