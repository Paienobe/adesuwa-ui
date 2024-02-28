import { backendInstance } from "../axios/backendInstance";

type VendorRegData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
  business_name: string;
  password: string;
};

type CustomerRegData = Omit<VendorRegData, "business_name">;

export const registerVendor = async (data: VendorRegData) => {
  try {
    const request = await backendInstance.post("/register-vendor", data);
    return request.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

export const registerCustomer = async (data: CustomerRegData) => {
  try {
    const request = await backendInstance.post("/register-customer", data);
    return request.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
