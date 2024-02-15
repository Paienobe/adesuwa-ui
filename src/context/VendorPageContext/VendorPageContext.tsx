import { ReactNode, createContext, useContext, useState } from "react";
import { Vendor, VendorPageContextType } from "./types";

const VendorPageContext = createContext({} as VendorPageContextType);

type Props = {
  children: ReactNode;
};

export const VendorPageProvider = ({ children }: Props) => {
  const [vendor, setVendor] = useState({} as Vendor);
  return (
    <VendorPageContext.Provider value={{ vendor, setVendor }}>
      {children}
    </VendorPageContext.Provider>
  );
};

export const useVendorPageContext = () => {
  return useContext(VendorPageContext);
};
