import React from 'react'
import { Glass } from '../icons'

// interface props{



// }

const NavInput = () => {
  return (
    <div className='w-full flex justify-center '>
       <label className='rounded-full w-[85%] flex bg-[#F5F7FA]'><Glass height='16' width="16"/><input className='h-10 bg-[#F5F7FA] w-[85%] pl-2 focus:ring-0 focus:outline-none'/></label>      
    </div>
  )
}

export default NavInput
