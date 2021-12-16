import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

instance.defaults.timeout = 1000;

instance.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default instance;