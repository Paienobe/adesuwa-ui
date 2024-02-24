import { ReactNode, createContext, useContext, useState } from "react";
import { ActionType, GlobalContextType } from "./types";

const GlobalContext = createContext({} as GlobalContextType);

type Props = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: Props) => {
  const [action, setAction] = useState<ActionType | null>(null);
  return (
    <GlobalContext.Provider value={{ action, setAction }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
