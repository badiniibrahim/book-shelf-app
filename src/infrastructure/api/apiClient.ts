import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URI!;

const apiClient = axios.create({
  baseURL,
});

export default apiClient;
