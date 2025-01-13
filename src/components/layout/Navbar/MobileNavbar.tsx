import React from 'react';
import NavInput from '../../uiComponents/NavInput';

const MobileNavbar = () => {
  return (<div className='h-[140px] flex flex-col items-center'>
    
   <div className=' flex  w-full justify-around mt-6'>
    <div className=' w-36 pl-6'>Hamburger</div>
    <div className=' w-36 flex justify-center items-center'>Settings</div>
    <div className='flex justify-center items-center w-36 pl-16'>Photo</div>
   </div>
    <div className='mt-6 w-full'>
       <NavInput />
    </div>
    
  </div>);
};

export default MobileNavbar;
