import Chip from '../../assets/images/Chip_Card.png';
import Ellipse from "../../assets/images/Ellipse 9.png"

const DarkCard = () => {
  return (
    <div className="w-[350px] h-[235px]  text-white bg-gradient-to-r from-[#5B5A6F]  to-black rounded-3xl">
      <div className="w-full h-[165px]  ">
        <div className="flex  justify-around pt-6 ">
          <div className="relative right-8">
            <h1 className="text-xs">Balance</h1>
            <h1 className="font-semibold text-[20px]">$5000</h1>
          </div>
          <div className="mt-1">
            <img className="w-9 h-9 relative left-8" src={Chip} />
          </div>
        </div>
        <div className="flex justify-around  mt-[33px]">
          <div className="relative right-4">
            <p className="text-xs text-[rgba(255,255,255,0.70)] ">
              CARD HOLDER
            </p>
            <h1 className="font-semibold text-base">Eddy Cusuma</h1>
          </div>
          <div className="relative right-12">
            <p className="text-xs text-[rgba(255,255,255,0.70)]">VALID THRU</p>
            <h1 className="font-semibold text-base">12/22</h1>
          </div>
        </div>

      </div>
      <div className=" w-full h-[70px] flex justify-around items-center bg-gradient-to-br from-[rgba(255,255,255,.15)] to-[rgba(255,255,255,0)] rounded-b-3xl ">
        <h1 className='font-semibold text-[22px]'>3778**** ****1234</h1>
        <div className='flex justify-center items-center mr-6'>
        <img  className="relative left-3" src={Ellipse}/>
        <img src={Ellipse}/>
        </div>
      </div>
    </div>
  );
};

export default DarkCard;
