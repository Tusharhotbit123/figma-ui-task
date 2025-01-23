import { IIconProps } from './type';

const Arrow = ({
  width = '20',
  height = '20',
  color = '#708CBE',
}: IIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L7.5 7.5L1 14" stroke="#718EBF" stroke-width="2" />
    </svg>
  );
};

export default Arrow;
