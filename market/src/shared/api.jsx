import axios from 'axios'

// const BASE_URL = 'http://43.201.34.54:8080';
const BASE_URL = 'http://localhost:3001';

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options })
  return instance
}

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url, options) => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2NzM3NzY3MjEsImlhdCI6MTY3Mzc3MzEyMX0.Q4iaLboAAE0l4LjHsVyICQcLU_B62B1R5x97z0YS5ec';
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: 'Bearer ' + token },
    ...options,
  })
  return instance
}

export const defaultInstance = axiosApi(BASE_URL)
export const authInstance = axiosAuthApi(BASE_URL)