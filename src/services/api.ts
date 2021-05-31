import axios from 'axios'
import { getToken, logout } from './login'

const api = axios.create({
  baseURL: 'https://pxpay-api-zhi4y.ondigitalocean.app/',
  // baseURL: 'https://3945351fe3c0.ngrok.io/',
  // baseURL: "https://api.pxpay.com.br/",
})

api.interceptors.request.use(config => {
  const token = getToken()
  const headers = { ...config.headers }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return { ...config, headers }
})

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      logout()
    }
    throw err
  },
)

export default api
