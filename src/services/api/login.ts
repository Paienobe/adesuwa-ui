import { backendInstance } from "../axios/backendInstance";

type LoginDetails = { email: string; password: string };

export const loginUser = async (data: LoginDetails, userType: string) => {
  const endpointPath =
    userType == "customer" ? "/login-customer" : "/login-vendor";
  try {
    const request = await backendInstance(endpointPath, {
      method: "POST",
      data,
      headers: { "Content-Type": "application/json" },
    });
    return request.data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong!");
  }
};
