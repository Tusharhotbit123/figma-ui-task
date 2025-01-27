export interface SideBarButtonProps {
  title: string;
  component: React.ComponentType<{
    height: string;
    width: string;
    color: string;
  }>;
  active: number | null | undefined;
  setActive: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  id: number;
}
