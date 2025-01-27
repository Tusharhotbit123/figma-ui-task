import { IconProps } from "../../icons/type";
export interface SideBarButtonProps {
  title: string;
  component:IconProps ;
  active: number | null | undefined;
  setActive: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  id: number;
}
