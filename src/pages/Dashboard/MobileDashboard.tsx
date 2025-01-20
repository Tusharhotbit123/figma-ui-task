import BarChart from '../../components/uiComponents/BarChart';
import Card from '../../components/uiComponents/Card';
import PieChart from '../../components/uiComponents/PieChart';
import Transaction from '../../components/uiComponents/Transaction';
import LineChart from '../../components/uiComponents/BalanceChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';

const MobileDashboard = () => {
  return (
    <div className="main-div w-full bg-white">
      <div className="flex flex-col">
        <div className="flex justify-between px-2 mb-6">
          <h1 className="font-semibold text-base text-[#343C6A]">My Cards</h1>
          <h1 className="font-semibold text-base text-[#343C6A]">See All</h1>
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-8 min-w-max px-4">
            <div className="flex-shrink-0">
              <Card
                cName="w-96 h-64 text-white bg-gradient-to-r from-[#5B5A6F] to-black rounded-3xl"
                cardHolder="text-xs text-[rgba(255,255,255,0.70)]"
                bottom="w-full h-24 flex justify-around items-center bg-gradient-to-br from-[rgba(255,255,255,.15)] to-[rgba(255,255,255,0)] rounded-b-3xl"
                balance="text-xs"
                borderBottom="flex justify-center items-center mr-6 relative left-6"
                ellipse="#FFFFFF80"
                color="white"
              />
            </div>
            <div className="flex-shrink-0">
              <Card
                cName="w-96 h-64 text-[#343C6A] bg-white border border-[#DFEAF2] rounded-3xl"
                cardHolder="text-xs text-[#718EBF]"
                bottom="w-full h-20 flex justify-around items-center bg-gradient-to-br from-[rgba(255,255,255,.15)] to-[rgba(255,255,255,0)] rounded-b-3xl border-t border-[#DFEAF2]"
                balance="text-xs text-[#718EBF]"
                borderBottom="flex justify-center items-center mr-6 relative left-6"
                ellipse="#9199AF80"
                color="black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <h1 className="text-[#343C6A] font-semibold text-base mt-6 mb-6 px-2">
            Recent Transaction
          </h1>
        </div>
        <Transaction />
      </div>
      <div>
        <div>
          <h1 className=" text-[#343C6A] text-base font-semibold px-2">
            Weekly Activity
          </h1>
          <BarChart className="bg-white  w-full h-80 flex items-center justify-center rounded-3xl " />
        </div>
        <div>
          <h1 className=" text-[#343C6A] text-base font-semibold px-2">
            Expense Statistics
          </h1>
          <div className="w-full h-full  flex items-center justify-center ">
            <PieChart />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-base text-[#343C6A] px-2">
          Quick Transfer
        </h1>
        <div className="flex items-center justify-center ">
          <QuickTransfer className="bg-white w-64 h-56 rounded-3xl flex flex-col items-center justify-around" />
        </div>
      </div>
      <div>
        <h1 className="text-[#343C6A] text-base font-semibold px-2">
          Balance History
        </h1>
        <div className="flex items-center justify-center">
          <LineChart className=" h-64 w-80  flex items-center justify-center  rounded-3xl " />
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;
