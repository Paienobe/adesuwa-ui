export type VendorPageContextType = {
  vendor: Vendor;
  setVendor: React.Dispatch<React.SetStateAction<Vendor>>;
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
