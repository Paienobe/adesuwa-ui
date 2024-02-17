import { backendInstance } from "../axios/backendInstance";

export const refreshToken = async () => {
  const request = await backendInstance("/refresh");
  return request.data;
};
