import { ReactNode, createContext, useContext, useState } from "react";
import { InventoryItem, Vendor, VendorContextType } from "./types";
import { useSearchParams } from "react-router-dom";

const VendorContext = createContext({} as VendorContextType);

type Props = {
  children: ReactNode;
};

export const VendorProvider = ({ children }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  return (
    <VendorContext.Provider
      value={{
        vendor,
        setVendor,
        searchParams,
        setSearchParams,
        inventory,
        setInventory,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export const useVendorContext = () => {
  return useContext(VendorContext);
};
