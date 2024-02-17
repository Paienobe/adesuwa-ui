import { ReactNode, createContext, useContext, useState } from "react";
import { Vendor, VendorContextType } from "./types";

const VendorContext = createContext({} as VendorContextType);

type Props = {
  children: ReactNode;
};

export const VendorProvider = ({ children }: Props) => {
  const [vendor, setVendor] = useState<Vendor | null>(null);
  return (
    <VendorContext.Provider value={{ vendor, setVendor }}>
      {children}
    </VendorContext.Provider>
  );
};

export const useVendorContext = () => {
  return useContext(VendorContext);
};
