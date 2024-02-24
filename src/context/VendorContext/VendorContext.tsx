import { ReactNode, createContext, useContext, useState } from "react";
import { InventoryItem, Vendor, VendorContextType } from "./types";
import { useSearchParams } from "react-router-dom";
import { defaultProductData } from "../../components/AddProductModal/constants";

const VendorContext = createContext({} as VendorContextType);

type Props = {
  children: ReactNode;
};

export const VendorProvider = ({ children }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [productData, setProductData] = useState(defaultProductData);
  const [category, setCategory] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const resetProductData = () => {
    setProductData(defaultProductData);
    setCategory("");
    setIsEditing(false);
  };

  return (
    <VendorContext.Provider
      value={{
        vendor,
        setVendor,
        searchParams,
        setSearchParams,
        inventory,
        setInventory,
        productData,
        setProductData,
        category,
        setCategory,
        isEditing,
        setIsEditing,
        resetProductData,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export const useVendorContext = () => {
  return useContext(VendorContext);
};
