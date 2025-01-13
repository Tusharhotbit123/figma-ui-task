import { SideBarButtonProps } from './ButtonInterface';

const SideBarButton = ({ title, component: Icon }: SideBarButtonProps) => {
  return (
    <div className="h-[25px] w-[170px]  flex items-center justify-between ">
      <div className="">
        <Icon height="25" width="25" color="#232323" />
      </div>
      <div className="w-3/4 h-[25px] bg-slate">
        <button className="font-medium text-[18px] ml-2">{title}</button>
      </div>
    </div>
  );
};

export default SideBarButton;
