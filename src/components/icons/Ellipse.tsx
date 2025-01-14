import { IIconProps } from './type';

const Ellipse = ({width="30",height="30",color="#9199AF"}:IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill={color} fill-opacity="0.5" />
    </svg>
  );
};

export default Ellipse