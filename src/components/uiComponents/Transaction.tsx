import Jemi from '../icons/Jemi';
import Paypal from '../icons/Paypal';
import Group from '../icons/Group';

const Transaction = () => {
  return (
    <div className="bg-white  h-64 w-full  md:h-60   rounded-3xl flex flex-col items-center">
      <div className=" flex items-center justify-around w-full mt-3 mb-3">
        <div className='lg:relative lg:left-3'>
          <Group />
        </div>
        <div>
          <h1 className="font-medium text-base  md:text-xm lg:text-xs">
            Deposit from my Card
          </h1>
          <p className=" text-sm text-slate-400">
            28 January 2021
          </p>
        </div>
        <h1 className="font-medium text-base text-red-400 ">-$850</h1>
      </div>
      <div className="flex items-center justify-around w-full mb-3 mt-3">
        <div className="relative left-3">
          <Paypal />
        </div>
        <div>
          <h1 className="font-medium text-base md:text-xm lg:text-xs">Deposit Paypal</h1>
          <p className="text-sm text-slate-400">25 January 2021</p>
        </div>
        <h1 className="font-medium text-base text-green-300">+$2,500</h1>
      </div>
      <div className="flex items-center justify-around w-full mb-6 mt-3">
        <div className="relative left-3">
          <Jemi />
        </div>
        <div>
          <h1 className="font-medium text-base md:text-sm lg:text-xs">Jemi Wilson</h1>
          <p className="text-sm text-slate-400">21 January 2021</p>
        </div>
        <h1 className="font-medium text-base text-green-300">+$5,400</h1>
      </div>
    </div>
  );
};

export default Transaction;
