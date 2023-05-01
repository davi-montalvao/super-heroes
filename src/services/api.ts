import axios from "axios";

const api = axios.create({
  baseURL: "https://candidato05.globalthings.net/api",
  headers: {
    accessKey: `1e89ca7f6a1f40768262edcea0761c0a`,
  },
});

export default api;
