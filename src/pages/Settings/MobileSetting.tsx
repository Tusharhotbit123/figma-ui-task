import { useState } from 'react';
import Form from '../../components/uiComponents/Form';

const MobileSetting = () => {
  const [tab, setTab] = useState('Security');

  if (tab ==='Security') {
    return (
      <div className="flex flex-col justify-center ">
        <div className="flex justify-around font-medium text-sm mt-6 mb-2">
          <button onClick={()=>setTab("Edit Profile")} className="text-[#718EBF]">Edit Profiile</button>
          <button onClick={()=>setTab("Preferences")} className="text-[#718EBF]">
            Preferences
          </button>
          <button onClick={()=>setTab("Security")} className="text-[#232323] underline decoration-[2px] underline-offset-[10px]">Security</button>
        </div>
        <div className="flex items-center justify-center mt-12">
          <h1>Security</h1>
        </div>
      </div>
    );
  }  if (tab === 'Preferences') {
    return (
      <div className="flex flex-col justify-center ">
        <div className="flex justify-around font-medium text-sm mt-6 mb-2">
          <button onClick={()=>setTab("Edit Profile")} className="text-[#718EBF]">Edit Profiile</button>
          <button onClick={()=>setTab("Preferences")} className="text-[#232323] underline decoration-[2px] underline-offset-[10px]">
            Preferences
          </button>
          <button onClick={()=>setTab("Security")} className="text-[#718EBF]">Security</button>
        </div>
        <div className="flex items-center justify-center mt-12">
          <h1>Preferences</h1>
        </div>
      </div>
    );
  } else {
    

    return (
      <div className="flex flex-col justify-center  mb-14">
        <div>
        <div className="flex justify-around font-medium text-sm mt-6 mb-2">
          <button onClick={()=>setTab("Edit Profile")} className="text-[#232323] underline decoration-[2px] underline-offset-[10px] ">
            Edit Profiile
          </button>
          <button onClick={()=>setTab("Preferences")} className="text-[#718EBF]">Preferences</button>
          <button onClick={()=>setTab("Security")} className="text-[#718EBF]">Security</button>
        </div>
        <div className="flex justify-center">
          <hr className="w-96" />
        </div>
      </div>
      <div>
        <Form />
      </div>
      </div>
    );
  }
};

export default MobileSetting;
