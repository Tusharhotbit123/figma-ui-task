import React from 'react';
import Livia from '../../assets/images/Livia.png';
import Randy from '../../assets/images/Randy.png';
import Workman from '../../assets/images/Workman.png';
import Arrow from '../../assets/images/Arrow.png';
import Vector from '../icons/Vector';

interface props {
  className?: string;
}

const QuickTransfer = ({ className }: props) => {
  return (
    <div className={className}>
      <div className="flex justify-around items-center w-96 h-32">
        <div className="flex flex-col items-center justify-center">
          <img src={Livia} />
          <h1 className="text-base text-[#232323] font-bold">Livia Bator</h1>
          <h1 className="text-[#718EBF] font-semibold text-[15px]">CEO</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Randy} />
          <h1>Randy Press</h1>
          <h1 className="text-[#718EBF] text-[15px]">Director</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={Workman} />
          <h1>Workman</h1>
          <h1 className="text-[#718EBF] text-[15px]">Designer</h1>
        </div>
        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-slate-500 shadow-2xl">
          <img src={Arrow} />
        </div>
      </div>
      <div className="h-12 w-96 flex items-center justify-around">
        <h1 className="text-[#718EBF] font-normal text-base">Write Amount</h1>
        <div className="bg-[#EDF1F7] rounded-3xl w-64 h-12 flex justify-end items-center">
          <span className="text-[#718EBF] text-base relative right-16">
            525.50
          </span>
          <button className="bg-[#232323] h-12 w-32 rounded-3xl text-white flex justify-center items-center">
            <p className="text-base font-medium pr-4">Send</p>
            <Vector />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
