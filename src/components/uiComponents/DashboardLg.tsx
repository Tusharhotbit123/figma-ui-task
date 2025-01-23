import LineChart from '../../components/uiComponents/BalanceChart';
import BarChart from '../../components/uiComponents/BarChart';

import PieChart from '../../components/uiComponents/PieChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';
import Transaction from '../../components/uiComponents/Transaction';
import Card from './Card';
import NewCard from './NewCard';

const DashboardLg = () => {
  return (
    <>
      <div className="hidden lg:grid  w-full min-h-full grid-cols-3 grid-rows-3 gap-x-12 gap-y-4 p-4">
        <div className="col-span-1">
          <h1 className="font-semibold text-base text-indigo-900  w-full pb-4  m-0 p-0">
            My Cards
          </h1>
          <Card
            className="text-white bg-gradient-to-r from-gray-700  to-black"
            footer="bg-gradient-to-br from-white/15 to-white/0"
            name="text-gray-400"
          />
        </div>
        <div className="col-span-1">
          <h1 className="font-semibold text-base text-indigo-900 w-full text-end pb-4">
            See All
          </h1>
          <NewCard
            cName="w-full  h-54  text-indigo-900 bg-white border border-sky-100 rounded-3xl"
            cardHolder="text-xs text-indigo-300"
            bottom=" w-full h-20 flex justify-around items-center   rounded-b-3xl border-t border-blue-100"
            balance="text-xs text-indigo-300"
            borderBottom="flex justify-center items-center   mr-6 relative left-6"
            ellipse="#9199AF80"
            color="black"
          />
        </div>
        <div className="col-span-1">
          <h1 className="font-semibold text-base text-indigo-900 w-full  pb-4">
            Recent Transaction
          </h1>
          <Transaction />
        </div>
        <div className=" col-span-2">
          <h1 className="font-semibold text-base text-indigo-900 w-full  pb-4">
            Weekly Activity
          </h1>
          <BarChart className="bg-white w-full h-60 flex items-center justify-center rounded-3xl " />
        </div>
        <div className=" col-span-1">
          <h1 className="font-semibold text-base text-indigo-900 w-full  pb-4">
            Expense Statistics
          </h1>

          <PieChart />
        </div>
        <div className=" col-span-1">
          <h1 className="font-semibold text-base text-indigo-900 w-full  pb-4">
            Quick Transfer
          </h1>
          <QuickTransfer className="bg-white w-full h-60 rounded-3xl flex flex-col items-center justify-around" />
        </div>
        <div className=" col-span-2">
          <h1 className="font-semibold text-base text-indigo-900 w-full  pb-4">
            Balance History
          </h1>
          <LineChart className=" w-full h-60 bg-white flex items-center justify-center  rounded-3xl pt-3 pb-3" />
        </div>
      </div>
    </>
  );
};

export default DashboardLg;
