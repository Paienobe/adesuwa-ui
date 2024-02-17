export type VendorContextType = {
  vendor: Vendor | null;
  setVendor: React.Dispatch<React.SetStateAction<Vendor | null>>;
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
