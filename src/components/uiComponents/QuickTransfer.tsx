import React, { useRef } from 'react';
import { Arrow } from '../icons';
import Vector from '../icons/Vector';
import { TransferData } from '../../utils/constants';

interface props {
  className?: string;
}

const QuickTransfer = ({ className }: props) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (scrollOffset: number) => {
    if (ref.current)
      ref.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
  };

  return (
    <div className={`${className} overflow-hidden`}>
      <div className="flex justify-around items-center w-full lg:min-w-max  h-32">
        <button
          onClick={() => scrollToSection(-80)}
          className="h-12 w-12 bg-white  rounded-full flex items-center justify-center shadow-slate-500 shadow-2xl"
        >
          <Arrow className="transform scale-x-[-1]" />
        </button>
        <div
          ref={ref}
          className="flex md:w-48  space-x-4 overflow-x-auto   px-4"
        >
          {TransferData.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shrink-0  "
            >
              <img
                className="lg:h-16 lg:w-16 rounded-full"
                src={user.img}
                alt={user.name}
              />
              <h1 className="mt-2 font-medium">{user.name}</h1>
              <h1 className="text-slate-400 text-base">{user.role}</h1>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollToSection(80)}
          className="h-12 w-12 bg-white  rounded-full flex items-center justify-center shadow-slate-500 shadow-2xl"
        >
          <Arrow />
        </button>
      </div>
      <div className="h-12 w-full flex items-center justify-around lg:min-w-max">
        <h1 className="text-slate-400 font-normal text-base lg:text-xm">
          Write Amount
        </h1>
        <div className="bg-gray-100 rounded-3xl w-54 h-12 flex justify-between pl-4 items-center">
          <span className="text-slate-400 text-sm pr-3 ">525.50</span>
          <button className="bg-gray-900 h-12 w-32 rounded-3xl text-white flex justify-center items-center">
            <p className="text-base font-medium pr-4">Send</p>
            <Vector />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(QuickTransfer);
