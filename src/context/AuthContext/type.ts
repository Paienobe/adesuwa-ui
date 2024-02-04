export type AuthContextType = {
  userType: UserTypes | null;
  setUserType: React.Dispatch<React.SetStateAction<UserTypes | null>>;
  authStage: AuthStage;
  setAuthStage: React.Dispatch<React.SetStateAction<AuthStage>>;
};

export type UserTypes = "vendor" | "customer";
export type UserOptionsType = {
  id: string;
  type: UserTypes;
  msg: string;
  image: string;
};
export type AuthStage = "user-type-selection" | "registration" | "login";
