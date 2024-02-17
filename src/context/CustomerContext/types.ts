export type CustomerContextType = {
  customer: Customer | null;
  setCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
};

export type Customer = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  profile_image: string;
};
