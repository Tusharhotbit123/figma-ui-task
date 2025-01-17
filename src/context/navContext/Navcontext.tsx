import { createContext, useState, ReactNode } from "react";

type PropType = {
  classvals: string;
  setClassvals: React.Dispatch<React.SetStateAction<string>>;
};

export const NavContext = createContext<PropType>({} as PropType);

type NavProviderProps = {
  children: ReactNode;
};

export const NavProvider = ({ children }: NavProviderProps) => {
  const [classvals, setClassvals] = useState("fixed inset-0 z-50  w-0");

  return (
    <NavContext.Provider value={{ classvals, setClassvals }}>
      {children}
    </NavContext.Provider>
  );
};
 