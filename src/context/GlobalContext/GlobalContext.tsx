import { ReactNode, createContext, useContext, useState } from "react";
import { ActionType, GlobalContextType } from "./types";
import { useNavigate, useSearchParams } from "react-router-dom";

const GlobalContext = createContext({} as GlobalContextType);

type Props = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: Props) => {
  const [action, setAction] = useState<ActionType | null>(null);
  const [queryText, setQueryText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigator = (path: string) => {
    const navigate = useNavigate();
    navigate(path);
  };

  return (
    <GlobalContext.Provider
      value={{
        action,
        setAction,
        queryText,
        setQueryText,
        navigator,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
