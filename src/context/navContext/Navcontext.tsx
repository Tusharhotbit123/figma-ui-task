import { createContext, useState, ReactNode } from 'react';

type PropType = {
  activeWidth: string;
  setActiveWidth: React.Dispatch<React.SetStateAction<string>>;
};

export const NavContext = createContext<PropType>({} as PropType);

type NavProviderProps = {
  children: ReactNode;
};

export const NavProvider = ({ children }: NavProviderProps) => {
  const [activeWidth, setActiveWidth] = useState('w-0');

  return (
    <NavContext.Provider value={{ activeWidth, setActiveWidth }}>
      {children}
    </NavContext.Provider>
  );
};
