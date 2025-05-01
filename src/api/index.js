import axios from "axios";

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
export const serverApi = axios.create({
  baseURL: process.env.BASE_URL,
});
