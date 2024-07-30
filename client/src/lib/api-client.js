import { HOST } from "@/utils/constants";
import axios from "axios";

const apiClient = axios.create({
  baseURL: HOST, // Enable cookies for cross-domain requests
});

export default apiClient;