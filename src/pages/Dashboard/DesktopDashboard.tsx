import BalanceChart from '../../components/uiComponents/BalanceChart';
import BarChart from '../../components/uiComponents/BarChart';
import Card from '../../components/uiComponents/Card';
import PieChart from '../../components/uiComponents/PieChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';
import Transaction from '../../components/uiComponents/Transaction';

const DesktopDashboard = () => {
  return (
    <div className="main-div  ">
      <div className="card-transaction flex justify-around mt-6">
        <div className="cards  w-full flex flex-col justify-center">
          <div className="flex justify-around items-center mb-7">
            <h1 className="font-semibold text-[22px] text-[#343C6A] relative right-[140px]">
              My Cards
            </h1>
            <h1 className="font-semibold text-[17px] text-[#343C6A] relative left-[50px]">
              See All
            </h1>
          </div>
          <div className="cards w-full flex justify-around">
            <div>
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

            <div className="relative right-20">
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

        <div className="transacation mr-10 relative right-24">
          <h1 className="font-semibold text-[22px] text-[#343C6A] mb-8">
            Recent Transaction
          </h1>
          <Transaction />
        </div>
      </div>
      <div className="bar-chart piechart mt-6 flex">
        <div className="bar-chart flex flex-col  mb-5 ml-10 mr-10">
          <h1 className="text-[#343C6A] font-semibold text-[22px]  relative left-3">
            Weekly Activity
          </h1>
          <BarChart className="bg-white w-[745px] h-[322px] flex items-center justify-center rounded-3xl m-3" />
        </div>
        <div className="piechart   flex flex-col ">
          <h1 className="text-[#343C6A] font-semibold text-[22px] mb-4">
            Expense Statistics
          </h1>
          <div className="bg-white w-[350px] h-[314px] rounded-3xl flex items-center justify-center">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="line-chart-transfer flex items-center justify-around mb-10 relative  bottom-9">
        <div className="quick-transfer mt-8">
          <h1 className="text-[#343C6A] font-semibold text-[22px] mb-5">
            Quick Transfer
          </h1>
          <QuickTransfer className="bg-white w-[445px] h-[276px] rounded-3xl flex flex-col items-center justify-around" />
        </div>
        <div className="balance-history flex flex-col justify-center ml-7 relative right-20">
          <h1 className="font-semibold text-[22px] text-[#343C6A] mt-6 mb-5">
            Balance History
          </h1>

          <BalanceChart className=" h-[276px] w-[660px] bg-white flex items-center justify-center  rounded-3xl pt-3 pb-3" />
        </div>
      </div>
    </div>
  );
};

export default DesktopDashboard;
