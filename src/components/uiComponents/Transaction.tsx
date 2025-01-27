import { Jemi,Paypal,Group} from '../icons';


const Transaction = () => {
  return (
    <div className="bg-white  h-64 w-full  md:h-60 lg:min-w-max  rounded-3xl flex flex-col items-center">
      <div className=" flex items-center justify-around w-full mt-3 mb-3">
        <div>
          <Group />
        </div>
        <div  >
          <h1 className="font-medium text-base">Deposit from my Card</h1>
          <p className=" text-sm text-slate-400">28 January 2021</p>
        </div>
        <h1 className="font-medium text-base text-red-400 ">-${Math.floor(Math.random()*1000)}</h1>
      </div>
      <div className="flex items-center justify-around w-full mb-3 mt-3">
        <div className="relative right-2">
          <Paypal />
        </div>
        <div className='relative right-5'>
          <h1 className="font-medium text-base">Deposit Paypal</h1>
          <p className="text-sm text-slate-400">25 January 2021</p>
        </div>
        <h1 className="font-medium text-base text-green-300 relative left-2">
          +${Math.floor(Math.random()*3000)}
        </h1>
      </div>
      <div className="flex items-center justify-around w-full mb-6 mt-3">
        <div className="relative right-2">
          <Jemi />
        </div>
        <div className='relative right-6'>
          <h1 className="font-medium text-base ">Jemi Wilson</h1>
          <p className="text-sm text-slate-400">21 January 2021</p>
        </div>
        <h1 className="font-medium text-base text-green-300 relative left-2">
          +${Math.floor(Math.random()*3000)}
        </h1>
      </div>
    </div>
  );
};

export default Transaction;
