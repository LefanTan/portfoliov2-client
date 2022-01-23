import axios from "axios";

const axiosInstance = () => {
  if (!process.env.REACT_APP_MANAGER_API_KEY) {
    throw new Error("API Key doesn't exist!");
  }
  return axios.create({
    baseURL: "https://[2605:fd00:4:1001:f816:3eff:fe10:f249]/api/",
    timeout: 5000,
    timeoutErrorMessage: "Timeout error",
    headers: { Authorization: process.env.REACT_APP_MANAGER_API_KEY || "" },
  });
};

export default axiosInstance;
