import { ReactNode, createContext, useEffect, useState } from "react";
import { RefreshContextType } from "./types";
import { refreshToken } from "../../services/api/refresh";
import { updateBearerToken } from "../../utils/updateBearerToken";
import { useVendorContext } from "../VendorContext/VendorContext";
import { useCustomerContext } from "../CustomerContext/CustomerContext";

const RefreshContext = createContext({} as RefreshContextType);

type Props = {
  children: ReactNode;
};

export const RefreshContextProvider = ({ children }: Props) => {
  const { setVendor } = useVendorContext();
  const { setCustomer } = useCustomerContext();
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    const handlerRefresh = () => {
      refreshToken()
        .then((result) => {
          const { access_token, user_type, user_data, expires_in } = result;

          updateBearerToken(access_token);
          user_type == "vendor" ? setVendor(user_data) : setCustomer(user_data);

          setTimeout(() => {
            handlerRefresh();
          }, expires_in * 1000 - 1000);
        })
        .finally(() => {
          setIsWorking(false);
        });
    };

    handlerRefresh();
  }, []);

  return (
    <RefreshContext.Provider value={{}}>
      {isWorking ? null : children}
    </RefreshContext.Provider>
  );
};
