import {Routes,Route} from "react-router-dom"
import Dashboard from "../../pages/Dashboard/Dashboard";
import Setting from "../../pages/Settings/Setting";

const Main = () => {
  return(
     
  <div className=" w-full min-h-screen bg-slate-200">          
         <Routes>
          <Route path="/"  element={<Dashboard/>}/>
          <Route path="/settings" element={<Setting/>}/>
         </Routes>
  </div>

  ) 
  
};

export default Main;
