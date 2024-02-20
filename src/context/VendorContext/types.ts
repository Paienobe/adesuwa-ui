import { SetURLSearchParams } from "react-router-dom";

export type VendorContextType = {
  vendor: Vendor | null;
  setVendor: React.Dispatch<React.SetStateAction<Vendor | null>>;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  inventory: InventoryItem[];
  setInventory: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
};

export type Vendor = {
  id: string;
  business_name: string;
  email: string;
  country: string;
  profile_image: string;
  banner_image: string;
  description: string;
};

export type InventoryItem = {
  id: string;
  name: string;
  images: string[];
  price: number;
  amount_available: number;
  category: string;
  discount: number;
  vendor_id: string;
};
