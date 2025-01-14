import Card from '../../components/uiComponents/Card';
import Transaction from '../../components/uiComponents/Transaction';

const DesktopDashboard = () => {
  return (
    <div className="main-div">
      <div className="card-transaction flex justify-around mt-6">
        
        <div className="cards  w-full flex flex-col justify-center">
           <div className='flex justify-around items-center mb-7'>
            <h1 className='font-semibold text-[22px] text-[#343C6A] relative right-[140px]'>My Cards</h1>
            <h1 className='font-semibold text-[17px] text-[#343C6A] relative left-[100px]'>See All</h1>
           </div>
           <div className='cards w-full flex justify-around'>
           <div>
            <Card
              cName="w-[350px] h-[235px]  text-white bg-gradient-to-r from-[#5B5A6F]  to-black rounded-3xl"
              cardHolder="text-xs text-[rgba(255,255,255,0.70)]"
              bottom=" w-full h-[70px] flex justify-around items-center bg-gradient-to-br from-[rgba(255,255,255,.15)] to-[rgba(255,255,255,0)] rounded-b-3xl"
              balance="text-xs"
              borderBottom="flex justify-center items-center  mr-6"
              ellipse="#FFFFFF80"
              color="white"
            />
          </div>

          <div className='relative right-8'>
            <Card
              cName="w-[350px] h-[235px]  text-[#343C6A] bg-white border border-[#DFEAF2] rounded-3xl"
              cardHolder="text-xs text-[#718EBF]"
              bottom=" w-full h-[70px] flex justify-around items-center  bg-gradient-to-br from-[rgba(255,255,255,.15)] to-[rgba(255,255,255,0)] rounded-b-3xl border-t border-[#DFEAF2]"
              balance="text-xs text-[#718EBF]"
              borderBottom="flex justify-center items-center   mr-6"
              ellipse="#9199AF80"
              color="black"
            />
          </div>
           </div>
         
        </div>

        <div className="transacation mr-10">
          <h1 className='font-semibold text-[22px] text-[#343C6A] mb-8'>Recent Transaction</h1>
          <Transaction />
        </div>
      </div>
      <div className="bar-chart"></div>
      <div className="line-chart"></div>
    </div>
  );
};

export default DesktopDashboard;
