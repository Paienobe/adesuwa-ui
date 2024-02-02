export type UserTypes = "vendor" | "customer";
export type UserOptionsType = {
  id: string;
  type: UserTypes;
  msg: string;
  image: string;
};
