import axios from "axios";
import { backendInstance } from "../axios/backendInstance";

type Product = {
  name: string;
  price: number;
  amount_available: number;
  category: string;
  discount: number;
  description: string;
  file_length: number;
};

type FileType = { [x: string]: File };

type ProductData = Product & FileType;

export const createProduct = async (data: any) => {
  try {
    const request = await backendInstance("/product", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      data,
    });
    return request.data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
