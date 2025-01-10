export interface SideBarButtonProps {
    title: string;
    component: React.ComponentType<{ height: string; width: string; color: string }>; // Icon component type
  }