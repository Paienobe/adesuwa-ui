import { ReactNode, createContext, useContext, useState } from "react";
import { Customer, CustomerContextType } from "./types";

const CustomerContext = createContext({} as CustomerContextType);

type Props = {
  children: ReactNode;
};

export const CustomerProvider = ({ children }: Props) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};
