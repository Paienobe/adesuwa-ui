import { ReactNode, createContext, useContext } from "react";
import { VendorPageContextType } from "./types";

const VendorPageContext = createContext({} as VendorPageContextType);

type Props = {
  children: ReactNode;
};

export const VendorPageProvider = ({ children }: Props) => {
  return (
    <VendorPageContext.Provider value={{}}>
      {children}
    </VendorPageContext.Provider>
  );
};

export const useVendorPageContext = () => {
  return useContext(VendorPageContext);
};
