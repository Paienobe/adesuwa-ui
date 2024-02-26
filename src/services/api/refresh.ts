import { backendInstance } from "../axios/backendInstance";

export const refreshToken = async () => {
  try {
    const request = await backendInstance("/refresh");
    return request.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

export const cancelRefresh = async () => {
  try {
    const request = await backendInstance("/cancel-refresh");
    return request.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
