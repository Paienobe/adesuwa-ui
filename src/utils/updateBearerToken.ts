import { backendInstance } from "../services/axios/backendInstance";

export const updateBearerToken = (accessToken: string) => {
  backendInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
};
