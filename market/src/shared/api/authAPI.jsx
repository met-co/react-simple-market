import axios from "axios";

// 테스트용
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJidXp6IiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2NzM5NDUzMTEsImlhdCI6MTY3Mzk0MTcxMX0.RPFBk53OaCwL7dfwuZth3ulMI5pS0X1q5h3ltFSm77I";

/* Auth Instance */
export const authAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 100000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
});

authAPI.defaults.withCredentials = true;
authAPI.defaults.headers.post["Content-Type"] = "application/json";
