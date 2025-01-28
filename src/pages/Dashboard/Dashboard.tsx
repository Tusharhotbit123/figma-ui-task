import LineChart from '../../components/uiComponents/BalanceChart';
import BarChart from '../../components/uiComponents/BarChart';
import Card from '../../components/uiComponents/Card';
import PieChart from '../../components/uiComponents/PieChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';
import Transaction from '../../components/uiComponents/Transaction';
import { NewChip } from '../../components/icons';

const Dashboard = () => {
  return (
    <div className=" bg-white md:bg-slate-200 grid grid-cols-1 grid-rows-7 w-full min-h-screen gap-4 lg:gap-x-8 p-2 lg:px-8 lg:py-8 lg:gap-y-0 md:px-3 md:gap-y-0 md:py-4 md:grid-rows-4 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3">
      <div className=" md:col-span-1 flex  flex-col items-center">
        <h1 className="font-semibold text-base text-indigo-900  w-full pl-3 pb-3">
          My Cards
        </h1>
        <Card
          className="text-white 
            bg-gradient-to-r from-gray-700  to-black
            "
          footer="bg-gradient-to-br from-white/15 to-white/0"
          name="text-gray-400"
          cardvals="text-white"
        />
      </div>
      <div className=" md:col-span-1 lg:col-span-1 flex flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-3 pb-3 lg:flex lg:justify-end lg:pr-3">
          See All
        </h1>

        <Card
          className="bg-white text-customBlue border border-slate-300"
          footer="border-t border-slate-300"
          name="text-customBlue"
          icon={<NewChip />}
        />
      </div>
      <div className=" md:col-span-1 lg:col-span-1 flex flex-col items-center">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-3 pb-3">
          Recent Transaction
        </h1>
        <Transaction />
      </div>

      <div className="flex md:hidden lg:flex md:col-span-2 lg:col-span-2  flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-3 ">
          Weekly Activity
        </h1>
        <BarChart className="bg-white w-full md:w-full  h-60 flex items-center justify-center rounded-3xl m-3" />
      </div>

      <div className=" md:col-span-1 lg:cols-span-1 flex flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-3 pb-3">
          Expense Statistics
        </h1>
        <PieChart />
      </div>

      <div className="hidden md:flex lg:hidden md:col-span-2 lg:col-span-2  flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-3 ">
          Weekly Activity
        </h1>
        <BarChart className="bg-white w-full md:w-full  h-60 flex items-center justify-center rounded-3xl m-3" />
      </div>

      <div className=" md:col-span-1 lg:col-span-1 flex flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-3 pb-3">
          Quick Transfer
        </h1>
        <QuickTransfer className="bg-white w-full  h-60 rounded-3xl flex flex-col items-center justify-around" />
      </div>
      <div className=" md:col-span-1 lg:col-span-2 flex flex-col items-center    ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-3 pb-3">
          Balance History
        </h1>
        <LineChart className=" w-full h-60 bg-white flex items-center justify-center  rounded-3xl pt-3 pb-3" />
      </div>
    </div>
  );
};

export default Dashboard;
