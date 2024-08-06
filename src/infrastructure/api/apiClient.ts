import { validateConfig } from "@/src/lib/validation";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URI!;

validateConfig(baseURL);

const apiClient = axios.create({
  baseURL,
});

export default apiClient;
