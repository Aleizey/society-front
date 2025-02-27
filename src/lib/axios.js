import Axios from 'axios';

const getToken = () => localStorage.getItem("auth_token");

const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  },
});

export default axios;
