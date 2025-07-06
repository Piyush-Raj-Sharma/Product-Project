import axios from "axios";

const instanceIP = axios.create({
  baseURL: "https://api.ipify.org",
  params: {
    format: "json"
  }
});

export default instanceIP;
