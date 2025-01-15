// import Chip from '../../assets/images/Chip_Card.png';
import Ellipse from '../icons/Ellipse';
import Chip from '../icons/Chip';

interface props {
  cName?: string;
  cardHolder?: string;
  bottom?: string;
  balance?: string;
  borderBottom?: string;
  color?: string;
  ellipse?: string;
}

const Card = ({
  cName,
  cardHolder,
  bottom,
  balance,
  borderBottom,
  color,
  ellipse,
}: props) => {
  return (
    <div className={cName}>
      <div className="w-full h-[165px]  ">
        <div className="flex  justify-around pt-6 ">
          <div className="relative right-8">
            <h1 className={balance}>Balance</h1>
            <h1 className="font-semibold text-[20px]">$5000</h1>
          </div>
          <div className="mt-1 relative left-10">
            {/* <img className="w-9 h-9 relative left-8" src={Chip} /> */}
            <Chip color={color} />
          </div>
        </div>
        <div className="flex justify-around  mt-[33px]">
          <div className="relative right-4">
            <p className={cardHolder}>CARD HOLDER</p>
            <h1 className="font-semibold text-base">Eddy Cusuma</h1>
          </div>
          <div className="relative right-12">
            <p className={cardHolder}>VALID THRU</p>
            <h1 className="font-semibold text-base">12/22</h1>
          </div>
        </div>
      </div>
      <div className={bottom}>
        <h1 className="font-semibold text-[22px] relative left-2">
          3778**** ****1234
        </h1>
        <div className={borderBottom}>
          <div className="relative left-3">
            <Ellipse color={ellipse} />
          </div>
          <div>
            <Ellipse color={ellipse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
