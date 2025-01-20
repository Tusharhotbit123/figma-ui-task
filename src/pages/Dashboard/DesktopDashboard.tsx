import BalanceChart from '../../components/uiComponents/BalanceChart';
import BarChart from '../../components/uiComponents/BarChart';
import Card from '../../components/uiComponents/Card';
import PieChart from '../../components/uiComponents/PieChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';
import Transaction from '../../components/uiComponents/Transaction';

const DesktopDashboard = () => {
  return (
    <div className="grid  grid-rows-[300px_auto_auto] gap-3 mx-10 mt-6 mb-10">
      <div className="grid grid-cols-3   gap-3">
        <div className="col-span-2 flex flex-col">
          <div className="flex justify-between mb-5">
            <h1 className="font-semibold text-[22px] text-[#343C6A]">
              My Cards
            </h1>
            <h1 className="font-semibold text-[22px] text-[#343C6A]">
              See All
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <Card
              cName="w-[350px] h-[235px]  text-white bg-gradient-to-r from-[#5B5A6F]  to-black rounded-3xl"
              cardHolder="text-xs text-[rgba(255,255,255,0.70)]"
              bottom=" w-full h-[70px] flex justify-around items-center bg-gradient-to-br from-[rgba(255,255,255,.15)] to-[rgba(255,255,255,0)] rounded-b-3xl"
              balance="text-xs"
              borderBottom="flex justify-center items-center  mr-6 relative left-6"
              ellipse="#FFFFFF80"
              color="white"
            />

            <Card
              cName="w-[350px] h-[235px]  text-[#343C6A] bg-white border border-[#DFEAF2] rounded-3xl"
              cardHolder="text-xs text-[#718EBF]"
              bottom=" w-full h-[70px] flex justify-around items-center  bg-gradient-to-br from-[rgba(255,255,255,.15)] to-[rgba(255,255,255,0)] rounded-b-3xl border-t border-[#DFEAF2]"
              balance="text-xs text-[#718EBF]"
              borderBottom="flex justify-center items-center   mr-6 relative left-6"
              ellipse="#9199AF80"
              color="black"
            />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="font-semibold text-[22px] text-[#343C6A] mb-6 relative right-20">
            Recent Transaction
          </h1>
          <Transaction />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 ">
          <h1 className="font-semibold text-[22px] text-[#343C6A]">
            {' '}
            Weekly Activity
          </h1>
          <div className="relative right-3">
            <BarChart className="bg-white w-[830px] h-[322px] flex items-center justify-center rounded-3xl m-3" />
          </div>
        </div>
        <div className="flex  flex-col items-center ">
          <h1 className="text-[#343C6A] font-semibold text-[22px] mb-4 mr-40">
            Expense Statistics
          </h1>
          <div className="bg-white rounded-3xl w-[350px] flex justify-center ml-4 ">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="">
          <h1 className="text-[#343C6A] font-semibold text-[22px] mb-5">
            Quick Transfer
          </h1>
          <QuickTransfer className="bg-white w-[400px] h-[276px] rounded-3xl flex flex-col items-center justify-around" />
        </div>
        <div className="col-span-2  flex flex-col items-center">
          <h1 className="font-semibold text-[22px] text-[#343C6A] mb-4 relative right-80">
            Balance History
          </h1>

          <BalanceChart className=" h-[280px] w-full bg-white flex items-center justify-center  rounded-3xl pt-3 pb-3" />
        </div>
      </div>
    </div>
  );
};

export default DesktopDashboard;
