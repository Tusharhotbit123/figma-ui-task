import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Setting from '../../../pages/Settings/Setting';
import Dashboard from '../../../pages/Dashboard/Dashboard';

const DesktopMain = () => {




  return (
    <div>
      <Routes>
        <Route path="/setting" element={<Setting />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<div className="min-w-max min-h-screen min-h-auto flex  items-center justify-center overflow-y-scroll">Transactions</div>} />
        <Route path="/accounts" element={<div className="min-w-screen min-h-screen flex  items-center justify-center border">Accounts</div>} />
        <Route path="/investments" element={<div className="min-w-screen min-h-screen flex  items-center justify-center border">Investments</div>} />
        <Route path="/credit cards" element={<div className="min-w-screen min-h-screen flex  items-center justify-center border">Credit Cards</div>} />
        <Route path="/loans" element={<div className="min-w-screen min-h-screen flex  items-center justify-center border">Loans</div>} />
        <Route path="/services" element={<div className="min-w-screen min-h-screen flex  items-center justify-center border">Services</div>} />
        <Route path="/my privileges" element={<div className="min-w-screen min-h-screen flex  items-center justify-center border">My Privileges</div>} />
      </Routes>
    </div>
  );
};

export default DesktopMain;
