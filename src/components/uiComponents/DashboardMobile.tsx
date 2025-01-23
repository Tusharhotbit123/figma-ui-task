import LineChart from '../../components/uiComponents/BalanceChart';
import BarChart from '../../components/uiComponents/BarChart';
import Card from './Card';
import NewCard from './NewCard';
import PieChart from '../../components/uiComponents/PieChart';
import QuickTransfer from '../../components/uiComponents/QuickTransfer';
import Transaction from '../../components/uiComponents/Transaction';

const DashboardMobile = () => {
  return (
    <>
      <div className="md:hidden bg-white  w-full min-h-screen grid grid-rows-7">
        <div className="flex flex-col items-center px-2">
          <h1 className="font-semibold text-base text-indigo-900  w-full pl-6 ">
            Text
          </h1>
          <Card
            className="text-white bg-gradient-to-r from-gray-700  to-black"
            footer="bg-gradient-to-br from-white/15 to-white/0"
            name="text-gray-400"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-base text-indigo-900 w-full pl-8">
            Text
          </h1>
          <NewCard
            cName="w-96  h-54  text-indigo-900 bg-white border border-sky-100 rounded-3xl"
            cardHolder="text-xs text-indigo-300"
            bottom=" w-full h-20 flex justify-around items-center   rounded-b-3xl border-t border-blue-100"
            balance="text-xs text-indigo-300"
            borderBottom="flex justify-center items-center   mr-6 relative left-6"
            ellipse="#9199AF80"
            color="black"
          />
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="font-semibold text-base text-indigo-900 w-full pl-8">
            Text
          </h1>
          <Transaction />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-base text-indigo-900 w-full pl-8">
            Text
          </h1>
          <BarChart className="bg-white w-4/5 h-full flex items-center justify-center rounded-3xl m-3" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-base text-indigo-900 w-full pl-8">
            Text
          </h1>
          <PieChart />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-base text-indigo-900 w-full pl-8">
            Text
          </h1>
          <QuickTransfer className="bg-white w-full h-60 rounded-3xl flex flex-col items-center justify-around" />
        </div>
        <div className="flex flex-col items-center w-full">
          <h1 className="font-semibold text-base text-indigo-900 w-full pl-8">
            Text
          </h1>
          <LineChart className=" w-3/4 h-3/4 bg-white flex items-center justify-center  rounded-3xl pt-3 pb-3" />
        </div>
      </div>
    </>
  );
};

export default DashboardMobile;
