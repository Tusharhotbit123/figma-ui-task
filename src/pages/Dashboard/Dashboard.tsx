import LineChart from '../../components/uiComponents/BalanceChart';
import BarChart from '../../components/uiComponents/BarChart';
import Card from '../../components/uiComponents/Card';
import NewCard from '../../components/uiComponents/NewCard';
import PieChart from '../../components/uiComponents/PieChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';
import Transaction from '../../components/uiComponents/Transaction';

const Dashboard = () => {
  return (
    <div className=" bg-white md:bg-slate-200 grid grid-cols-1 grid-rows-7 w-full min-h-screen gap-4 lg:gap-x-10 p-2 lg:px-8 lg:py-8 lg:gap-y-0 md:px-3 md:gap-y-0 md:py-4 md:grid-rows-4 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3">
      <div className=" md:col-span-1 flex  flex-col items-center">
        <h1 className="font-semibold text-base text-indigo-900  w-full pl-6 pb-3">
          Text
        </h1>
        <Card
          className="text-white 
            bg-gradient-to-r from-gray-700  to-black
            "
          footer="bg-gradient-to-br from-white/15 to-white/0"
          name="text-gray-400"
        />
      </div>
      <div className=" md:col-span-1 lg:col-span-1 flex flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-8 pb-3">
          Text
        </h1>
        <NewCard
          cName="w-80 md:w-full lg:w-full  h-54  text-indigo-900 bg-white border border-sky-100 rounded-3xl"
          cardHolder="text-xs text-indigo-300"
          bottom=" w-full h-20 flex justify-around items-center   rounded-b-3xl border-t border-blue-100"
          balance="text-xs text-indigo-300"
          borderBottom="flex justify-center items-center   mr-6 relative left-6"
          ellipse="#9199AF80"
          color="black"
        />
      </div>
      <div className=" md:col-span-1 lg:col-span-1 flex flex-col items-center">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-8 pb-3">
          Text
        </h1>
        <Transaction />
      </div>

      <div className="flex md:hidden lg:flex md:col-span-2 lg:col-span-2  flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-8 ">
          Text
        </h1>
        <BarChart className="bg-white w-full md:w-full  h-60 flex items-center justify-center rounded-3xl m-3" />
      </div>

      <div className=" md:col-span-1 lg:cols-span-1 flex flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-8 pb-3">
          Text
        </h1>
        <PieChart />
      </div>

      <div className="hidden md:flex lg:hidden md:col-span-2 lg:col-span-2  flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-8 ">
          Text
        </h1>
        <BarChart className="bg-white w-full md:w-full  h-60 flex items-center justify-center rounded-3xl m-3" />
      </div>

      <div className=" md:col-span-1 lg:col-span-1 flex flex-col items-center ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-8 pb-3">
          Text
        </h1>
        <QuickTransfer className="bg-white w-full h-60 rounded-3xl flex flex-col items-center justify-around" />
      </div>
      <div className=" md:col-span-1 lg:col-span-2 flex flex-col items-center    ">
        <h1 className="font-semibold text-base text-indigo-900 w-full pl-8 pb-3">
          Text
        </h1>
        <LineChart className=" w-full h-60 bg-white flex items-center justify-center  rounded-3xl pt-3 pb-3" />
      </div>
    </div>
  );
};

export default Dashboard;
