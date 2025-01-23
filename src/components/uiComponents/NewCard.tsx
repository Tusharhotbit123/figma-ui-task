import Ellipse from '../icons/Ellipse';
import { NewChip } from '../icons';

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
  color = 'black',
  ellipse,
}: props) => {
  return (
    <div className={cName}>
      <div className="w-full  h-40 flex flex-col justify-between">
        <div className="flex justify-around pt-6">
          <div className=" w-3/4 pl-6">
            <h1 className={balance}>Balance</h1>
            <h1 className="font-semibold text-xl">$5000</h1>
          </div>
          <div className="flex justify-end pr-4 w-auto">
            <NewChip color={color} />
          </div>
        </div>
        <div className="flex justify-around mt-8">
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
        <h1 className="font-semibold text-xl relative left-2">
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
