import Livia from '../../assets/images/Livia.png';
import Randy from '../../assets/images/Randy.png';
import Workman from '../../assets/images/Workman.png';
import Arrow from '../icons/Arrow';
import Vector from '../icons/Vector';

interface props {
  className?: string;
}

const QuickTransfer = ({ className }: props) => {
  return (
    <div className={className}>
      <div className="flex justify-around items-center w-full lg:min-w-max  h-32">
        <div className="flex flex-col items-center justify-center">
          <img className="lg:h-16 lg:w-16" src={Livia} />
          <h1 className="text-base text-gray-900 font-bold">Livia Bator</h1>
          <h1 className="text-slate-400 font-semibold text-[15px]">CEO</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="lg:h-16 lg:w-16" src={Randy} />
          <h1>Randy Press</h1>
          <h1 className="text-slate-400 text-base">Director</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="lg:h-16 lg:w-16" src={Workman} />
          <h1>Workman</h1>
          <h1 className="text-slate-400 text-base">Designer</h1>
        </div>
        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-slate-500 shadow-2xl">
          <Arrow />
        </div>
      </div>
      <div className="h-12 w-full flex items-center justify-around lg:min-w-max">
        <h1 className="text-slate-400 font-normal text-base lg:text-xm">
          Write Amount
        </h1>
        <div className="bg-gray-100 rounded-3xl w-54 h-12 flex justify-between pl-4 items-center">
          <span className="text-slate-400 text-sm pr-3 ">525.50</span>
          <button className="bg-gray-900 h-12 w-32 rounded-3xl text-white flex justify-center items-center">
            <p className="text-base font-medium pr-4">Send</p>
            <Vector />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
