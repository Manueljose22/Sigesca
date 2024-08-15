import axios, { InternalAxiosRequestConfig } from "axios";



export const Api = axios.create({
    baseURL: import.meta.env.API_BASE_URL ?? 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
      }
})

// const handleRequestAuthToken = (config: InternalAxiosRequestConfig<any>) =>{
//   const token = localStorage.getItem('token');

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
// }