import React from 'react';
import Chip from '../icons/Chip';
import Ellipse from '../icons/Ellipse';

interface props {
  className?: string;
  footer?: string;
  name?: string;
  icon?: React.ReactNode;
  cardnum?: string;
  cardvals?: string;
}

const Card = ({
  className = 'bg-black text-white',
  footer = 'bg-black',
  name = 'white',
  cardnum = 'font-semibold text-xl',
  cardvals = 'text-customPurple',
  icon = <Chip />,
}: props) => {
  return (
    <div
      className={`min-h-max w-80 md:w-full lg:min-w-max  ${className} rounded-3xl  flex flex-col items-center`}
    >
      <div className=" w-full flex justify-between px-5 items-center mt-6 mb-8">
        <div className="flex flex-col ">
          <h1 className="font-normal text-xs">Balance</h1>
          <h1 className={`font-semibold ${cardvals} text-xl`}>$5,756</h1>
        </div>
        <div>{icon}</div>
      </div>
      <div className={`w-full flex justify-between px-5 items-center mb-6`}>
        <div className="flex flex-col ">
          <h1 className={`${name} font-normal text-xs`}>CARD HOLDER</h1>
          <h1 className={`font-semibold ${cardvals} text-base`}>Eddy Cusuma</h1>
        </div>
        <div className="relative right-16">
          <h1 className={`${name} font-normal text-xs `}>VALID THRU</h1>
          <h1 className={`font-semibold ${cardvals} text-base`}>12/22</h1>
        </div>
      </div>
      <div
        className={`h-20  ${footer} rounded-b-3xl w-full flex justify-between px-5 items-center`}
      >
        <div>
          <h1 className={`${cardnum} ${cardvals}`}>3778 **** **** 1234</h1>
        </div>
        <div className="flex">
          <div className="relative left-3">
            <Ellipse color="gray" />
          </div>
          <div>
            <Ellipse color="gray" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
