import axios from 'axios'
import { getToken, logout } from './login'

const api = axios.create({
  baseURL: 'http://localhost:8000/',
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
