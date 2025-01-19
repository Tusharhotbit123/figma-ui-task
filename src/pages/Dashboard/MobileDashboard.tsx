import BarChart from '../../components/uiComponents/BarChart';
import Card from '../../components/uiComponents/Card';
import PieChart from '../../components/uiComponents/PieChart';
import Transaction from '../../components/uiComponents/Transaction';
import LineChart from '../../components/uiComponents/BalanceChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';

const MobileDashboard = () => {
  return (
    <div className="main-div bg-white">
      <div className="creadits-cards flex flex-col">
        <div className="flex justify-around items-center mt-6 mb-6">
          <h1 className="relative right-20 font-semibold text-base text-[#343C6A]">
            My Cards
          </h1>
          <h1 className="relative left-14 font-semibold text-base text-[#343C6A]">
            See All
          </h1>
        </div>
        <div className="flex overflow-x-auto w-full">
          <div className="flex-none mr-4">
            <Card
              cName="w-[350px] h-[235px]  text-white bg-gradient-to-r from-[#5B5A6F]  to-black rounded-3xl"
              cardHolder="text-xs text-[rgba(255,255,255,0.70)]"
              bottom=" w-full h-[70px] flex justify-around items-center bg-gradient-to-br from-[rgba(255,255,255,.15)] to-[rgba(255,255,255,0)] rounded-b-3xl"
              balance="text-xs"
              borderBottom="flex justify-center items-center  mr-6 relative left-6"
              ellipse="#FFFFFF80"
              color="white"
            />
          </div>

          <div className="flex-none ml-4">
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
      </div>
      <div className="recent flex flex-col justify-center ">
        <h1 className="text-[#343C6A] font-semibold text-base mt-6 mb-6 ml-[18px]">
          Recent Transaction
        </h1>
        <div className="w-[325px] h-[214px] flex items-center justify-center relative left-12">
          <Transaction />
        </div>
      </div>
      <div className="barchart  flex flex-col mt-6">
        <h1 className=" text-[#343C6A] text-base font-semibold ml-[18px]">
          Weekly Activity
        </h1>
        <BarChart className="bg-white w-[480px] h-[300px] flex items-center justify-center rounded-3xl m-3" />
      </div>
      <div className="pie flex flex-col justify-center mb-36">
        <h1 className=" text-[#343C6A] text-base font-semibold ml-[18px]">
          Expense Statistics
        </h1>
        <div className="w-full h-full  flex items-center justify-center ">
          <PieChart />
        </div>
      </div>
      <div className="quicktransfer mb-6 flex flex-col  justify-center">
        <h1 className="font-semibold text-[18px] text-[#343C6A] ml-[18px]">
          Quick Transfer
        </h1>
        <div className="flex items-center justify-center ">
          <QuickTransfer className="bg-white w-[325px] h-[229px] rounded-3xl flex flex-col items-center justify-around" />
        </div>
      </div>
      <div className="linechart flex flex-col justify-center">
        <h1 className="text-[#343C6A] text-base font-semibold ml-[18px]">
          Balance History
        </h1>
        <div className="flex items-center justify-center">
          <LineChart className=" h-[254px] w-[380px] bg-white flex items-center justify-center  rounded-3xl pt-3 pb-3" />
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;
