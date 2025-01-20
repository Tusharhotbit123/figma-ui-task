import Jemi from '../icons/Jemi';
import Paypal from '../icons/Paypal';
import Group from '../icons/Group';

const Transaction = () => {
  return (
    <div className="bg-white  h-64 w-full rounded-3xl flex flex-col items-center relative bottom-1">
      <div className=" flex items-center justify-around w-full mt-3 mb-3">
        <div className="relative left-4">
          <Group />
        </div>
        <div>
          <h1 className="font-medium text-base relative left-4">
            Deposit from my Card
          </h1>
          <p className="relative left-4 text-sm text-[#718EBF]">
            28 January 2021
          </p>
        </div>
        <h1 className="font-medium text-base text-[#FF4B4A]">-$850</h1>
      </div>
      <div className="flex items-center justify-around w-full mb-3 mt-3">
        <div className="relative left-3">
          <Paypal />
        </div>
        <div>
          <h1 className="font-medium text-base">Deposit Paypal</h1>
          <p className="text-sm text-[#718EBF]">25 January 2021</p>
        </div>
        <h1 className="font-medium text-base text-[#41D4A8]">+$2,500</h1>
      </div>
      <div className="flex items-center justify-around w-full mb-6 mt-3">
        <div className="relative left-3">
          <Jemi />
        </div>
        <div>
          <h1 className="font-medium text-base">Jemi Wilson</h1>
          <p className="text-sm text-[#718EBF]">21 January 2021</p>
        </div>
        <h1 className="font-medium text-base text-[#41D4A8]">+$5,400</h1>
      </div>
    </div>
  );
};

export default Transaction;
