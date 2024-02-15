import axios from "axios";
import { BASE_API } from "../../config";

export const backendInstance = axios.create({
  baseURL: BASE_API,
  withCredentials: true,
});
