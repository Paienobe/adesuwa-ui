import { ReactNode, createContext, useContext, useState } from "react";
import { AuthContextType, AuthStage, UserTypes } from "./type";

const AuthContext = createContext({} as AuthContextType);

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [userType, setUserType] = useState<UserTypes | null>(null);
  const [authStage, setAuthStage] = useState<AuthStage>("user-type-selection");

  return (
    <AuthContext.Provider
      value={{ userType, setUserType, authStage, setAuthStage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
